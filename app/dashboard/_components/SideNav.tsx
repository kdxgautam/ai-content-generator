import React from "react";
import Image from "next/image";
import { FileClock, Home, HomeIcon, Settings, WalletCards } from "lucide-react";
function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon:HomeIcon,
      path: "/dashboard",
    },
    {
        name: "Hisgtory",
        icon:FileClock ,
        path: "/dashboard/history",
      },
      {
        name: "Billing",
        icon:WalletCards,
        path: "/dashboard/billing",
      },
      {
        name: "Setting",
        icon:Settings,
        path: "/dashboard/setting",
      },
    
  ];

  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image width={120} height={120} alt="logo" src={"/logo.svg"} />
      </div>
      <div className="mt-10 ">
        {MenuList.map((menu,index)=>(
            <div className="flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer">
                <menu.icon/>
                <h2>{menu.name}</h2>
            </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
