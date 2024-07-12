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
    <main>
      <form id="form" action={handleSubmit}>
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
    </main>
  );
}
