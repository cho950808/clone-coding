import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center h-screen justify-center gap-10">
      <div className="flex space-x-20">
        <Link href="/1">
          <button className="bg-blue-300 h-20 px-10 text-4xl text-black transition duration-150">
            besthorrorscenes
          </button>
        </Link>
        <Link href="/2">
          <button className="bg-blue-300 h-20 px-10 text-4xl text-black">
            paint-box
          </button>
        </Link>
        <Link href="/3">
          <button className="bg-blue-300 h-20 px-10 text-4xl text-black">
            10x19
          </button>
        </Link>
        <Link href="/8">
          <button className="bg-blue-300 h-20 px-10 text-4xl text-black">
            donicaida
          </button>
        </Link>
      </div>

      {/* <div className="flex space-x-20 px-4">
        <Link href="/4">
          <button className="bg-red-300 h-20 px-10 text-4xl text-black transition duration-150">
            z-0-0-fr
          </button>
        </Link>
        <Link href="/5">
          <button className="bg-red-300 h-20 px-10 text-4xl text-black">
            schwartzmedia
          </button>
        </Link>
        <Link href="/6">
          <button className="bg-red-300 h-20 px-10 text-4xl text-black">
            tolv.dk
          </button>
        </Link>
        <Link href="/7">
          <button className="bg-red-300 h-20 px-10 text-4xl text-black">
            rodicdavidson
          </button>
        </Link>
      </div>

      <div className="flex space-x-20 px-4">
        <Link href="/9">
          <button className="bg-red-300 h-20 px-10 text-4xl text-black">
            canalstreet.market
          </button>
        </Link>
        <Link href="/10">
          <button className="bg-red-300 h-20 px-10 text-4xl text-black">
            wonhundred.com
          </button>
        </Link>
      </div> */}
    </div>
  );
}
