import { dbConnect } from "@/utils/dbConnection";
export default async function AppTest() {
  const db = dbConnect();
  const comments = await db.query(`SELECT * FROM blog_comments`);
  const comrow = comments.rows;
  console.log(comrow);
  return <h1>Test page</h1>;
}
