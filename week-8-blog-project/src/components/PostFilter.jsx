import { dbConnect } from "@/utils/dbConnection";
export default async function PostFilter() {
  const db = dbConnect();
  const posts = (
    await db.query(`
         SELECT * FROM blog_posts 
          `)
  ).rows;
  return <></>;
}
