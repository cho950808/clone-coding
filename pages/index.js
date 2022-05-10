import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center h-screen justify-center gap-10">
      <Link href="/1">
        <button className="text-2xl text-black">dd</button>
      </Link>
      <Link href="/2">
        <button className="text-2xl text-black">dd</button>
      </Link>
      <Link href="/3">
        <button className="text-2xl text-black">dd</button>
      </Link>
      <Link href="/4">
        <button className="text-2xl text-black">dd</button>
      </Link>
      <Link href="/5">
        <button className="text-2xl text-black">dd</button>
      </Link>
      <Link href="/6">
        <button className="text-2xl text-black">dd</button>
      </Link>
      <Link href="/7">
        <button className="text-2xl text-black">dd</button>
      </Link>
    </div>
  );
}
