import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IHeader, INav } from "../typings/home.types";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = ({
  headerData,
  navData,
}: {
  headerData: IHeader;
  navData: INav[];
}) => {
  const { logoImgV1, logoImgV2, btnText } = headerData;
  const [header, setHeader] = useState<boolean>(false);
  const [navMobile, setNavMobile] = useState(false);
  //* scroll event
  useEffect(() => {
    // code
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white px-3 py-3 rounded-md drop-shadow-primary" : "py-[40px]"
      } fixed left-0 right-0 w-full mx-auto max-w-[90vw] lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500`}
    >
      {/* logo v1 */}
      <Link href={"/"}>
        <a>
          <Image
            src={`${header ? logoImgV2 : logoImgV1}`}
            width={header ? 180 : 212}
            height={50}
            alt=""
          />
        </a>
      </Link>
      <div className="hidden lg:flex gap-x-[96px]">
        {/* nav */}
        <Nav navData={navData} header={header} />
        {/* btn */}
        <button className="btn">{btnText}</button>
      </div>
      {/* nav menu button - hide in large screen */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="cursor-pointer lg:hidden"
      >
        <HiMenu className="text-4xl text-accent-hover" />
      </div>
      {/* nav mobile - hide on large screens */}
      <div
        className={`${
          navMobile ? "max-h-[154px]" : "max-h-0"
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
