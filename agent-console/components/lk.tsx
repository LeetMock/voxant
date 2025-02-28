"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
const LivekitLogo = () => {
  const { theme } = useTheme();

  const fillColor = theme === "dark" ? "#fff" : "#000";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="104"
      height="24"
      viewBox="0 0 157 36"
      fill="none"
    >
      <path d="M6.0417 0H0V35.4391H21.9177V30.2631H6.0417V0Z" fill={fillColor} />
      <path d="M31.8907 16.1333H26.0365V35.4373H31.8907V16.1333Z" fill={fillColor} />
      <path
        d="M49.1243 34.738L41.6781 10.3037H35.824L43.6453 35.4379H54.6034L62.4247 10.3037H56.5233L49.1243 34.738Z"
        fill={fillColor}
      />
      <path
        d="M76.9478 9.74658C69.3599 9.74658 64.5365 15.1563 64.5365 22.8497C64.5365 30.4974 69.2196 35.9998 76.9478 35.9998C82.8478 35.9998 87.1099 33.3883 88.7019 28.0256H82.7491C81.86 30.4504 80.2194 31.8986 76.988 31.8986C73.4289 31.8986 70.9477 29.4268 70.4796 24.5787H89.1187C89.2078 23.9606 89.2542 23.3372 89.2576 22.7128C89.259 14.8755 84.3884 9.74658 76.9478 9.74658ZM70.5254 20.5176C71.1353 15.9959 73.5233 13.8506 76.9478 13.8506C80.5528 13.8506 82.9881 16.5077 83.2701 20.5176H70.5254Z"
        fill={fillColor}
      />
      <path
        d="M123.491 0H115.904L101.199 16.2278V0H95.1575V35.4391H101.199V17.5335L117.403 35.4391H125.13L108.177 16.7866L123.491 0Z"
        fill={fillColor}
      />
      <path d="M133.604 10.3037H127.749V29.6077H133.604V10.3037Z" fill={fillColor} />
      <path d="M26.0371 10.3037H20.183V16.1325H26.0371V10.3037Z" fill={fillColor} />
      <path d="M139.459 29.6099H133.605V35.4387H139.459V29.6099Z" fill={fillColor} />
      <path d="M156.951 29.6099H151.097V35.4387H156.951V29.6099Z" fill={fillColor} />
      <path
        d="M156.951 16.1337V10.3049H151.097V0H145.242V10.3049H139.388V16.1337H145.242V29.6103H151.097V16.1337H156.951Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default function LK() {
  return (
    <Link href="/" className="hover:opacity-70 transition-all duration-250 scale-[0.8]">
      <LivekitLogo />
    </Link>
  );
}
