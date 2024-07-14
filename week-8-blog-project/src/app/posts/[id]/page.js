import CommentsForm from "@/components/CommentsForm";
import { dbConnect } from "@/utils/dbConnection";
import Image from "next/image";
export const metadata = {
  title: "Blog entry",
  description: "A travel blog by Alex Adlam",
};

export default async function AppPostsId({ params }) {
  const db = dbConnect();
  const posts = (
    await db.query(` SELECT * FROM blog_posts WHERE id=${params.id}`)
  ).rows;
  const comments = await db.query(
    `SELECT * FROM blog_comments WHERE post_number=${params.id}`
  );
  const comrow = comments.rows;
  console.log(`comrow: ${comrow}`);
  return (
    <main className="flex flex-col items-center pl-2 h-auto lg:p-24">
      {posts.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <h2>Article: {item.title}</h2>
          <h3>Author: {item.author}</h3> <h3>Location: {item.location}</h3>
          <p>{item.content}</p>
          <Image
            src={
              item.src ||
              "https://images.unsplash.com/photo-1576341592370-3151269da47e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="image provided by author"
            width={400}
            height={225}
          />
        </div>
      ))}
      <CommentsForm post_id={params.id} />
      <div
        id="comment-section"
        className="w-3/5 lg:overflow-auto flex flex-col"
      >
        <h4>User comments:</h4>
        {comrow.map((x) => (
          <div
            key={x.id}
            className="p-2 h-auto border-solid border-2 shadow-md ... "
          >
            <h2 className="ext-lg">{x.username}</h2>
            <p>{x.comment}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
