"use client";
import ImageIcon from "@/components/Icons/ImageIcon";
import useCheckAuth from "@/hooks/security/useCheckAuth";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { RiBillLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";

const listItems = {
  "Content Delivery": [
    {
      id: 1,
      title: "CDN",
      icon: <ImageIcon src={"/assets/icons/cdn.svg"} className="mr-1" />,
      url: "https://console.gotipath.com/cdn/distributions",
    },
  ],
  Media: [
    {
      id: 1,
      title: "Stream",
      icon: <CiStreamOn size={18} className="mr-1" />,
      url: "https://stream.gotipath.com/stream",
    },
  ],
  Management: [
    {
      id: 1,
      title: "Account Settings",
      icon: <FaRegUserCircle size={18} className="mr-1" />,
      url: "https://console.gotipath.com/account",
    },
    {
      id: 2,
      title: "Billing",
      icon: <RiBillLine size={18} className="mr-1" />,
      url: "https://console.gotipath.com/enable-servies?redirect_url=/auth/billing/sso",
    },
  ],
  Support: [
    {
      id: 1,
      title: "Support Tickets",
      icon: <BiSupport size={18} className="mr-1" />,
      url: "https://console.gotipath.com/support",
    },
    {
      id: 2,
      title: "Documentations",
      icon: <TiDocumentText size={18} className="mr-1" />,
      url: "https://docs.gotipath.com",
    },
    {
      id: 3,
      title: "API Docs",
      icon: <HiDocumentReport size={18} className="mr-1" />,
      url: "https://docs.gotipath.com",
    },
  ],
};

function SidebarList() {
  const { checking } = useCheckAuth();
  if (checking) {
    return null;
  }
  return (
    <div className="flex flex-col gap-4 mt-4 ml-2 mr-10">
      <>
        <h2 className="text-xs font-bold text-gray-500">Content Delivery</h2>
        <ul className="list-none pl-2 text-sm">
          {listItems["Content Delivery"].map(item => (
            <li key={item.id} className="font-semibold my-2 flex">
              {item?.icon}
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </>
      <>
        <h2 className="text-xs font-bold text-gray-500">Media</h2>
        <ul className="list-none pl-2 text-sm">
          {listItems["Media"].map(item => (
            <li key={item.id} className="font-semibold my-2 flex">
              {item?.icon}
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </>
      <>
        <h2 className="text-xs font-bold text-gray-500">Management</h2>
        <ul className="list-none pl-2 text-sm">
          {listItems["Management"].map(item => (
            <li key={item.id} className="font-semibold my-2 flex">
              {item?.icon}
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </>
      <>
        <h2 className="text-xs font-bold text-gray-500">Support</h2>
        <ul className="list-none pl-2 text-sm">
          {listItems["Support"].map(item => (
            <li key={item.id} className="font-semibold my-2 flex">
              {item?.icon}
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default SidebarList;
