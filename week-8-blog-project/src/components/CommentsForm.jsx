import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { dbConnect } from "@/utils/dbConnection";

export default function CommentsForm({ post_id }) {
  async function handleSubmit(formData) {
    "use server";
    const username = formData.get("username");
    const comment = formData.get("comment");
    const db = dbConnect();
    await db.query(
      `
            INSERT INTO blog_comments (username, comment, post_number)
            VALUES ($1, $2, $3)`,
      [username, comment, post_id]
    );
    revalidatePath(`/posts/${post_id}`);
    redirect(`/posts/${post_id}`);
  }
  return (
    <div className="flex w-2/5 mx-auto rounded-lg border-solid border-gray-600 justify-evenly p-5">
      <form
        id="form"
        action={handleSubmit}
        className="flex flex-col items-center w-2/3 border-2 shadow-lg ..."
      >
        <h2>Leave a comment?</h2>
        <label htmlFor="username">Your username:</label>
        <input name="username" placeholder="username"></input>
        <label htmlFor="comment">Your comment:</label>
        <div>
          <textarea
            className="resize"
            name="comment"
            required
            placeholder="Write your comment here!"
          ></textarea>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
