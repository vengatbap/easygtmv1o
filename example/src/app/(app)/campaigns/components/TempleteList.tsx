"use client";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { CampaignContext } from "@/app/context/campaignContext/index";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Alert, Button, Modal } from "flowbite-react";
import SimpleBar from "simplebar-react";
import { TemplateType } from '@/app/(admin)/types/campaigns/campaign';

type TemplateListProps = {
  openContact: Dispatch<SetStateAction<boolean>>; // or specify the exact type of the function
};


const TempleteData: TemplateType[] = [
  {
    id: 1,
    name: 'Georgeanna  Ramero',
    image: "/images/profile/user-2.jpg",
    category_id : 2,
    category: 'Strategy & Planning',
    description: 'Muller Inc',
    
  },
  {
    id: 2,
    name: 'Cami  Macha',
    image: "/images/profile/user-3.jpg",
category_id : 3,
category: 'Content Marketing',
    description: 'Zboncak LLC',
   
  },
  {
    id: 3,
    name: 'Alda  Ziemer',
    image: "/images/profile/user-4.jpg",
category_id : 4,
category: 'Social Media Marketing',
    description: 'Lehner-Jacobson',
  
  },
  {
    id: 4,
    name: 'Luciano  Macpherson',
    image: "/images/profile/user-5.jpg",
category_id : 5,
category: 'Email Marketing',
    description: 'Champlin',
  
  },
  {
    id: 5,
    name: 'Dalton  Paden',
    image: "/images/profile/user-6.jpg",
category_id : 6,
category: 'Marketing Automation',
    description: 'Balistreri',
   
  },
  {
    id: 6,
    name: 'Juan  Granado',
    image: "/images/profile/user-7.jpg",
    category_id : 6,
    category: 'Marketing Automation',
    description: 'Bernier-Ankunding',
    
  },
  {
    id: 7,
    name: 'Revan  Allen',
    image: "/images/profile/user-8.jpg",
    category_id : 5,
    category: 'Email Marketing',
    description: 'Rosenbaum Inc',
  
  },
  {
    id: 8,
    name: 'Juley  Huseman',
    image: "/images/profile/user-9.jpg",
    category_id : 4,
    category: 'Social Media Marketing',
    description: 'Smith-Romaguera',
  
  },
  {
    id: 9,
    name: 'Bridgette  Phung',
    image: "/images/profile/user-10.jpg",
    category_id : 3,
    category: 'Content Marketing',
    description: 'Corwin-Kassulke',
   
  },
  {
    id: 10,
    name: 'Ernest  Cousins',
    image: "/images/profile/user-2.jpg",
    category_id : 2,
    category: 'Strategy & Planning',
    description: 'Homenick-Hartmann',
   
  },
  {
    id: 11,
    name: 'Nicolette  Trapani',
    image: "/images/profile/user-3.jpg",
    category_id : 3,
    category: 'Content Marketing',
    description: 'Gleason',
    
  },
  {
    id: 12,
    name: 'Virginia  Bourdeau',
    image: "/images/profile/user-4.jpg",
category_id : 4,
category: 'Social Media Marketing',
    description: 'McKenzie and Sons',
   
  },
  {
    id: 13,
    name: 'Janit  Vogl',
    image: "/images/profile/user-5.jpg",
category_id : 5,
category: 'Email Marketing',
    description: 'Erdman-Moen',
 
  },
  {
    id: 14,
    name: 'Jeneva  Bridgeforth',
    image: "/images/profile/user-10.jpg",
category_id : 6,
category: 'Marketing Automation',
description: 'Fay LLC',
  
  },
  {
    id: 15,
    name: 'Roselia  Principe',
    image: "/images/profile/user-4.jpg",
category_id : 5,
category: 'Email Marketing',
    description: 'Bode-Oberbrunner',
 
  },
  {
    id: 16,
    name: 'Elvir  Hylton',
    image: "/images/profile/user-7.jpg",
category_id : 4,
category: 'Social Media Marketing',
    description: 'Pagac Group',
   
  },
  {
    id: 17,
    name: 'Maragaret  Pecor',
    image: "/images/profile/user-10.jpg",
category_id : 3,
category: 'Content Marketing',
    description: 'Predovic and Sons',
   
  },
  {
    id: 18,
    name: 'Willena  Sugrue',
    image: "/images/profile/user-2.jpg",
category_id : 2,
category: 'Strategy & Planning',
description: 'Graham Group',
  
  },
  {
    id: 19,
    name: 'Euran  Solley',
    image: "/images/profile/user-3.jpg",
category_id : 3,
category: 'Content Marketing',
    description: 'Toy-Ryan',
   
  },
  {
    id: 20,
    name: 'Velva  Brockett',
    image: "/images/profile/user-4.jpg",
category_id : 4,
category: 'Social Media Marketing',
    description: 'Walsh Ltd',
  
  },
  {
    id: 21,
    name: 'Anay  Snapp',
    image: "/images/profile/user-5.jpg",
category_id : 5,
category: 'Email Marketing',
    description: 'Romaguera Inc',
 
  },
  {
    id: 22,
    name: 'Latoria  Penaloza',
    image: "/images/profile/user-6.jpg",
category_id : 6,
category: 'Marketing Automation',
description: 'Leuschke',
  
  },
  {
    id: 23,
    name: 'Tamik  Inman',
    image: "/images/profile/user-7.jpg",
category_id : 5,
category: 'Email Marketing',
    description: 'Schumm',
  
  },
  {
    id: 24,
    name: 'Erich  Aragon',
    image: "/images/profile/user-8.jpg",
category_id : 4,
category: 'Social Media Marketing',
    description: 'Brakus',
  
  },
  {
    id: 25,
    name: 'Johanna  Randel',
    image: "/images/profile/user-9.jpg",
category_id : 3,
category: 'Content Marketing',
    description: 'Goyette',
   
  },
  {
    id: 26,
    name: 'Victorina  Heinze',
    image: "/images/profile/user-10.jpg",
category_id : 2,
category: 'Strategy & Planning',
description: 'Fritsch',
 
  },
  {
    id: 27,
    name: 'Kimon  Light',
    image: "/images/profile/user-8.jpg",
category_id : 3,
category: 'Content Marketing',
    description: 'Langosh',
   
  },
  {
    id: 28,
    name: 'Sanford  Delorenzo',
    image: "/images/profile/user-3.jpg",
category_id : 4,
category: 'Social Media Marketing',
    description: 'Huels',

  },
  {
    id: 29,
    name: 'Hansi  Strebel',
    image: "/images/profile/user-4.jpg",
category_id : 5,
category: 'Email Marketing',
    description: 'Kohler',
 
  },
  {
    id: 30,
    name: 'Roger  Trinidad',
    image: "/images/profile/user-5.jpg",
category_id : 6,
category: 'Marketing Automation',
description: 'Kling-Hintz',
  },
];
function TempleteList({ openContact }: TemplateListProps) {
  const {
    selectedCategery,
    setSelectedTemplate,
    selectedTemplate,
    searchTerm,
    openModal,
    setOpenModal,
  }: any = useContext(CampaignContext);

  // Handle click on delete contact
  const handleDeleteClick = (contactId: number | any) => {
    // deleteContact(contactId);
    // setOpenModal(true);
  };

  // Filter contacts based on selected department and search query
  const filterContacts = (
    TempleteData: TemplateType[],
    selectedCategery : string | number,
    search: string
  ): TemplateType[] => {
    let filteredContacts = [...TempleteData];

    if (selectedCategery !== 1 ) {
      // if (selectedDepartment === "Frequent") {
      //   filteredContacts = filteredContacts.filter(
      //     (contact) => contact.frequentlycontacted
      //   );
      // } else if (selectedCategery == "Starred") {
        // filteredContacts = filteredContacts.filter((contact) =>
        //   starredContacts.includes(contact.id)
        // );
      // } else {
        filteredContacts = filteredContacts.filter(
          (template) => template.category_id === selectedCategery
        );
      }
    // }

    // if (searchTerm.trim() !== "") {
    //   const searchTermLower = search.toLowerCase();
    //   filteredContacts = filteredContacts.filter(
    //     (contact) =>

    //       // contact.firstname.toLowerCase().includes(searchTermLower) ||
    //       // contact.lastname.toLowerCase().includes(searchTermLower)
    //   );
    // }

    return filteredContacts;
  };

  // Get filtered contacts based on selected department and search query
  const filteredContacts = filterContacts(
    TempleteData,
    selectedCategery,
    searchTerm
  );

  // Handle click on a contact to view details
  const handleContactClick = (contact: TemplateType) => {
    console.log(contact)
    setSelectedTemplate(contact);
  };
  return (
    <>
      <SimpleBar className="max-h-[600px] h-[calc(100vh_-_100px)] w-3/4">
        <div className="border-0 border-color-divider h-full w-4/4">
          {/* {selectedCategery === "Starred" && filteredContacts.length === 0 ? (
            <div className="px-6 pt-3">
              <Alert
                color="lighterror"
                icon={() => (
                  <Icon icon="solar:info-circle-broken" height={18} />
                )}
              >
                <span className="font-medium ms-3">No</span> starred contacts
                available.
              </Alert>
            </div>
          ) : searchTerm !== "" && filteredContacts.length === 0 ? (
            <div className="px-6 pt-3">
              <Alert
                color="lighterror"
                icon={() => (
                  <Icon icon="solar:info-circle-broken" height={18} />
                )}
              >
                <span className="font-medium ms-3">No</span> Contact found
              </Alert>
            </div>
          ) : ( */}
            <div className="flex flex-wrap" >
              {filteredContacts.map((templete) => (
                <div
                  key={templete.id}
                  // className={`cursor-pointer w-2/4 p-2 items-center group ${
                  //   selectedTemplate && selectedTemplate.id == templete.id
                  //     ? "bg-lighthover dark:bg-darkmuted"
                  //     : "bg-transparent"
                  // }`}
                  className="cursor-pointer w-2/4 p-2 items-center"
                  onClick={()=>{
                    handleContactClick(templete);
                    // openContact(true)
                  }}
                >
                  <div 
                  className={`border p-0 bg-hover py-4 px-6 w-full group hover:bg-neutral-50 rounded-lg ${
                    selectedTemplate && selectedTemplate.id == templete.id
                      ? "bg-lighthover dark:bg-darkmuted"
                      : "bg-transparent"
                  }`}
                  >



                  {/* <div className="border p-0 bg-white w-full hover:bg-neutral-50 rounded-lg">
             
             <div className="px-6 pb-6">

             
               <h5 className="text-lg capitalize pt-2 pb-1 group-hover:text-primary">                      {templete.name} 

               </h5>
               <p className="flex gap-1 pb-1 items-center text-base mt-0.5">{templete.category}</p>
               
<div className="lg:col-span-12 col-span-12 pb-4 pt-2">

                 <div className="flex gap-4">
                   <div className="flex gap-2 items-center text-darklink text-[15px]">
                 <p className="flex items-center gap-2">
                 {templete.description} 
                 </p>
                   </div>
                 
                 </div>
               </div>
             </div>
             <Button color="secondary" className="border w-full rounded-b-lg bg-transperant text-inherit rounded-t-none hover:text-primary py-2" outline>
             Preview
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
             </div> */}



                  {/* <Image
                    src={templete.image}
                    width={40}
                    height={40}
                    alt="name"
                    className="rounded-full"
                  /> */}
                  <div>
                    <h6 className="text-base group-hover:text-primary">
                      {templete.name} 
                    </h6>
                    <p className="flex gap-1 pb-1 items-center text-xs mt-0.5">{templete.category}</p>

                    <p className="text-sm text-ld opacity-80 font-normal mt-0.5">
                      {templete.description}
                    </p>
                   
                  </div>

                  <div className="flex ms-auto justify-end mt-2">
                  <Button color='light' size='xs' onClick={() => setOpenModal(false)}>
                Preview
              </Button>
              <Button color='light' size='xs' onClick={() => setOpenModal(false)}>
                Use Template
              </Button>
                    {/* <div  
                      className="me-2"
                      onClick={() => toggleStarred(templete.id)}
                    >
                      {starredContacts.includes(templete.id) ? (
                        <Icon icon='solar:star-bold'
                          className="text-warning"
                          height="15"
                          fill="rgb(255, 193, 7)"
                        />
                      ) : (
                        <Icon icon='solar:star-line-duotone' height="15" />
                      )}
                    </div> */}
                    {/* <div onClick={() => handleDeleteClick(templete.id)}>
                      <Icon icon="solar:trash-bin-2-outline" height={15} />
                      
                    </div> */}
                   
                  </div>
                  </div>

                </div>
              ))}
            </div>
          {/* )} */}
        </div>
      </SimpleBar>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <Icon icon="solar:info-circle-broken" className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this contact?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color='primary' onClick={() => setOpenModal(false)}>
                {"Yes"}
              </Button>
              <Button color={'error'} onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TempleteList;
