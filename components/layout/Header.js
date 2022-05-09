export default function Header() {
  return (
    <div className="bg-black z-10 fixed top-0 left-0 right-0 w-full">
      <nav className="flex items-center m-auto h-[120px] xs:w-[1024px]">
        <p className="text-white">
          Currently viewing everything sorted by random.
        </p>
      </nav>
      <hr />
    </div>
  );
}
