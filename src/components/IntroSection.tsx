import SocialsTab from "./SocialsTab";

const IntroSection = () => {
  return (
    <div className="flex flex-col relative justify-center items-center gap-6 h-screen w-full bg-transparent px-32 z-10">
      <div className="flex items-center h-fit w-7/12 text-white shadow-6xl">
        <p className="font-family-recoletaRegular text-4xl text-[#907dac] text-wrap">
          <span className="text-7xl text-[#e6e6dd]">Hey, I am Divyansh,</span> a
          Software Developer and Designer based in Bengaluru.
        </p>
      </div>
      <SocialsTab />
    </div>
  );
};

export default IntroSection;
