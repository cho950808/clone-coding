export default function Aside() {
  return (
    <aside class="w-64" aria-label="Sidebar">
      <div class="w-[500px] h-full shadow-md bg-white p-20 absolute grid grid-rows-2 z-20">
        <div>
          <div className="">
            <h1 className="text-primary text-[72px] uppercase leading-[60px]">
              best horror scenes
            </h1>
          </div>
        </div>
        <div>
          <div>
            <p className="text-primary text-[24px] mb-8">
              An ever growing collection featuring some of the best scenes in
              horror.
            </p>
            <p className="text-primary">
              “Best Horror Scenes” is a collection of scenes I feel are some of
              the most affecting in horror. Some may be simple black cat scares,
              others may be more subdued or nuanced. Many come from films that
              aren't necessarily “horror” but have elements or threads of
              horror.
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
                Best Horror Scenes is a love letter to the Horror film genre by
                Brandon Durham. Most film clips contain major spoilers, and it
                is recommended you don’t watch the clip if you plan on seeing
                the film.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
