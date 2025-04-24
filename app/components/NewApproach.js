const NewApproach = () => {
  return (
    <section className="relative bg-[#020203] text-white  px-4 flex items-center justify-center text-center lg:py-[200px] py-[123px]">
      {/* Center Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Try an entirely new approach
        </h1>
        <p className="text-lg md:text-xl text-[#bfc8d6] mb-8">
          to site-building and create your first website now
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition duration-300">
          Get started
        </button>
      </div>

      {/* Background SVG (replace with actual if available) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/images/grp2.svg" // Replace with your actual SVG path
          alt="Cube Graphic"
          className="w-[320px] md:w-[420px] opacity-50"
        />
      </div>
    </section>
  );
};

export default NewApproach;
