const Features = () => {
  return (
    <section className="bg-[#020203] lg:py-[124px] py-[80px]">
      <div className="container  mx-auto px-[40px] lg:px-0">
        <div className="lg:flex items-center ">
          <div className="md:w-[50%] w-full flex flex-col justify-center items-start gap-4  ">
            <p className="col-span-6 text-[15px] leading-[21px] font-semibold font-sans uppercase tracking-[0.12em] mb-[10px] text-[#3D5EFF] lg:mb-[25px]">
              FEATURES
            </p>
            <h1 className="text-[#b5c0cc] font-bold lg:text-[68px] text-[36px] leading-[54px] mt-[30px] w-full lg:w-[550px] hidden lg:block">
              Design system
            </h1>

            <h1 className="text-[#b5c0cc] font-bold lg:text-[68px] text-[48px] leading-[54px] mt-[30px] w-full lg:w-[550px] hidden lg:block">
              Animation
            </h1>

            <h1 className="text-[#b5c0cc] font-bold lg:text-[68px] text-[48px] leading-[54px] mt-[30px] w-full lg:w-[550px] hidden lg:block">
              Components
            </h1>
            <h1 className="text-[#b5c0cc] font-bold lg:text-[68px] text-[48px] leading-[54px] mt-[30px] w-full lg:w-[550px] hidden lg:block">
              Publishing
            </h1>
            {/* mobile design */}
            <div className="lg:hidden block">
              <h1 className="text-[#b5c0cc] font-bold lg:text-[68px] text-[36px] leading-[54px] lg:mt-[30px] mt-[7px] w-full lg:w-[550px] lg:mb-0 mb-[32px]">
                Design system
              </h1>

              <video
                className="w-full  object-cover rounded-[10px] h-auto border-2 border-[#252634]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/vid2.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <p class="box-border m-0 min-w-0 text-[20px] leading-[27px] text-[#7F8A9E] mt-[17px] mb-[24px] font-[PTRootUIWeb,sans-serif] antialiased">
                Breathe some life into your web-page with stylish,
                professional-grade animations
              </p>
            </div>
            <div className="lg:hidden block">
              <h1 className="text-[#b5c0cc] font-bold lg:text-[68px] text-[36px] leading-[54px] lg:mt-[30px] mt-[7px] w-full lg:w-[550px] lg:mb-0 mb-[32px]">
                Animation
              </h1>

              <video
                className="w-full  object-cover rounded-[10px] h-auto border-2 border-[#252634]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/vid3.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <p class="box-border m-0 min-w-0 text-[20px] leading-[27px] text-[#7F8A9E] mt-[17px] mb-[24px] font-[PTRootUIWeb,sans-serif] antialiased">
                Breathe some life into your web-page with stylish,
                professional-grade animations.
              </p>
            </div>
            <div className="lg:hidden block">
              <h1 className="text-[#b5c0cc] font-bold lg:text-[68px] text-[36px] leading-[54px] lg:mt-[30px] mt-[7px] w-full lg:w-[550px] lg:mb-0 mb-[32px]">
                Components
              </h1>

              <video
                className="w-full  object-cover rounded-[10px] h-auto border-2 border-[#252634]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/vid4.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <button className="bg-[#4870FF] hover:bg-yellow-500 text-white font-regular py-[3px] px-[9px]  rounded-full transition duration-300 mt-[25px]">
                Coming Soon
              </button>
              <p class="box-border m-0 min-w-0 text-[20px] leading-[27px] text-[#7F8A9E] mt-[17px] mb-[24px] font-[PTRootUIWeb,sans-serif] antialiased">
                Pack your brightest ideas in custom components for future reuse
                and improvement.
              </p>
            </div>
            <div className="lg:hidden block">
              <h1 className="text-[#b5c0cc] font-bold lg:text-[68px] text-[36px] leading-[54px] lg:mt-[30px] mt-[7px] w-full lg:w-[550px] lg:mb-0 mb-[32px]">
                Publishing
              </h1>

              <video
                className="w-full  object-cover rounded-[10px] h-auto border-2 border-[#252634]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/vid5.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <p class="box-border m-0 min-w-0 text-[20px] leading-[27px] text-[#7F8A9E] mt-[17px] mb-[24px] font-[PTRootUIWeb,sans-serif] antialiased">
                Instantly launch your design ideas into the Web – all it costs
                is one click.
              </p>
            </div>
            {/* mobile design */}

            <div className="lg:flex gap-4 mb-5 mt-[90px] hidden">
              <button
                className="inline-flex items-center justify-center 
             h-[42px] px-[23px] 
             text-[#191925] text-[15px] leading-[24px] 
             font-semibold font-sans 
             border-2 border-transparent 
             rounded-full 
             bg-[#F5BA31] 
             transition-colors duration-300 ease-out 
             focus:outline-none cursor-pointer"
              >
                Try It Today
              </button>
            </div>
          </div>

          {/* Right Column - 60% */}
          <div className="md:w-[50%] w-full mt-[30px] lg:block hidden">
            <div className="w-full relative">
              <div className="">
                <video
                  className="w-full lg:h-[520px] object-cover rounded-[10px] h-auto border-2 border-[#252634]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/images/vid2.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <p class="box-border m-0 min-w-0 text-[20px] leading-[27px] text-[#7F8A9E] mt-[17px] mb-[24px] font-[PTRootUIWeb,sans-serif] antialiased">
                  Create custom presets and introduce changes across multiple
                  projects at any scale necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
