export const Roadmap = () => {
  const roadmapItems = [
    {
      title: "Section library",
      description: "Assemble web-pages in a flash using pre-made sections",
    },
    {
      title: "Animation improvements",
      description: "Cross-element interaction and new animation options",
    },
    {
      title: "Performance improvements",
      description: "An even faster and stronger version of the editor",
    },
    {
      title: "Tutorials",
      description:
        "A vast supply of learning materials to get you started with web design and our editor in no time",
    },
    {
      title: "Visual components",
      description:
        "Create reusable components made of one or multiple elements",
    },
    {
      title: "Headless CMS",
      description:
        "Integrate a headless CMS and enjoy full control of your website’s data flow",
    },
    {
      title: "Links",
      description: "A neat interface for various links",
    },
  ];
  return (
    <section className="bg-[#ECF2F5] lg:py-[120px] py-[90px]">
      <div className=" container  mx-auto px-[40px] lg:px-0 ">
        <div className="lg:mb-[100px] mb-[10px]">
          <p className="col-span-6 text-[15px] leading-[21px] font-semibold font-sans uppercase tracking-[0.12em] text-[#3D5EFF] mb-[25px]">
            Upcoming features
          </p>

          <h2
            className="
  font-bold
  lg:text-[50px]  text-[35px]
  leading-[42px]
  tracking-[-0.01em]
  antialiased
  whitespace-nowrap
  text-[#]
  lg:mt-[12px"
          >
            Roadmap
          </h2>
        </div>
      </div>

      {/* roadmap line */}
      <div>
        {/* text grid col */}
        <div className="grid grid-cols-2 lg:grid-cols-7 gap-8 ">
          <div>
            <h3
              className=" font-semibold text-[16px] leading-[24px]    text-[#3C3F4F] mb-[10px]
"
            >
              Layout engine
            </h3>
            <p className=" font-[600] text-[13px] leading-[18px] text-[#7F8A9E]  lg:w-[230px] w-[187px]">
              Build your website using auto layout and grid tools
            </p>
          </div>

          <div>
            <h3
              className=" font-semibold text-[16px] leading-[24px]    text-[#3C3F4F] mb-[10px]
"
            >
              Layout engine
            </h3>
            <p className=" font-[600] text-[13px] leading-[18px] text-[#7F8A9E]  lg:w-[230px] w-[187px]">
              Build your website using auto layout and grid tools
            </p>
          </div>
          <div>
            <h3
              className=" font-semibold text-[16px] leading-[24px]    text-[#3C3F4F] mb-[10px]
"
            >
              Layout engine
            </h3>
            <p className=" font-[600] text-[13px] leading-[18px] text-[#7F8A9E]  lg:w-[230px] w-[187px]">
              Build your website using auto layout and grid tools
            </p>
          </div>
          <div>
            <h3
              className=" font-semibold text-[16px] leading-[24px]    text-[#3C3F4F] mb-[10px]
"
            >
              Layout engine
            </h3>
            <p className=" font-[600] text-[13px] leading-[18px] text-[#7F8A9E]  lg:w-[230px] w-[187px]">
              Build your website using auto layout and grid tools
            </p>
          </div>
          <div>
            <h3
              className=" font-semibold text-[16px] leading-[24px]    text-[#3C3F4F] mb-[10px]
"
            >
              Layout engine
            </h3>
            <p className=" font-[600] text-[13px] leading-[18px] text-[#7F8A9E]  lg:w-[230px] w-[187px]">
              Build your website using auto layout and grid tools
            </p>
          </div>
          <div>
            <h3
              className=" font-semibold text-[16px] leading-[24px]    text-[#3C3F4F] mb-[10px]
"
            >
              Layout engine
            </h3>
            <p className=" font-[600] text-[13px] leading-[18px] text-[#7F8A9E]  lg:w-[230px] w-[187px]">
              Build your website using auto layout and grid tools
            </p>
          </div>
          <div>
            <h3
              className=" font-semibold text-[16px] leading-[24px]    text-[#3C3F4F] mb-[10px]
"
            >
              Layout engine
            </h3>
            <p className=" font-[600] text-[13px] leading-[18px] text-[#7F8A9E]  lg:w-[230px] w-[187px]">
              Build your website using auto layout and grid tools
            </p>
          </div>
        </div>
        {/* all line  */}
        <div class="flex justify-between items-center w-full px-4 py-6 bg-blue-50">
          <div class="flex-1 relative">
            <div class="absolute inset-0 border-t-[1px] border-[#4870FF] top-[4px]"></div>
            <div class="relative flex justify-between">
              <span class="w-[10px] h-[10px] bg-[#4870FF] transform rotate-45 rounded"></span>
              <span class="w-[10px] h-[10px] bg-[#4870FF] transform rotate-45 rounded"></span>
              <span class="w-[10px] h-[10px] bg-[#4870FF] transform rotate-45 rounded"></span>
              <span class="w-[10px] h-[10px] bg-[#4870FF] transform rotate-45 rounded"></span>
              <span class="w-[10px] h-[10px] bg-[#4870FF] transform rotate-45 rounded"></span>
              <span class="w-[10px] h-[10px] bg-[#4870FF] transform rotate-45 rounded"></span>
              <span class="w-[10px] h-[10px] bg-[#4870FF] transform rotate-45 rounded"></span>
              <span class="w-[10px] h-[10px] bg-[#4870FF] transform rotate-45 rounded"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
