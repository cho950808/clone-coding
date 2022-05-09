export default function Donicalda() {
  return (
    <div className="flex flex-col items-start px-[40px] h-screen w-full text-[#444444] m-auto">
      <section className="w-full mt-[25px]">
        <h1 className="text-[36px]">
          Donica Ida is an art director and designer working in editorial,
          identity, and digital design.
        </h1>
      </section>
      <section className="mt-[50px] w-full m-auto">
        <div className="flex flex-rows justify-between">
          <div className="text-[12px] basis-1/5 px-2 px-2">
            <label className="">Year</label>
          </div>
          <div className="text-[12px] basis-1/2 px-2 px-2">
            <label className="">Client</label>
          </div>
          <div className="text-[12px] basis-1/2 px-2 px-2">
            <label>Project</label>
          </div>
          <div className="basis-1/2 px-2"></div>
        </div>
        <hr className="border-1.5 border-black" />

        <div className="flex flex-rows justify-between py-4">
          <div className="text-[20px] basis-1/5 px-2 px-2">
            <label className="">2019</label>
          </div>
          <div className="text-[20px] basis-1/2 px-2 px-2">
            <label className="">Cayas</label>
          </div>
          <div className="text-[20px] basis-1/2 px-2 px-2">
            <label>Identity, website</label>
          </div>
          <div className="text-[20px] basis-1/2 px-2"></div>
        </div>
        <hr className="border-1.5 border-black" />

        <div className="flex flex-rows justify-between py-4">
          <div className="text-[20px] basis-1/5 px-2">
            <label className="">2019</label>
          </div>
          <div className="text-[20px] basis-1/2 px-2">
            <label className="">Huffpost Highline</label>
          </div>
          <div className="text-[20px] basis-1/2 px-2">
            <label>Identity, editorial</label>
          </div>
          <div className="text-[20px] basis-1/2 px-2"></div>
        </div>
        <hr className="border-1.5 border-black" />
      </section>

      <section className="mt-20">
        <h2 className="text-[26px]">
          <label className="text-[12px]">Education</label> MFA Design
          Entrepreneurship, School of Visual Arts; BFA Visual Communication
          Design, University of Washington.
          <label className="text-[12px]">Formerly</label> at HuffPost Highline,
          Mary Review, Critical Mass, Pentagram.
          <label className="text-[12px]">Select clients</label> Airbnb, Condé
          Nast Traveler, Google Creative Lab, Planned Parenthood.
        </h2>
      </section>

      <section className="py-20 flex flex-col justify-between">
        <h2 className="text-[26px]">
          <label className="text-[12px]">About</label> Donica Ida is a
          Hawaii-born designer who loves beautiful typography and a well-told
          story. She is the former Creative Director of HuffPost Highline and
          Design Director of Mary Review. Donica lives somewhere between
          Brooklyn and the PNW, and splits her spare time between road trips,
          hikes and ramen. She is currently contracting at Google Creative Lab
          while looking for new opportunities*.
          <label className="text-[12px]">Connect</label>
          <br />
          <a className="underline underline-offset-4">Email</a>,&nbsp;
          <a className="underline underline-offset-4">Instagram</a>,&nbsp;
          <a className="underline underline-offset-4">LinkedIn</a>,&nbsp;
          <a className="underline underline-offset-4">Workin</a>g
          <a className="underline underline-offset-4">NotWorkin</a>g.
        </h2>
        <label className="text-[12px] my-[20px]">
          *2021 portfolio update coming shortly. Email for latest work. Mahalo.
        </label>
      </section>
    </div>
  );
}
