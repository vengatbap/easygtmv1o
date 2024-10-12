"use client";
import React, { useContext,useEffect, useState } from "react";
import { CampaignContext } from "@/app/context/campaignContext";
import {
  Checkbox,
  Card,
  TextInput,
  Button,
  Modal,
  Badge,
  Tooltip,
} from "flowbite-react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import CardBox from "@/app/components/CardBox";
import { format } from "date-fns";

import { GoDot } from "react-icons/go";
import { CampaignList } from '@/app/(admin)/types/campaigns/campaign';

import { useRouter } from "next/navigation";

const campaignData = [
  {
  "id": 1,
  "name": "id mauris vulputate",
  "categery": "Social Media Marketing",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 10,
  "completed_goals": 12,
  "goals_assigned": 2,
  "total_assets": 9,
  "status": "new"
}, {
  "id": 2,
  "name": "erat eros viverra eget",
  "categery": "Marketing Automation",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 20,
  "completed_goals": 9,
  "goals_assigned": 2,
  "total_assets": 14,
  "status": ""
}, {
  "id": 3,
  "name": "consequat ut nulla sed accumsan",
  "categery": "Email Marketing",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 17,
  "completed_goals": 9,
  "goals_assigned": 6,
  "total_assets": 7,
  "status": ""
}, {
  "id": 4,
  "name": "quam pede lobortis ligula sit",
  "categery": "Marketing Automation",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 12,
  "completed_goals": 6,
  "goals_assigned": 5,
  "total_assets": 12,
  "status": "new"
}, {
  "id": 5,
  "name": "rutrum ac lobortis",
  "categery": "Email Marketing",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 20,
  "completed_goals": 7,
  "goals_assigned": 3,
  "total_assets": 7,
  "status": "ongoing"
}, {
  "id": 6,
  "name": "augue a suscipit nulla elit",
  "categery": "Data & Analytics",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 14,
  "completed_goals": 13,
  "goals_assigned": 14,
  "total_assets": 14,
  "status": "completed"
}, {
  "id": 7,
  "name": "curae mauris viverra",
  "categery": "Tachnology & Tools",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 17,
  "completed_goals": 6,
  "goals_assigned": 8,
  "total_assets": 10,
  "status": "pending"
}, {
  "id": 8,
  "name": "nibh in hac habitasse platea",
  "categery": "Data & Analytics",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 16,
  "completed_goals": 9,
  "goals_assigned": 14,
  "total_assets": 9,
  "status": ""
}, {
  "id": 9,
  "name": "quam suspendisse potenti nullam",
  "categery": "Tachnology & Tools",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 10,
  "completed_goals": 8,
  "goals_assigned": 9,
  "total_assets": 5,
  "status": "pending"
}, {
  "id": 10,
  "name": "molestie sed justo pellentesque viverra",
  "categery": "Social Media Marketing",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 15,
  "completed_goals": 5,
  "goals_assigned": 7,
  "total_assets": 8,
  "status": "pending"
}, {
  "id": 11,
  "name": "rhoncus sed vestibulum sit",
  "categery": "Content Marketing",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 10,
  "completed_goals": 5,
  "goals_assigned": 12,
  "total_assets": 13,
  "status": "completed"
}, {
  "id": 12,
  "name": "nisi vulputate nonummy",
  "categery": "Data & Analytics",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 11,
  "completed_goals": 10,
  "goals_assigned": 8,
  "total_assets": 9,
  "status": "pending"
}, {
  "id": 13,
  "name": "lectus in quam fringilla",
  "categery": "Email Marketing",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 12,
  "completed_goals": 6,
  "goals_assigned": 6,
  "total_assets": 6,
  "status": "completed"
}, {
  "id": 14,
  "name": "nulla integer pede justo lacinia",
  "categery": "Tachnology & Tools",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 18,
  "completed_goals": 6,
  "goals_assigned": 6,
  "total_assets": 15,
  "status": ""
}, {
  "id": 15,
  "name": "in porttitor pede",
  "categery": "Tachnology & Tools",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 12,
  "completed_goals": 8,
  "goals_assigned": 3,
  "total_assets": 12,
  "status": "pending"
}, {
  "id": 16,
  "name": "morbi ut odio",
  "categery": "Social Media Marketing",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 12,
  "completed_goals": 8,
  "goals_assigned": 12,
  "total_assets": 11,
  "status": "pending"
}, {
  "id": 17,
  "name": "tincidunt in leo maecenas pulvinar",
  "categery": "Social Media Marketing",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 19,
  "completed_goals": 8,
  "goals_assigned": 13,
  "total_assets": 8,
  "status": "pending"
}, {
  "id": 18,
  "name": "lacinia eget tincidunt",
  "categery": "Email Marketing",
  "start": "2024-07-15T00:00:00Z",
  "end": "2024-07-22T00:00:00Z",
  "created_at": "2024-07-15T00:00:00Z",
  "updated_at": "2024-07-15T00:00:00Z",
  "total_goals": 17,
  "completed_goals": 10,
  "goals_assigned": 2,
  "total_assets": 7,
  "status": "new"
}]

