import Link from "next/link";

import { orbitron } from "@/fonts";
import { cn } from "@/utils/cn";

type NavLinkProps = {
  label: string;
  href: string;
};

const links: NavLinkProps[] = [
  {
    label: "Inspiration",
    href: "/inspiration",
  },
  {
    label: "Logs",
    href: "/logs",
  },
  {
    label: "Rules",
    href: "/rules",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Flowchart",
    href: "/flowchart",
  },
  // {
  //   label: '',
  //   href: '/',
  // },
  // {
  //   label: '',
  //   href: '/',
  // },
  {
    label: "References",
    href: "/references",
  },
];

export function Navbar() {
  return (
    <div
      className={cn(
        "w-fit mx-4 p-2 border-2 flex flex-row justify-start items-center",
        orbitron.className
      )}
    >
      {links.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </div>
  );
}

function NavLink({ label, href }: NavLinkProps) {
  return (
    <Link className="p-2 hover:text-indigo-600 transition-all" href={href}>
      {label}
    </Link>
  );
}
