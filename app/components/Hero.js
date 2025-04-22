export default function Hero() {
  return (
    <section className="bg_custom">
      <div className="flex flex-col md:flex-row w-full min-h-screen items-center pt-[30px]  px-[47px] lg:px-[0]">
        {/* Left Column - 40% */}
        <div className="md:w-[50%] w-full flex flex-col justify-center items-start gap-4 lg:pl-[93px] mb-[40px]">
          <h1 className="lg:text-[17px] text-[14px] font-bold uppercase tracking-[0.12em] font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#d73e87] via-[#239eb9] to-[#774dff]">
            Responsive. Pixel-Perfect. Code-Free.
          </h1>
          <h1 className="text-white font-bold lg:text-[68px] text-[48px] leading-[72px] mt-[30px] w-full lg:w-[550px]">
            Make web design feel like home
          </h1>
          <p className="text-[20px] text-[#B5C0CC] mt-[13px] w-full lg:w-[650px]">
            Use familiar graphic editor tools to create pixel-perfect Web Pages,
            and not just mockups. Focus on the creative part, and we will take
            care of the rest.
          </p>
          <div className="flex gap-4 mt-4">
            <button
              className="inline-flex items-center justify-center 
             h-[42px] px-[23px] 
             text-[#191925] text-[17px] leading-[24px] 
             font-bold font-sans 
             border-2 border-transparent 
             rounded-full 
             bg-[#F5BA31] 
             transition-colors duration-300 ease-out 
             focus:outline-none cursor-pointer"
            >
              Try For Free
            </button>
            <button
              className="inline-flex items-center justify-center 
              py-[12px]
             h-[42px] px-[23px] 
             text-[#B5C0CC] text-[17px] leading-[24px] 
             font-bold font-sans 
             border-2 border-[#2E3040] 
             rounded-full 
             bg-transparent 
             transition-colors duration-300 ease-out 
             ml-[13px] 
             focus:outline-none cursor-pointer"
            >
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Column - 60% */}
        <div className="md:w-[50%] w-full">
          <div className="w-full relative">
            <img
              src="/images/radial.svg"
              alt="Sample"
              className="w-[100%] lg:h-[880px] h-auto"
            />
            <div className="absolute left-0 right-0 z-10 lg:top-[10%] top-[20%]">
              <img
                src="/images/ban.webp"
                alt="Sample"
                className="w-[100%] lg:h-[680px] h-auto "
              />
              <img
                src="/images/1.webp"
                alt=""
                className="absolute left-[-6%] right-0 z-10 top-[11%] hidden lg:block"
              />
              <img
                src="/images/2.webp"
                alt=""
                className="absolute right-[-6%]  z-10 top-[11%] hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
