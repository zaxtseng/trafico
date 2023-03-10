import Link from "next/link";
import { INav } from "../typings/home.types";

const Nav = ({ navData, header }: { navData: INav[]; header: boolean }) => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-[96px]">
        {navData.map((item, idx) => {
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link href={href}>
                <a className={`${header ? 'text-primary' : 'text-white'} cursor-pointer hover:text-accent-hover`}>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
