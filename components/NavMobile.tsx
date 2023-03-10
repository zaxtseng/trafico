import Link from "next/link";
import { INav } from "../typings/home.types";

const NavMobile = ({ navData }: { navData: INav[] }) => {
  return (
    <nav className="w-full p-4 bg-accent">
      {/* nav list */}
      <ul className="flex flex-col gap-y-6">
        {navData.map((item, idx) => {
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link href={href}>
                <a className="text-white hover:text-accent">
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