function CampaignListing() {
  const router = useRouter();

  const [campaigns, setCampaigns] = useState<CampaignList[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState<any>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {       
        try {
            // const response = await axios.get('/api/data/campignLists');
            // console.log(response)
            setCampaigns(campaignData);
            setLoading(false);
        } catch (error) {
            // setError(error);
            setLoading(false);
        }
    };
    fetchData();
}, []);

  // Handle opening delete confirmation dialog
  const handleDelete = () => {
    setOpenDeleteDialog(true);
  };

  // Handle confirming deletion of selected products
  const handleConfirmDelete = async () => {
    // for (const productId of selectedProducts) {
    //   await deleteCampaign(productId);
    // }
    // setSelectedProducts([]);
    // setSelectAll(false);
    // setOpenDeleteDialog(false);
  };

  // Handle closing delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };
  const statusBadge = (status: any) => {
    // ongoing, pending, completed,, new
    return status === "completed"
      ? "success"
      : status === "pending"
        ? "error"
        : status === "ongoing"
          ? "warning"
          : status === "new"
            ? "primary"
            : "primary";
  };
  return (
    <div className="overflow-x-auto">
      <div className="sm:flex justify-between">
        <div className="flex gap-4 items-center">
      {/* <h2 className="text-xl mr-5">Campaigns</h2> */}

        <div>
          <TextInput
            id="dis"
            type="text"
            className="form-control"
            placeholder="search"
            value={searchTerm}
            icon={() => <Icon icon="solar:magnifer-line-duotone" height={18} />}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        </div>
        <div>
        <Button color={"primary"} className="sm:w-fit w-full sm:mt-0 mt-4" onClick={() => { router.push('/campaigns/create'); }}>
          <Link href="/campaigns/create"> New Campaign </Link>
        </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
      <div className="grid grid-cols-12 mt-8 gap-30"> 
     
    
        {campaigns.map((campaign: {
              id: number;
              name: string ;
              start: string ;
              end: string;
              created_at: string;
              updated_at: string;
              total_goals: number; 
              completed_goals: number;
              goals_assigned: number;
              categery: string;
              status: string;
              total_assets: number;  
            }) => {
          return (
            <div 
            key={campaign.id}
            className="lg:col-span-4 md:col-span-6 col-span-12"  >
              <CardBox className="overflow-hidden group card-hover p-3">
                <div className="border p-0 bg-white hover:bg-neutral-50 rounded-lg">
             
                <div className="px-6 pb-6">

                  <Badge
                      className={`mt-6 capitalize bg-light${statusBadge(campaign.status)} dark:bg-dark${statusBadge(campaign.status)} text-${statusBadge(campaign.status)}`}
                    >
                      {campaign.status}
                    </Badge>
                  <h5 className="text-xl capitalize pt-2 pb-1 group-hover:text-primary">
                    <Link href={`/campaigns/detail/${campaign.id}`} className="line-clamp-2"> {campaign.name}</Link>
                  </h5>
                  <p className="flex gap-1 pb-1 items-center text-base mt-0.5">{campaign.categery}</p>
                  <div className="grid grid-cols-12 gap-3 py-6">

                  <div className="lg:col-span-12 col-span-12 ">
              <div className="flex gap-6 items-center py-6 justify-start lg:py-0 py-4">
                <div className="text-left">
                <p className="text-darklink text-sm">Goals Completed</p>
                  <h4 className="text-base">{campaign.completed_goals} / {campaign.total_goals}</h4>
                </div>
                <div className="text-left">
                <p className="text-darklink text-sm">Start Date</p>

                  <h4 className="text-base">{format(new Date(campaign.start), "E, MMM d")} </h4>
                </div>
                <div className="text-left">
                <p className="text-darklink text-sm">Due Date</p>

                  <h4 className="text-base">{format(new Date(campaign.end), "E, MMM d")}</h4>
                </div>
              </div>
            </div>
</div>
<div className="lg:col-span-12 col-span-12 pb-4 pt-2">

                    <div className="flex gap-4">
                      <div className="flex gap-2 items-center text-darklink text-[15px]">
                        <h6>{campaign.total_assets}</h6>
                    <p className="flex items-center gap-2">
                     Documents
                    </p>
                      </div>
                      <div className="flex gap-2 items-center text-darklink text-[15px]">
                        <h6>{campaign.goals_assigned} / {campaign.total_goals}</h6>
                    <p className="flex items-center gap-2">
                     Goal Assigned
                    </p>
                      </div>
                      <div className="flex gap-2 items-center text-darklink text-[15px]">
                        <h6>{campaign.total_goals}</h6>
                    <p className="flex items-center gap-2">
                     Goal List
                    </p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <Button color="secondary" className="border w-full rounded-b-lg bg-transperant text-inherit rounded-t-none hover:text-primary py-2" outline>
                View more
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
                </div>
              </CardBox>
            </div>
          );
        })}
      </div>
      </div>
      <Modal show={openDeleteDialog} onClose={handleCloseDeleteDialog} size={"md"}>
        <Modal.Body>
          <p className="text-center text-lg text-ld">
            Are you sure you want to delete selected products?
          </p>
        </Modal.Body>
        <Modal.Footer className="mx-auto">
          <Button color="lighterror" onClick={handleCloseDeleteDialog}>
            Cancel
          </Button>
          <Button color="error" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CampaignListing;


