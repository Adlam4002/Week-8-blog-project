import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="p-1">
        <Link href="/">Home</Link> | <Link href="/posts">Post List</Link> |{" "}
        <Link href="/newpost">Add Post</Link> |{" "}
        <Link href="/categories">Continents</Link>
      </nav>
    </>
  );
}
