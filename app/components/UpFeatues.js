const UpFeatues = () => {
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
      </div>

      {/* roadmap line */}
      <div>
        <div class="flex justify-between items-center w-full px-4 py-6 bg-blue-50">
          <div class="flex-1 relative">
            <div class="absolute inset-0 border-t-2 border-blue-500"></div>
            <div class="relative flex justify-between">
              <span class="w-4 h-4 bg-blue-500 transform rotate-45"></span>
              <span class="w-4 h-4 bg-blue-500 transform rotate-45"></span>
              <span class="w-4 h-4 bg-blue-500 transform rotate-45"></span>
              <span class="w-4 h-4 bg-blue-500 transform rotate-45"></span>
              <span class="w-4 h-4 bg-blue-500 transform rotate-45"></span>
              <span class="w-4 h-4 bg-blue-500 transform rotate-45"></span>
              <span class="w-4 h-4 bg-blue-500 transform rotate-45"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpFeatues;
