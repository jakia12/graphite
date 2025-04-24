const Ultimate = () => {
  return (
    <section className="bg-[#ECF2F5] lg:py-[120px] py-[90px]">
      <div className=" container  mx-auto px-[40px] lg:px-0 ">
        <div className="lg:mb-[100px] mb-[10px]">
          <p className="col-span-6 text-[15px] leading-[21px] font-semibold font-sans uppercase tracking-[0.12em] text-[#3D5EFF] mb-[25px]">
            TOP FEATURE
          </p>

          <h2 className="font-bold text-[45px] lg:text-[84px] lg:leading-[90px] w-full lg:w-[1300px] text-[#191925]">
            The ultimate web design experience
          </h2>
        </div>
        <div className="lg:flex items-center ">
          <div className="md:w-[50%] w-full flex flex-col justify-center items-start gap-4  ">
            <h1 className="text-[#191925] font-bold lg:text-[48px] text-[36px] leading-[72px] mt-[30px] w-full lg:w-[550px]">
              Hybrid grid
            </h1>
            <p className="text-[20px] text-[#3C3F4F] mt-[13px] w-full lg:w-[650px]">
              Use familiar graphic editor tools to create pixel-perfect Web
              Pages, and not just mockups. Focus on the creative part, and we
              will take care of the rest.
            </p>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[32px] my-[30px]">
              <div className="w-[240px] rounded-[6px] lg:shadow-[0px_14px_36px_rgba(0,0,0,0.03),_0px_30px_60px_rgba(0,0,0,0.02)] p-[15px_15px_12px] lg:bg-white py-[9px]">
                <img src="/images/ul.svg" alt="" className="w-[25px]" />
                <p className="mt-[10px] text-[13px] leading-[18px] text-[#3C3F4F] font-semibold font-sans">
                  Fully customizable
                </p>
              </div>
              <div className="w-[240px] rounded-[6px] lg:shadow-[0px_14px_36px_rgba(0,0,0,0.03),_0px_30px_60px_rgba(0,0,0,0.02)] p-[15px_15px_12px] lg:bg-white py-[9px]">
                <img src="/images/ul2.svg" alt="" className="w-[25px]" />
                <p className="mt-[10px] text-[13px] leading-[18px] text-[#3C3F4F] font-semibold font-sans">
                  Precise and consistent
                </p>
              </div>
              <div className="w-[240px] rounded-[6px] lg:shadow-[0px_14px_36px_rgba(0,0,0,0.03),_0px_30px_60px_rgba(0,0,0,0.02)] p-[15px_15px_12px] lg:bg-white py-[9px]">
                <img src="/images/ul3.svg" alt="" className="w-[25px]" />
                <p className="mt-[10px] text-[13px] leading-[18px] text-[#3C3F4F] font-semibold font-sans">
                  Responsive by design
                </p>
              </div>
            </div>
            <div className="flex gap-4 my-5 ">
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
          <div className="md:w-[50%] w-full mt-[30px]">
            <div className="w-full relative">
              <div className="">
                <video
                  className="w-full lg:h-[580px] object-cover rounded-[10px] h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/images/vid.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ultimate;
