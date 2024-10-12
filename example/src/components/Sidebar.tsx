"use client";
import Logo from "@/components/FullLogo";
import {
  IconLayoutDashboard,
  IconBrandTrello,
  IconInbox,
  IconTarget,
  IconShoppingBag,
  IconCube,
  IconClipboard ,
} from "@tabler/icons-react";
import { Sidebar } from "flowbite-react";
import React,{ createContext, useState, useEffect } from "react";
import Link from "next/link";
import { current } from "@reduxjs/toolkit";
import { usePathname , useParams , useRouter} from "next/navigation";

const SidebarLayout = () => {
  const pathname = usePathname();
  const params = useParams()
  const router = useRouter()
  const [ selected , setSelected ] = useState('dashboard')

  useEffect(() => {
    console.log(pathname, params, router)
    const pathArray = pathname.split('/');
    setSelected(pathArray[1])
    console.log(pathArray[1]);
}, [pathname]);
  return (
    <div className="border-r">
        <Sidebar 
          className="fixed menu-sidebar pt-8 bg-white dark:bg-darkgray ps-4 "
          aria-label="Sidebar with multi-level dropdown example"
            >
          <div className="px-4 py-3 pt-0">
          <Logo />
          </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/dashboard"
                as={Link}
                className={`${'dashboard' == selected
                  ? "bg-lightprimary outline-none text-primary dark:text-white"
                  : 'active:bg-lightprimary focus:outline-none hover:text-primary dark:text-white dark:hover:text-primary' 
                  } `}
                icon={() => <IconLayoutDashboard size={20} />}
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
              className={`${'campaigns' == selected
                ? "bg-lightprimary outline-none text-primary dark:text-white"
                : 'active:bg-lightprimary focus:outline-none hover:text-primary dark:text-white dark:hover:text-primary' 
                } `}
                as={Link} href="/campaigns/list" icon={() => <IconTarget size={20} />}>
                Campaigns
              </Sidebar.Item>
              <Sidebar.Item 
              className={`${'task-manager' == selected
                ? "bg-lightprimary outline-none text-primary dark:text-white"
                : 'active:bg-lightprimary focus:outline-none hover:text-primary dark:text-white dark:hover:text-primary' 
                } `}
                 as={Link}  href="/task-manager"  icon={() => <IconClipboard size={20} />}>
                Task Manager
              </Sidebar.Item>
              <Sidebar.Item 
              className={`${'brands' == selected
                ? "bg-lightprimary outline-none text-primary dark:text-white"
                : 'active:bg-lightprimary focus:outline-none hover:text-primary dark:text-white dark:hover:text-primary' 
                }`}
                 as={Link}  href="/brands"  icon={() => <IconCube size={20} />}>
                Brand Assets
              </Sidebar.Item>
    
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
     
    </div>
  );
};

export default SidebarLayout;
