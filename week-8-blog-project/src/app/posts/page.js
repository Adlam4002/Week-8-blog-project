import Link from "next/link";
import { dbConnect } from "@/utils/dbConnection";
export const metadata = {
  title: "Post list",
  description: "A travel blog by Alex Adlam",
};
export default async function AppPosts({ searchParams }) {
  const db = dbConnect();
  const posts = (
    await db.query(`
       SELECT * FROM blog_posts 
        `)
  ).rows;
  if (searchParams.sort === "desc") {
    posts.reverse();
  }
  return (
    <main className="flex flex-col items-center  p-24">
      <h2>Post List</h2>
      <Link href={"/posts?sort=asc"}>Sort ascending</Link> -{" "}
      <Link href={"/posts?sort=desc"}>Sort descending</Link>
      <ul className="flex flex-row flex-wrap p-3 h-3/4 w-4/5 overflow-y-auto">
        {posts.map((post) => (
          <Link
            className="bg-cover shadow-lg ..."
            key={post.id}
            href={`/posts/${post.id}`}
            id="review-box"
            style={{
              backgroundImage: `url(${
                post.src ||
                "https://images.unsplash.com/photo-1647485684426-4e4a53cb87a9?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              })`,
            }}
          >
            <li className="bg-opacity-50 rounded-md ... bg-black text-white inline-block">
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
