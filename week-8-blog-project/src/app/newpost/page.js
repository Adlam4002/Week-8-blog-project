import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default function AppNewPost() {
  async function handleSubmit(formData) {
    "use server";
    const title = formData.get("title");
    const author = formData.get("author");
    const year = formData.get("year");
    const location = formData.get("location");
    const category = formData.get("category");
    const content = formData.get("content");
    const src = formData.get("src");
    const db = dbConnect();
    await db.query(
      `
        INSERT INTO blog_posts (title, author, year, location, category, content, src)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [title, author, year, location, category, content, src]
    );
    revalidatePath("/posts");
    redirect("/posts");
  }
  return (
    <main>
      <form
        id="form"
        className="flex flex-col items-center w-2/3"
        action={handleSubmit}
      >
        <label htmlFor="title">Post title:</label>
        <input
          className="text-black"
          name="title"
          type="text"
          required
          placeholder="Name your article"
        ></input>
        <label htmlFor="author">Post author:</label>
        <input
          placeholder="Enter your username"
          className="text-black"
          name="author"
          type="text"
          required
        ></input>
        <label htmlFor="year">Year of visit:</label>
        <input
          className="text-black"
          name="year"
          type="number"
          placeholder="2024"
          required
        ></input>
        <label htmlFor="location">Trip location:</label>
        <input
          className="text-black"
          name="location"
          type="text"
          placeholder="Where did you go?"
          required
        ></input>
        <label htmlFor="category">Continent</label>
        <select name="category" required>
          <option value="">Select...</option>
          <option value="europe">Europe</option>
          <option value="asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="north america">North America</option>
          <option value="south america">South America</option>
          <option value="oceania">Australia/Oceania</option>
          <option value="antarctica">Antarctica</option>
        </select>
        <label htmlFor="content">Blog post:</label>
        <div id="bpta">
          <textarea
            className="resize"
            name="content"
            required
            placeholder="Write your blog post here!"
          ></textarea>
        </div>
        <label htmlFor="src">
          Insert image url, leave as is if you dont have an image
        </label>
        <input
          name="src"
          placeholder="Only use images from https://unsplash.com "
        ></input>
        <button>Submit</button>
      </form>
    </main>
  );
}