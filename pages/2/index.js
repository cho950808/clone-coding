export default function PaintBox() {
  return (
    <div className="flex relative items-center justify-center">
      <div className="flex absolute h-full relative">
        <div className="bg-white z-20 fixed top-0 left-0 right-0 w-full">
          <nav className="bg-white">
            <div className="m-auto px-40 py-10">
              <div className="flex justify-between">
                <div className="flex space-x-4">
                  <div className="hidden md:flex items-center space-x-1">
                    <a
                      href="/features"
                      className="py-5 px-3 text-gray-700 hover:text-gray-900"
                    >
                      NAIL STUDIO
                    </a>
                    <a
                      href="#"
                      className="py-5 px-3 text-gray-700 hover:text-gray-900"
                    >
                      SHOP PRODUCT
                    </a>
                  </div>
                </div>
                {/* <div className="flex items-center"> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="h-20 mr-[100px]"
                >
                  <path
                    d="M4.2,4h5.7c1.3,0,2,0.6,2,1.7c0,0.7-0.2,1.7-2.1,1.7H4.2V4z M4.2,10.4h6c2.9,0,4.9-1.9,4.9-4.8
	c0-2.8-2-4.5-5.1-4.5H1.1v15.6h3.1V10.4z"
                  ></path>
                  <path d="M50.9,5.6L53,9.8h-4.2L50.9,5.6z M49.7,1l-7.7,15.6h3.4l1.9-3.9h7.1l1.9,3.9h3.4L52,1H49.7z"></path>
                  <rect x="90.9" y="0.9" width="3.1" height="15.8"></rect>
                  <polygon
                    points="88.9,47.7 97.2,57.3 99.1,57.3 99.1,41.7 96,41.7 96,51.3 87.7,41.7 85.8,41.7 85.8,57.3
	88.9,57.3 "
                  ></polygon>
                  <polygon points="84.9,83.1 84.9,86 90.9,86 90.9,98.7 94,98.7 94,86 100,86 100,83.1 "></polygon>
                  <path
                    d="M10.5,54.4H3.6v-4.1h6.8c1.3,0,2,0.7,2,2C12.4,53.6,11.7,54.4,10.5,54.4 M9.8,47.4H3.6v-2.7h6.2
	c1.4,0,1.7,0.5,1.7,1.4C11.5,46.6,11.3,47.4,9.8,47.4 M15.6,52.4c0-1.6-0.6-2.9-1.9-3.9c0.6-0.7,0.9-1.5,0.9-2.6
	c0-1.6-0.6-4.2-4.9-4.2H0.5v15.6h9.6C13.5,57.3,15.6,55.4,15.6,52.4"
                  ></path>
                  <path
                    d="M8.1,96.1c-2.9,0-4.9-2.2-4.9-5.2c0-3,2.1-5.2,4.9-5.2c2.9,0,4.9,2.2,4.9,5.2
	C13,93.9,10.9,96.1,8.1,96.1 M8.1,82.8c-4.7,0-8.1,3.4-8.1,8.2c0,4.7,3.4,8.1,8.1,8.1c4.7,0,8.1-3.4,8.1-8.1
	C16.1,86.2,12.8,82.8,8.1,82.8"
                  ></path>
                  <polygon
                    points="55.3,83.1 51,88.5 46.6,83.1 42.7,83.1 49,90.9 42.6,98.7 46.4,98.7 50.9,93.2 55.4,98.7
	59.3,98.7 52.9,90.8 59.2,83.1 "
                  ></polygon>
                </svg>
                {/* </div> */}

                <div className="flex items-center space-x-1">
                  <a
                    href="#"
                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                  >
                    JOURNAL
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <main className="2xl:mt-[140px] mt-[140px] w-full flex flex-col w-full h-full relative px-20 bg-black">
          <section className="mt-8 relative">
            <div className="flex grid grid-cols-2 h-full xs:px-60 xs:py-10">
              <div className="bg-red-400">
                <img
                  src="//cdn.shopify.com/s/files/1/0086/4865/4895/files/Like_French_-_Blog_Photo-3_960x960_crop_center.jpg?v=1635790977"
                  className="h-full w-full bg-cover"
                ></img>
              </div>
              <div className="flex items-center text-center bg-[#fbf7f6] w-full text-black text-[34px]">
                <p>
                  <em>Like French,</em>
                  our deep burgundy polish that's as timeless as red lipstick.
                  Statement-making as a solid color or with art, make it your
                  signature red.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 relative">
            <div className="flex grid grid-cols-2 h-full xs:px-60 xs:py-10">
              <div className="">
                <img
                  src="//cdn.shopify.com/s/files/1/0086/4865/4895/files/PAINTBOX-UES_0027_copy_960x960_crop_center.jpg?v=1628778916"
                  className="h-full w-full bg-cover"
                />
              </div>
              <div className="flex flex-col w-full h-full items-center text-center bg-[#fbf7f6] text-black text-[34px]">
                <div className="h-full w-full items-center justify-center">
                  <p>OUR STUDIO</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
