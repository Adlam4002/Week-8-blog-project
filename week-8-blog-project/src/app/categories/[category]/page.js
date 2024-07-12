import CommentsForm from "@/components/CommentsForm";
import { dbConnect } from "@/utils/dbConnection";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Category post list",
  description: "A travel blog by Alex Adlam",
};

export default async function AppCategoriesCat({ params }) {
  const db = dbConnect();
  let category = params.category;
  const posts = (
    await db.query(` SELECT * FROM blog_posts WHERE category= $1`, [category])
  ).rows;
  //   const comments = await db.query(
  //     `SELECT * FROM blog_comments WHERE post_number=${posts.id}`
  //   );

  //   const comrow = comments.rows;
  //   console.log(`comrow: ${comrow}`);

  return (
    <main className="flex flex-col items-center  p-24">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      {/* {posts.map((item) => (
        <div key={item.id}>
          <h2>Article: {item.title}</h2>
          <h3>Author: {item.author}</h3> <h3>Location:{item.location}</h3>
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

      {comrow.map((x) => (
        <div key={x.id}>
          <h3>{x.username}</h3>
          <p>{x.comment}</p>
        </div>
      ))}
      <CommentsForm post_id={params.id} /> */}
    </main>
  );
}
