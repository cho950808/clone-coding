export default function PaintBox() {
  return (
    <main className="flex grid h-screen">
      <div class="flex grid grid-rows-7 grid-flow-col">
        <p class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center">
          <svg
            class="svg--logo home-button__svg"
            width="86"
            height="30"
            viewBox="0 0 86 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70.299 0C63.9942 0 58.4171 4.15369 56.397 10.1142C54.3819 4.15369 48.8048 0 42.5 0C36.1952 0 30.6181 4.15369 28.603 10.1142C26.5828 4.15369 21.0057 0 14.701 0C6.59483 0 0 6.72897 0 15C0 23.271 6.59483 30 14.701 30C21.0057 30 26.5828 25.8463 28.603 19.8858C30.6232 25.8463 36.1952 30 42.5051 30C48.8149 30 54.387 25.8463 56.4071 19.8858C58.4273 25.8463 63.9993 30 70.3092 30C78.4153 30 85.0102 23.271 85.0102 15C85.0102 6.72897 78.4052 0 70.299 0ZM70.299 1.63551C77.5197 1.63551 83.3971 7.6324 83.3971 15C83.3971 22.3676 77.5197 28.3645 70.299 28.3645C63.0783 28.3645 57.201 22.3676 57.201 15C57.201 7.6324 63.0783 1.63551 70.299 1.63551ZM42.5 13.8422L33.829 4.99481C36.2308 2.82451 39.2891 1.63551 42.5 1.63551C45.7109 1.63551 48.7691 2.82451 51.171 4.99481L42.5 13.8422ZM41.3652 15L32.6943 23.8474C30.5672 21.3967 29.4019 18.2762 29.4019 15C29.4019 11.7238 30.5672 8.60332 32.6943 6.15265L41.3652 15ZM42.5 16.1578L51.171 25.0052C48.7691 27.1755 45.7109 28.3645 42.5 28.3645C39.2891 28.3645 36.2308 27.1755 33.829 25.0052L42.5 16.1578ZM43.6348 15L52.3057 6.15265C54.4328 8.60332 55.598 11.7238 55.598 15C55.598 18.2762 54.4328 21.3967 52.3057 23.8474L43.6348 15ZM14.701 1.63551C21.9217 1.63551 27.799 7.6324 27.799 15C27.799 22.3676 21.9217 28.3645 14.701 28.3645C7.48024 28.3645 1.60291 22.3676 1.60291 15C1.60291 7.6324 7.48024 1.63551 14.701 1.63551Z"
              fill="#AF7832"
            ></path>
            <path
              d="M10.6658 9.37183H8.98657V20.6335H10.6658V9.37183Z"
              fill="#AF7832"
            ></path>
            <path
              d="M16.9859 20.7736C18.1969 20.7736 19.1943 20.2544 19.9423 19.2264C20.6446 18.2658 21.0008 16.8432 21.0008 14.9948C21.0008 13.1464 20.6446 11.7238 19.9423 10.7684C19.2045 9.75598 18.1817 9.22119 16.9859 9.22119C15.7849 9.22119 14.7927 9.74559 14.0345 10.784C13.3271 11.7497 12.9709 13.1672 12.9709 14.9948C12.9709 16.864 13.3271 18.2918 14.0294 19.242C14.7825 20.2596 15.7799 20.7736 16.9859 20.7736ZM16.9859 10.9294C17.6626 10.9294 18.1817 11.2098 18.6091 11.8069C19.0773 12.4611 19.3164 13.5358 19.3164 15C19.3164 16.4642 19.0773 17.5389 18.6091 18.1932C18.1766 18.7902 17.6626 19.0706 16.9859 19.0706C16.3091 19.0706 15.79 18.7902 15.3626 18.1932C14.8944 17.5389 14.6553 16.4642 14.6553 15C14.6553 13.5358 14.8944 12.4611 15.3626 11.8069C15.7951 11.2046 16.3091 10.9294 16.9859 10.9294Z"
              fill="#AF7832"
            ></path>
            <path
              d="M67.2051 9.43921H65.5259V20.7009H67.2051V9.43921Z"
              fill="#AF7832"
            ></path>
            <path
              d="M73.5913 17.2897L71.276 20.6854H73.2758L76.7666 15.5711C77.1992 14.8858 77.418 14.1277 77.418 13.3074C77.418 12.1599 77.0414 11.1942 76.2985 10.4361C75.5555 9.6781 74.6243 9.29388 73.5303 9.29388C72.4362 9.29388 71.505 9.6781 70.7621 10.4361C70.0191 11.1942 69.6426 12.1599 69.6426 13.3074C69.6426 14.4548 70.0191 15.4154 70.7672 16.1682C71.5203 16.9263 72.4718 17.3105 73.5913 17.2897ZM73.5303 10.9969C74.1765 10.9969 74.6803 11.1994 75.1077 11.6355C75.5352 12.0665 75.7336 12.6013 75.7336 13.3074C75.7336 13.9876 75.5352 14.5068 75.1026 14.9481C74.6752 15.3842 74.1714 15.5919 73.5252 15.5919C72.8688 15.5919 72.365 15.3894 71.9375 14.9637C71.5152 14.5379 71.3167 14.0135 71.3167 13.3126C71.3167 12.6064 71.5152 12.0717 71.9426 11.6407C72.3752 11.1994 72.8789 10.9969 73.5303 10.9969Z"
              fill="#AF7832"
            ></path>
          </svg>
        </p>

        <button class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          #10
        </button>
        <button class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          #9
        </button>
        <p class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          #8
        </p>
        <button class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          #7
        </button>
        <button class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          #6
        </button>
        <p class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center"></p>

        <p class="col-span-[20px] text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center"></p>
        <div class="col-span-[20px] row-span-5 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full items-center justify-center overflow-hidden">
          {/* <img
            src="http://10x19.co/staging/wp-content/uploads/2019/12/Dickens_5-1000x1000.jpg"
            className="object-cover w-full h-full"
          /> */}
        </div>
        <p class="col-span-[20px] text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center"></p>

        <button class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          MENU
        </button>
        <button class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          #5
        </button>
        <button class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          #4
        </button>
        <button class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          #3
        </button>
        <button class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          #2
        </button>
        <button class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center hover:bg-[#af7832] hover:text-white">
          #1
        </button>
        <p class="col-span-1 text-[28px] text-[#af7832] border-2 border-[#af7832] text-black w-full h-full flex items-center justify-center"></p>
      </div>
    </main>
  );
}
