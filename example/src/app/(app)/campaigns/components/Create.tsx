"use client"
import React, { useState, useContext, useEffect } from "react";
import { CampaignContext } from "@/app/context/campaignContext";
import { Alert, Button, Label, Select, TextInput, Radio, Tooltip } from "flowbite-react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { format, isValid } from "date-fns";
import TempleteCategory from "./TempleteCategory";
import TempleteList from "./TempleteList";
import Link from "next/link";

function CreateCampign() {

  const { addCampaign , setSelectedCategery ,selectedTemplate } = useContext(CampaignContext);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    CampaignName: "",
    brandId: "",
    templateId: selectedTemplate && selectedTemplate.id,
    status: "Pending",
  });


  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    // console.log(formData)
    setFormData(prevData => {
      const newFormData = { ...prevData, [name]: value };
      return {
        ...newFormData,
      };
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await addCampaign(formData);
      setFormData({
        CampaignName: "",
        brandId: "",
        templateId: 0,
        status: "New",
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      router.push('/campaigns/detail/1');
    } catch (error) {
      console.error("Error adding campaign:", error);
    }
  }

  return (
    <div>
      <div className="p-6">
      <h2 className="text-xl mb-1">Add Campaign Details</h2>
      <p className="mb-4 text-sm mb-0 leading-6 text-gray-600">Start a new campaign by entering the name of the campaign and the campaign type</p>
     </div>
      <form>
        <div className="dark:bg-gray-800/70 p-6 pt-0 my-0 ">

          <div className="grid grid-cols-12 gap-6 flex items-end">

            <div className="lg:col-span-6 md:col-span-6 col-span-12">
              <div className="mb-2 block">
                <Label htmlFor="CampaignName" value="Campaign Name" />
              </div>
              <TextInput
                id="CampaignName"
                name="CampaignName"
                value={formData.CampaignName}
                onChange={handleChange}
                type="text"
                className="form-rounded-md"
              />
            </div>
            
            <div className="lg:col-span-6 md:col-span-6 col-span-12 ml-auto">
              {/* <div className="mb-2 block">
                <Label htmlFor="Brand" value="brand" />
              </div>
              <Select
                className="select-rounded-md select-rounded-lg select-rounded form-rounded-md"
                name="status"
                value={formData.brandId}
                onChange={handleChange}
              >
                <option value="1">Brand 1</option>
                <option value="2">Brand 2</option>
                <option value="3">Brand 3</option>
              </Select> */}
               <Button color={"primary"} className="sm:w-fit w-full sm:mt-0 mt-4">
          <Link href="/campaigns/create">Create Template </Link>
        </Button>
            </div>
            <div className="clg:col-span-12 md:col-span-12 col-span-12">
            {/* <Label htmlFor="camaignType" className="mb-0 inline-block">
                     Campaign Type
                   </Label>
                   <p className="mb-4 text-sm leading-6 text-gray-600">Please select the type of campaign you want to launch.</p>
      */}
              <div className="flex flex-wrap gap-6 border">
             
              <TempleteCategory/>
              <TempleteList openContact = {setSelectedCategery}   />
               {/* <legend className="mb-4">Please select the type of campaign you want to launch</legend> */}
               {/* <div className="flex items-center gap-2">
                 <Radio
                   id="social-media-marketing"
                   name="campaignType"
                   value="social-media-marketing"
                   defaultChecked
                 />
                 <Label htmlFor="social-media-marketing">Social Media Marketing</Label>
               </div>
               <div className="flex items-center gap-2">
                 <Radio id="germany" name="campaignType" value="Germany" />
                 <Label htmlFor="germany">Content Marketing</Label>
               </div>
               <div className="flex items-center gap-2">
                 <Radio id="spain" name="campaignType" value="Spain" />
                 <Label htmlFor="spain">Email Marketing</Label>
               </div>
               <div className="flex items-center gap-2">
                 <Radio id="uk" name="campaignType" value="United Kingdom" />
                 <Label htmlFor="uk">Marketing Automation</Label>
               </div>
               <div className="flex items-center gap-2">
                 <Radio id="china" name="campaignType" value="China" />
                 <Label htmlFor="china">
                   Data & Analysis
                 </Label>
               </div> */}
        
               
              </div>

            </div>
          </div>
        </div>

        <div className="flex justify-end ">
          <div className="flex justify-end gap-3 mt-2">
            <Button color="primary" className="mt-6" onClick={handleSubmit}>
              Create Campaign
            </Button>

            <Button color={"error"} className="mt-6" onClick={() => { router.push('/campaigns/list'); }}>
              Cancel
            </Button>
          </div>
        </div>
      </form >
      {showAlert && (
        <Alert color="success" rounded className="fixed top-3">
          Campaign Created successfully.
        </Alert>
      )
      }
    </div >
  );
}

export default CreateCampign;


