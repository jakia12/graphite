const Ecosyestem = () => {
  return (
    <section className="bg-[url('/images/bg3.webp')] bg-cover bg-center lg:py-[124px] py-[80px]">
      <div className="max-w-[90%]  mx-auto ">
        <div className="lg:flex items-center ">
          <div className="md:w-[40%] w-full flex flex-col justify-center items-start gap-4  ">
            <p className="col-span-6 text-[15px] leading-[21px] font-semibold font-sans uppercase tracking-[0.12em] mb-[10px] text-[#3D5EFF] lg:mb-[25px]">
              Web ecosystem
            </p>
            <h1
              className="
  box-border
  m-0
  min-w-0
  font-epilogue
  font-extrabold
  lg:text-[50px]  text-[35px]
  leading-[42px]
  tracking-[-0.01em]
  antialiased
  whitespace-nowrap
  text-[#7F8A9E]
  lg:mt-[12px]
"
            >
              One Vision
            </h1>

            <h1
              className="
              box-border
             
              font-epilogue
              font-extrabold
               lg:text-[50px]  text-[35px]
              lg:leading-[42px]
              tracking-[-0.01em]
              antialiased
              whitespace-nowrap
              text-[#fff]
              lg:mt-[12px]
            "
            >
              One Solution
            </h1>

            <p
              className="
  box-border
 
  font-pt-root
  text-[18px]
   sm:w-[300px]
  lg:w-[491px]
  w-full
  leading-[27px]
  antialiased
  text-[#B5C0CC]
  mt-8
"
            >
              From an occasional freelance gig to a full-fledged web design
              studio – Graphite has all the tools necessary to get the job done.
              Everything you need – packed in one versatile reliable solution.
            </p>

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
          <div className="md:w-[60%] w-full mt-[50px]">
            <div className="w-full relative lg:bg-[url('/images/grp.svg')] bg-cover bg-center">
              <div className="grid grid-cols-2 gap-8 lg:ml-[100px]">
                <div>
                  <h3
                    className=" font-semibold text-[16px]
  leading-[24px]
  antialiased
  text-[#ECF2F5]
  mb-[10px]"
                  >
                    Layout engine
                  </h3>
                  <p
                    className=" font-[600]
  text-[13px]
  leading-[18px]
  antialiased
  text-[#B5C0CC]  lg:w-[230px] w-[187px]"
                  >
                    Build your website using auto layout and grid tools
                  </p>
                </div>

                <div className="lg:ml-[120px]">
                  <h3
                    className=" font-semibold text-[16px]
  leading-[24px]
  antialiased
  text-[#ECF2F5]
  mb-[10px]"
                  >
                    Code tools
                  </h3>
                  <p
                    className=" font-[600]
  text-[13px]
  leading-[18px]
  antialiased
  text-[#B5C0CC]  lg:w-[230px] w-[187px]"
                  >
                    Embed live HTML code to your website
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:my-[110px] my-[50px]">
                <div>
                  <h3
                    className=" font-semibold text-[16px]
  leading-[24px]
  antialiased
  text-[#ECF2F5]
  mb-[10px]"
                  >
                    Design system
                  </h3>
                  <p
                    className=" font-[600]
  text-[13px]
  leading-[18px]
  antialiased
  text-[#B5C0CC]  lg:w-[230px] w-[187px]"
                  >
                    Maintain visual consistency of your websites
                  </p>
                </div>
                <div className="opacity-0 invisible hidden lg:block"></div>
                <div className="lg:ml-[90px]">
                  <h3
                    className=" font-semibold text-[16px]
  leading-[24px]
  antialiased
  text-[#ECF2F5]
  mb-[10px]"
                  >
                    Content management
                  </h3>
                  <p
                    className=" font-[600]
  text-[13px]
  leading-[18px]
  antialiased
  text-[#B5C0CC]  lg:w-[230px] w-[187px]"
                  >
                    Integrate your data from a headless CMS with your website
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 lg:ml-[100px]">
                <div>
                  <h3
                    className=" font-semibold text-[16px]
  leading-[24px]
  antialiased
  text-[#ECF2F5]
  mb-[10px]"
                  >
                    Asset managment
                  </h3>
                  <p
                    className=" font-[600]
  text-[13px]
  leading-[18px]
  antialiased
  text-[#B5C0CC] w-full lg:w-[230px] w-[187px]"
                  >
                    Keep your images, vector, shapes and icons in one place
                  </p>
                </div>

                <div className="lg:ml-[120px]">
                  <h3
                    className=" font-semibold text-[16px]
  leading-[24px]
  antialiased
  text-[#ECF2F5]
  mb-[10px]"
                  >
                    Hosting, domains, and SSL
                  </h3>
                  <p
                    className=" font-[600]
  text-[13px]
  leading-[18px]
  antialiased
  text-[#B5C0CC]  lg:w-[230px] w-[187px]"
                  >
                    Get your website live
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosyestem;
