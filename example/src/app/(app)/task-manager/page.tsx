import TaskList from "@/app/(admin)/task-manager/components/List";
import type { Metadata } from "next";
import { CampaignProvider } from '@/app/context/campaignContext/index';
import CardBox from "@/app/components/CardBox";

export const metadata: Metadata = {
  title: "Task Manager",
};

const Task = () => {
  return (
    <>
      <CampaignProvider>
        <CardBox>
          <TaskList />
        </CardBox>
      </CampaignProvider>
    </>
  );
};

export default Task;
