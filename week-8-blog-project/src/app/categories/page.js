import { dbConnect } from "@/utils/dbConnection";
import Link from "next/link";
export default async function AppCategories({ searchParams }) {
  const db = dbConnect();
  const posts = (
    await db.query(`
       SELECT * FROM blog_posts 
        `)
  ).rows;
  //   const filteredPosts = posts.filter((post) => {
  //     if (!searchParams.has("filter")) {
  //       return true;
  //     }
  //     return posts.category === searchParams.get("filter");
  //   });
  return (
    <main className="flex flex-col items-center  p-24">
      <h2>Continent List</h2>

      <ul>
        <Link href={"/categories/europe"}>
          <li>Europe</li>
        </Link>
        <br />
        <Link href={"/categories/asia"}>
          <li>Asia</li>
        </Link>
        <br />
        <Link href={"/categories/africa"}>
          <li>Africa</li>
        </Link>
        <br />
        <Link href={"/categories/north-america"}>
          <li>North America</li>
        </Link>
        <br />
        <Link href={"/categories/south-america"}>
          <li>South America</li>
        </Link>
        <br />
        <Link href={"/categories/oceania"}>
          <li>Oceania</li>
        </Link>
        <br />
        <Link href={"/categories/antarctica"}>
          <li>Antarctica</li>
        </Link>
        <br />
        {/* {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/categories/${post.category}`}>{post.category}</Link>
          </li>
        ))} */}
      </ul>
    </main>
  );
}
