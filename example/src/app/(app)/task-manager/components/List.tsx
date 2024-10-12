"use client";
import { useRouter } from 'next/navigation';
import { TicketType } from '@/app/(admin)/types/tasks/task';
import { Avatar, Badge, Button, Dropdown, TextInput, Tooltip } from 'flowbite-react';
import { format } from 'date-fns';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useContext, useState, useEffect } from 'react';
import { CampaignContext } from "@/app/context/campaignContext/index";
import { useParams } from "next/navigation";
import { CampaignDataType } from '@/app/(admin)/types/campaigns/campaign';
import TaskDetail from "@/app/(admin)/campaigns/components/TaskDetail";
import CardBox from '@/app/components/CardBox';
import { HiOutlineDotsVertical } from "react-icons/hi";
import Link from 'next/link';
import TasksbyWeek from '@/app/(admin)/task-manager/components/TaskByWeek';
import TaskbyMonth from "@/app/(admin)/task-manager/components/TaskByMonth";
import CreateTask from './CreateTask';

const TaskList = () => {
  const dropdownItems = ["Action", "Another action", "Something else"];

  const { selectedTask, setSelectedTask, openTask, setOpenTask, selectedTaskId, setSelectedTaskId } = useContext(CampaignContext);
  // const [selectedCTask, setSelectedCTask] = useState({});
  // const [selectedCampaign, setSelectedCampaign] = useState<CampaignDataType>();
  // const [selectedCTaskId, setSelectedCTaskId] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [activeTab, setActiveTab] = useState("Week");
  const [openNewTask, setOpenNewTask] = useState(false);

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };


  const router = useRouter();


  return (
    <>
      <div className="sm:flex items-center justify-between">
        {/* <h5 className="card-title">Delivery Analytics</h5> */}
        <div className="flex items-center gap-3 sm:mt-0 mt-4 justify-between">
          <div className="flex flex-wrap bg-muted dark:bg-dark p-1 rounded-full">
            <div
              onClick={() => handleTabClick("Week")}
              className={`py-2 px-4 rounded-full min-w-[100px] cursor-pointer text-dark  text-xs font-semibold text-center  ${activeTab == "Week"
                ? "text-dark bg-white dark:bg-darkgray dark:text-white "
                : "dark:text-white opacity-60"
                }`}
            >
              Week
            </div>
            <div
              onClick={() => handleTabClick("Month")}
              className={`py-2 px-4 rounded-full min-w-[100px] cursor-pointer text-dark text-xs font-semibold text-center  ${activeTab == "Month"
                ? "text-dark bg-white dark:bg-darkgray dark:text-white"
                : "dark:text-white opacity-60 "
                }`}
            >
              Month
            </div>
          </div>
          <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                <HiOutlineDotsVertical size={22} />
              </span>
            )}
          >
            {dropdownItems.map((items, index) => {
              return <Dropdown.Item key={index}>{items}</Dropdown.Item>;
            })}
          </Dropdown>
        </div>
        <Button color={"primary"}
          className="bg-primary hover:bg-lightprimary hover:text-primary rounded-lg"
          onClick={()=>setOpenNewTask(true)}
        >
          Add Task
        </Button>
      </div>

      {activeTab === "Week" && (
        <div className="grid grid-cols-12 gap-30 items-center mt-4">
          <div className="lg:col-span-12 col-span-12">
            <TasksbyWeek />
          </div>

        </div>
      )}

      {activeTab === "Month" && (
        <div className="-me-6">
          <TaskbyMonth />
        </div>
      )}
    {openNewTask &&  <CreateTask isOpen={openNewTask} closeNewTask={()=>setOpenNewTask(false)} />}
    </>
  );
};

export default TaskList;

