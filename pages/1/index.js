export default function Horrorscenes() {
  return (
    <sdiv className="flex">
      <aside>
        <div class="flex flex-col w-[550px] h-screen overflow-y-auto border-r bg-white p-20 grid grid-rows-2 top-0 left-0 right-0 fixed">
          <div className="flex items-start mt-20">
            <h1 className="text-primary text-[72px] uppercase leading-[60px]">
              best horror scenes
            </h1>
          </div>
          <div>
            <div>
              <p className="text-primary text-[24px] mb-8">
                An ever growing collection featuring some of the best scenes in
                horror.
              </p>
              <p className="text-primary">
                “Best Horror Scenes” is a collection of scenes I feel are some
                of the most affecting in horror. Some may be simple black cat
                scares, others may be more subdued or nuanced. Many come from
                films that aren't necessarily “horror” but have elements or
                threads of horror.
              </p>
              <div className="text-gray-400 mt-10">
                <div className="flex flex-row gap-3 underline underline-offset-4 mb-1">
                  <p>Newsletter</p>
                  <p>Sugget a Scene</p>
                  <p>YouTube</p>
                </div>
                <div className="flex flex-row gap-3 underline underline-offset-4">
                  <span>Twitter</span>
                  <span>Contact</span>
                  <span>RSS</span>
                  <span>Letterboxd</span>
                </div>
              </div>
              <div className="mt-6 w-[335px]">
                <p className="text-gray-400 text-[10px]">
                  Best Horror Scenes is a love letter to the Horror film genre
                  by Brandon Durham. Most film clips contain major spoilers, and
                  it is recommended you don’t watch the clip if you plan on
                  seeing the film.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex-col overflow-hidden">
        <div className="flex bg-red-200 items-center justify-center p-40 border-4 text-[200px]">
          head
        </div>

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="flex bg-black items-center justify-center p-40 border-4"></div>
          <div className="flex bg-black items-center justify-center p-40 border-4"></div>
          <div className="flex bg-black items-center justify-center p-40 border-4"></div>
          <div className="flex bg-black items-center justify-center p-40 border-4"></div>
          <div className="flex bg-black items-center justify-center p-40 border-4"></div>
        </main>
      </div>
    </sdiv>
  );
}
