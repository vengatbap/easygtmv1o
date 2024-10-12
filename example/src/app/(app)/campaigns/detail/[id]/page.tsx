import CampignDetail from '@/app/(admin)/campaigns/components/show'
import React from 'react'
import CardBox from "@/app/components/CardBox";
// import InvoiceList from '@/app/components/apps/invoice/Invoice-list/index'
import { CampaignProvider } from '@/app/context/campaignContext/index';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Campaign Detail",
};

function List() {
    
    return (
        <CampaignProvider>
            <CardBox className='pt-0'>
                <CampignDetail />
            </CardBox>
        </CampaignProvider>
    )
}
export default List;
