import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full relative bg-[#232323] h-[80px] z-30">
      <div className="container max-w-[1440px] h-[80px] m-auto flex justify-between items-center">
        <a href="#" className="block text-[#FFFFFF] lg:text-[24px] text-[18px]">
          Experts.ai
        </a>
        <div className="flex justify-between items-center sm:gap-[67px] gap-[20px]">
          <Link
            to="/Blog"
            className="block lg:text-[20px] text-[16px] text-[#FFFFFF]"
          >
            Blog
          </Link>
          <Link
            to="/"
            className="block lg:text-[20px] text-[16px] text-[#FFFFFF]"
          >
            AI Experts
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
