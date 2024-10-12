import CampignList from '@/app/(admin)/campaigns/components/List'
import React from 'react'
import CardBox from "@/app/components/CardBox";
import { CampaignProvider } from '@/app/context/campaignContext/index';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Campaign List",
};

function List() {
    return (
        <CampaignProvider>
            <CardBox>
                <CampignList />
            </CardBox>
        </CampaignProvider>
    )
}
export default List;
