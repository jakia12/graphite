export default function Hero() {
  return (
    <section className="bg-[url('/images/bg.png')] bg-cover bg-center">
      <div className="bg_custom mt-[-100px] pt-[154px] pb-[50px] lg:pb-[0] ">
        <div className="flex flex-col md:flex-row w-full min-h-screen items-center pt-[30px]  px-[47px] lg:px-[0]">
          {/* Left Column - 40% */}
          <div className="md:w-[50%] w-full flex flex-col justify-center items-start gap-4 lg:pl-[93px] mb-[32px]">
            <h1 className="lg:text-[17px] text-[14px] font-bold uppercase tracking-[0.12em] font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#d73e87] via-[#239eb9] to-[#774dff] lg:text-left text-center">
              Responsive. Pixel-Perfect. Code-Free.
            </h1>
            <h1 className="text-white font-bold lg:text-[68px] text-[38px] lg:leading-[72px] mt-[28px] w-full lg:w-[550px] lg:text-left text-center">
              Make web design feel like home
            </h1>
            <p className="lg:text-[20px] text-[18px] text-[#B5C0CC] mt-[13px] w-full lg:w-[650px] lg:text-left text-center">
              Use familiar graphic editor tools to create pixel-perfect Web
              Pages, and not just mockups. Focus on the creative part, and we
              will take care of the rest.
            </p>
            <div className="lg:flex gap-4 mt-4 text-center lg:text-none">
              <button
                className="
             py-[6px] lg:px-[23px] px-[27px] 
             text-[#191925] text-[17px] leading-[24px] 
             font-semibold 
             border-2 border-transparent 
             rounded-full 
             bg-[#F5BA31] 
             mb-[24px]
           "
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
      </div>
      <div className="bg-[#00000099] ">
        <div className="container  mx-auto px-[25px] lg:py-[110px] py-[80px]">
          {/* first grid item */}
          <div className="lg:flex gap-x-[60px] ">
            {/* Column 1 */}
            <div className="lg:text-left text-center space-y-3 mb-[25px]">
              <img
                src="/images/gr1.svg"
                alt="Image 1"
                className="w-[90px] h-[90px] object-cover rounded-lg mx-auto lg:mx-0"
              />
              <h3 className="mt-[28px] text-[24px] leading-[33px] text-[#ECF2F5] font-sans">
                Design freedom
              </h3>
              <p className="mt-[10px] text-[17px] leading-[24px] text-[#B5C0CC] font-sans">
                Customize the hell out of your responsive grid and switch
                between absolute and auto-layout positioning on the fly.
              </p>
            </div>

            {/* Column 2 */}
            <div className="lg:text-left text-center space-y-3 mb-[25px]">
              <img
                src="/images/gr2.svg"
                alt="Image 2"
                className="w-[90px] h-[90px] object-cover rounded-lg mx-auto lg:mx-0"
              />
              <h3 className="mt-[28px] text-[24px] leading-[33px] text-[#ECF2F5] font-sans">
                Familiar tools
              </h3>
              <p className="mt-[10px] text-[17px] leading-[24px] text-[#B5C0CC] font-sans">
                The comfort of graphic design tools and the power of modern
                frontend technologies – combined in one seamless experience.
              </p>
            </div>

            {/* Column 3 */}
            <div className="lg:text-left text-center space-y-3 mb-[25px]">
              <img
                src="/images/gr3.svg"
                alt="Image 3"
                className="w-[90px] h-[90px] object-cover rounded-lg mx-auto lg:mx-0"
              />
              <h3 className="mt-[28px] text-[24px] leading-[33px] text-[#ECF2F5] font-sans">
                Instant publishing
              </h3>
              <p className="mt-[10px] text-[17px] leading-[24px] text-[#B5C0CC] font-sans">
                What would it take to transform your most daring design idea
                into a live web-page? One click and a couple of seconds.
              </p>
            </div>
          </div>
          {/* second grid  item */}
          <div className="lg:flex items-center gap-[35px] pt-[110px] ">
            <div className="w-full lg:w-[32%]  ">
              <div>
                <h2 className="lg:text-[29px] text-[25px] leading-[39px] text-[#ECF2F5] text-center lg:text-left ">
                  Only 3 steps standing between you and your best web-page yet
                </h2>
              </div>
              {/* Column 1: Bold Title */}
            </div>

            <div className="w-full lg:w-[66%] flex items-center mt-[30px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
                {/* Column 2 */}
                <div>
                  <div className="flex items-center gap-2 mb-[28px]">
                    <div className="text-[#ECF2F5] text-base font-semibold text-[29px] leading-[39px]  mx-auto lg:mx-none">
                      1
                    </div>
                    <div className="w-[80%] h-px bg-[#4a5060] hidden lg:block"></div>
                  </div>
                  <p className="mt-3 text-[20px] text-[#B5C0CC] lg:mr-[60px] leading-[27px] text-center lg:text-left">
                    Pick a template or start from scratch
                  </p>
                </div>

                {/* Column 3 */}
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#ECF2F5] text-base font-semibold text-[29px] leading-[39px] mx-auto lg:mx-none">
                      2
                    </div>
                    <div className="w-[80%] h-px bg-[#4a5060] hidden lg:block"></div>
                  </div>
                  <p className="mt-3 text-[20px] text-[#B5C0CC] lg:mr-[60px] leading-[27px] text-center lg:text-left">
                    Use familiar tools to design a web-page
                  </p>
                </div>

                {/* Column 4 */}
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-[#ECF2F5] text-base font-semibold text-[29px] leading-[39px] mx-auto lg:mx-none">
                      3
                    </div>
                    <div className="w-[80%] h-px bg-[#4a5060] hidden lg:block"></div>
                  </div>
                  <p className="mt-3 text-[20px] text-[#B5C0CC] lg:mr-[60px] leading-[27px] text-center lg:text-left">
                    Publish your web-page in one click
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <button
              className="inline-flex items-center justify-center 
            h-[42px] px-[23px] 
            text-[#191925] text-[17px] leading-[24px] 
            font-bold font-sans 
            border-2 border-transparent 
            rounded-full 
            bg-[#F5BA31] 
            transition-colors duration-300 ease-out 
            focus:outline-none cursor-pointer mt-[80px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
