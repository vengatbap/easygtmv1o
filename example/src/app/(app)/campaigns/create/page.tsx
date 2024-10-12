import React from "react";
import type { Metadata } from "next";
import CreateCampaign from "@/app/(admin)/campaigns/components/Create";
import { CampaignProvider } from '@/app/context/campaignContext/index';
import CardBox from "@/app/components/CardBox";

export const metadata: Metadata = {
  title: "Create New Campaign",
};

function CreateNewCampaign() {
  return (
    <>
      <CampaignProvider>
        <CardBox>
          <CreateCampaign />
        </CardBox>
      </CampaignProvider>

    </>
  );
}
export default CreateNewCampaign;
