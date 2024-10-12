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
import { format } from "date-fns";
import TaskList from "./Step";

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


const CampaignPhase = (props: any) => {
    // const [phaseData, setPhaseData]: any = useState(props);
    const [phaseData, setPhaseData] = useState<any>(props);
    const [goals, setGoals] = useState<any>(props.goals);
    useEffect(() => {
        if (props) {
            setPhaseData(props)
        }
    }, []);
    return (
        <>
           
            { phaseData &&
      <div className="lg:col-span-12 md:col-span-12 col-span-12">
        <SimpleBar className="p-0 overflow-hidden bg-white mb-3 border-b-2 shadow-none">     
          <div className=" pb-1 pt-3">

            <h3 className="text-lg">Phase {phaseData.id } : {phaseData.name} </h3>
            
          </div>
        <div className="px-3 pb-2">
         <Accordion collapseAll key={phaseData.id} className="border-0">
         { phaseData.goals.map((goal: any ) => {
            return (       
          <Accordion.Panel key={goal.id} >
            <Accordion.Title className="focus:ring-0 flex-row-reverse justify-end	border-transparent border-t-0">
            <div className="ml-5"> 
              <p className="mb-1 text-base font-semibold">
                {goal.name}
              </p>
             <p className="text-sm font-semibold text-darklink text-[15px] ">
                {goal.description}
              </p>
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <TaskList {...goal}  />
            </Accordion.Content>
          </Accordion.Panel>  
            )
         })  
        }
         </Accordion>
         </div>
        </SimpleBar>
      </div>
}
              
           
        </>
    );
};
export default CampaignPhase;
