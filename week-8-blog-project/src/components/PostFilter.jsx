import { dbConnect } from "@/utils/dbConnection";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
export default async function PostFilter() {
  const db = dbConnect();
  const posts = (
    await db.query(`
         SELECT * FROM blog_posts 
          `)
  ).rows;
  if (SearchParamsContext.filter) return <></>;
}
