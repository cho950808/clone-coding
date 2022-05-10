import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center h-screen justify-center gap-10">
      <div className="flex space-x-20">
        <Link href="/1">
          <button className="text-4xl text-black">besthorrorscenes</button>
        </Link>
        <Link href="/2">
          <button className="text-4xl text-black">paint-box</button>
        </Link>
        <Link href="/3">
          <button className="text-4xl text-black">10x19</button>
        </Link>
        <Link href="/8">
          <button className="text-4xl text-black">donicaida</button>
        </Link>
      </div>
    </div>
  );
}
