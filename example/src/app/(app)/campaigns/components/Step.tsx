"use client";
import React, { useEffect, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import { Icon } from "@iconify/react";
import { uniqueId } from "lodash";
import { Accordion } from "flowbite-react";
import CardBox from "@/app/components/CardBox";
import Image from "next/image";

import {
    Avatar,
    Badge,
    Button,
    HR,
    List,
    Textarea,
    Tooltip,
} from "flowbite-react";
// import BlogComment from "./BlogCommnets";
import { CampaignContext } from "@/app/context/campaignContext/index";
import { useParams } from "next/navigation";

import SimpleBar from "simplebar-react";
import { formatDistanceToNowStrict } from 'date-fns';

import { Checkbox } from "flowbite-react";
import TaskDetail from "./TaskDetail";

const TaskList = (props: any) => {
  const { selectedTask , setSelectedTask ,openTask , setOpenTask , selectedTaskId , setSelectedTaskId } = useContext(CampaignContext);
    const [goalData, setGoalData] = useState<any>(props);
    const [tasks, setTask] = useState<any>(props.tasks);
    // const [selectedTask, setSelectedTask] = useState({});
    // const [selectedTaskId, setSelectedTaskId] = useState(null);
    // const [openTask , setOpenTask ] = useState(false)
    useEffect(() => {
        if (props) {
          setTask(props.tasks)
        }
    }, [props]);
    const handleSelectTask = ( task: any) => {
      setSelectedTaskId(task.id)
      setSelectedTask(task );
      setOpenTask(true)
    };
    return (
        <>
            
      { tasks && <SimpleBar className="">
        <div className=" border-color-divider px-4">
          {tasks.map((task : any) => (
            <div
              key={task.id}
              className={`cursor-pointer mb-3 py-4 px-6 gap-3 items-center group bg-hover border ${selectedTaskId === task.id ? 'bg-lighthover dark:bg-darkmuted' : ''} `}
            >
              <div className="flex  gap-3" onClick={() => { handleSelectTask(task);  }}>
                <Icon icon='ri:circle-line'
                          height="16"
                          className="text-gray dark:text-muted mt-1"
                          // onClick={() => toggleStar(email.id)}
                        />
                <div className="w-full">

                  <div className="flex justify-between" >
                    <h6 className="text-base font-normal  group-hover:text-primary">
                    {task.name}
                    </h6>
                    {task.status == "Promotional" ? (
                      <Badge color={"primary"}>{task.task}</Badge>
                    ) : task.label == "Social" ? (
                      <Badge color={"error"}>{task.label}</Badge>
                    ) : task.label == "Health" ? (
                      <Badge color={"success"}>{task.label}</Badge>
                    ) : <Badge color={"primary"}>{task.label}</Badge>}
                  </div>
                  <div className="flex justify-start mt-2 mb-2">
                    <div className="flex gap-2 items-center mr-5" >
                      {task.assignee_id != null ? (
                      <span  className="text-secondary flex text-sm gap-2 items-center">

                       <Icon icon='solar:user-circle-bold'
                          height="16" className="text-secondary "
                          // onClick={() => toggleStar(email.id)}
                        />
                        { task.assignee['name']}
                        </span>
                      ) : (
                       <>
                       <span  className="text-error flex gap-2 items-center text-sm">
                        <Icon icon='solar:user-circle-broken'
                          height="16"
                          className="text-error"
                          // onClick={() => toggleStar(email.id)}
                        />
                        Unussigned
                        </span>
                        </>
                      )}
                      {/* {email.important ? (
                        <Icon icon="solar:info-circle-bold"
                          height="17"
                          className="text-info"
                          onClick={() => toggleImportant(email.id)}
                        />
                      ) :
                        (
                          <Icon icon="solar:info-circle-outline"
                            height="17"
                            className="text-dark dark:text-darklink"
                            onClick={() => toggleImportant(email.id)}
                          />
                        )

                      } */}
                      {/* {checkedItems[task.id] && <Icon icon="solar:trash-bin-minimalistic-outline" height="17"
                        className="text-dark dark:text-darklink" onClick={() => handleDelete(task.id)} />} */}
                    </div>
                    <div className="flex gap-2 items-center " >
                     
                      {task.end && (
                       
                        <span  className="text-secondary  flex gap-2 items-center text-sm">
                        
                        <Icon icon='solar:calendar-bold'
                          height="16"
                          className="text-secondary"
                          // onClick={() => toggleStar(email.id)}
                        />
                        {formatDistanceToNowStrict(new Date(task.end), {
                      addSuffix: false,
                    })} 
                        </span>
                      ) 

                      }
                      {/* {checkedItems[task.id] && <Icon icon="solar:trash-bin-minimalistic-outline" height="17"
                        className="text-dark dark:text-darklink" onClick={() => handleDelete(task.id)} />} */}
                    </div>
                    {/* <p className="text-xs  font-medium mt-0.5">{formatDistanceToNowStrict(new Date(task.end), {
                      addSuffix: false,
                    })} Due On</p> */}
                  </div>
                  <p className="text-sm  line-clamp-1 mt-0 mb-3">
                    {task.description}
                  </p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar> 
      
      }
         {/* {openTask && <TaskDetail  openTaskValue ={openTask} onCloseTask={() => setOpenTask(false)} taskDetails={selectedTask}/>} */}
          </>
    );
};
export default TaskList;


