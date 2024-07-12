import Link from "next/link";
import { dbConnect } from "@/utils/dbConnection";
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
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
