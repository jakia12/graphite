export default function Footer() {
  return (
    <footer className="bg-[#020203] text-white py-[100px] text-center text-sm">
      {/* Social Links */}
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-2 sm:space-y-0 font-bold text-white mb-6">
        <a href="#" className="hover:underline font-bold text-[20px]">
          Facebook
        </a>
        <a href="#" className="hover:underline font-bold text-[20px]">
          Twitter
        </a>
        <a href="#" className="hover:underline font-bold text-[20px]">
          Youtube
        </a>
      </div>

      {/* Utility Links */}
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-2 sm:space-y-0 text-[#4A5060] mb-6">
        <a href="#" className="hover:text-white">
          Changelog
        </a>
        <a href="#" className="hover:text-white">
          Terms of use
        </a>
        <a href="#" className="hover:text-white">
          Privacy policy
        </a>
        <a href="#" className="hover:text-white">
          Contact us
        </a>
      </div>

      {/* Branding */}
      <div className="text-[#4A5060] font-semibold mb-1 text-[20px]">
        graphite
      </div>
      <div className="text-[#4A5060] mt-[20px]">© 2025</div>
    </footer>
  );
}
