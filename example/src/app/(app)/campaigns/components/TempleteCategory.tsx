import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { HR, List } from "flowbite-react";
import { CampaignContext } from "@/app/context/campaignContext/index";

interface DataType {
  id: number;
  name?: string | any;
  sort?: string;
  icon?: any;
  filterbyTitle?: string;
  devider?: boolean;
  color?: string;
}

const TempleteCategory = () => {
  const { setSelectedCategery, selectedCategery }: any =
    useContext(CampaignContext);
  const filterData: DataType[] = [
    {
      id: 1,
      name: "All",
      sort: "show_all",
      icon: "solar:inbox-unread-outline",
    },
    // {
    //   id: 3,
    //   name: "Frequent",
    //   sort: "frequent_contact",
    //   icon: 'solar:map-arrow-square-line-duotone',
    // },
    // {
    //   id: 4,
    //   name: "Starred",
    //   sort: "starred_contact",
    //   icon: 'solar:cart-broken',
    // },
    // {
    //   id: 6,
    //   devider: true,
    // },
    // {
    //   id: 5,
    //   filterbyTitle: "Categories",
    // },

    {
      id: 2,
      name: "Strategy & Planning",
      sort: "engineering_department",
      icon: 'solar:folder-broken',
      // color: "primary",
    },
    {
      id: 3,
      name: "Content Marketing",
      sort: "support_department",
      icon: 'solar:question-circle-outline',
      // color: "error",
    },
    {
      id: 4,
      name: "Social Media Marketing",
      sort: "sales_department",
      icon: 'solar:sale-square-outline',
      // color: "success",
    },
    {
      id: 5,
      name: "Email Marketing",
      sort: "sales_department",
      icon: 'solar:sale-square-outline',
      // color: "success",
    },
    {
      id: 6,
      name: "Marketing Automation",
      sort: "sales_department",
      icon: 'solar:sale-square-outline',
      // color: "success",
    },
  ];

  const handleDepartmentClick = (department: string | number) => {
    setSelectedCategery(department);
    // updateSearchTerm("");
  };
  return (
    <>
      <div className="left-part max-w-[320px] h-full w-1/4 p-0">
        <List className="my-4">
          {filterData.map((filter) => {
            if (filter.filterbyTitle) {
              return (
                <h6 className="uppercase text-xs pb-3" key={filter.id}>
                  {filter.filterbyTitle}
                </h6>
              );
            } else if (filter.devider) {
              return (
                <div className="my-4">
                  <HR key={filter.id} className="my-6" />
                </div>
              );
            }
            return (
              <List.Item
                key={filter.id}
                className={`py-[10px] gap-2 px-4 hover:bg-muted dark:hover:bg-darkmuted rounded-md text-ld cursor-pointer ${
                  selectedCategery === filter.id
                    ? "text-primary bg-lighthover dark:bg-darkmuted"
                    : ""
                }`}
                icon={() => (
                  <Icon
                    icon={''}
                    height={18}
                    className={`text-${filter.color}`}
                  />
                )}
                onClick={() => handleDepartmentClick(filter.id)}
              >
                {filter.name}
              </List.Item>
            );
          })}
        </List>
      </div>
    </>
  );
};
export default TempleteCategory;
