const About = () => {
  return (
    <section className="bg-[#09080F] ">
      <div className="container w-full max-w-[90%] mx-auto px-[25px] py-[110px]">
        {/* first grid item */}
        <div className="lg:flex gap-[60px] ">
          {/* Column 1 */}
          <div className="text-left space-y-3">
            <img
              src="/images/gr1.svg"
              alt="Image 1"
              className="w-[90px] h-[90px] object-cover rounded-lg"
            />
            <h3 className="mt-[28px] text-[24px] leading-[33px] text-[#ECF2F5] font-sans">
              Design freedom
            </h3>
            <p className="mt-[10px] text-[17px] leading-[24px] text-[#B5C0CC] font-sans">
              Customize the hell out of your responsive grid and switch between
              absolute and auto-layout positioning on the fly.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-left space-y-3">
            <img
              src="/images/gr2.svg"
              alt="Image 2"
              className="w-[90px] h-[90px] object-cover rounded-lg"
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
          <div className="text-left space-y-3">
            <img
              src="/images/gr3.svg"
              alt="Image 3"
              className="w-[90px] h-[90px] object-cover rounded-lg"
            />
            <h3 className="mt-[28px] text-[24px] leading-[33px] text-[#ECF2F5] font-sans">
              Instant publishing
            </h3>
            <p className="mt-[10px] text-[17px] leading-[24px] text-[#B5C0CC] font-sans">
              What would it take to transform your most daring design idea into
              a live web-page? One click and a couple of seconds.
            </p>
          </div>
        </div>
        {/* second grid  item */}
        <div className="lg:flex items-center gap-[35px] pt-[110px] ">
          <div className="w-full lg:w-[32%]  ">
            <div>
              <h2 className="text-[29px] leading-[39px] text-[#ECF2F5] ">
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
                  <div className="text-[#ECF2F5] text-base font-semibold text-[29px] leading-[39px]">
                    1
                  </div>
                  <div className="w-[80%] h-px bg-[#4a5060]"></div>
                </div>
                <p className="mt-3 text-[20px] text-[#B5C0CC] mr-[60px] leading-[27px]">
                  Pick a template or start from scratch
                </p>
              </div>

              {/* Column 3 */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-[#ECF2F5] text-base font-semibold text-[29px] leading-[39px]">
                    2
                  </div>
                  <div className="w-[80%] h-px bg-[#4a5060]"></div>
                </div>
                <p className="mt-3 text-[20px] text-[#B5C0CC] mr-[60px] leading-[27px]">
                  Use familiar tools to design a web-page
                </p>
              </div>

              {/* Column 4 */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-[#ECF2F5] text-base font-semibold text-[29px] leading-[39px]">
                    3
                  </div>
                  <div className="w-[80%] h-px bg-[#4a5060]"></div>
                </div>
                <p className="mt-3 text-[20px] text-[#B5C0CC] mr-[60px] leading-[27px]">
                  Publish your web-page in one click
                </p>
              </div>
            </div>
          </div>
        </div>

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
    </section>
  );
};

export default About;
