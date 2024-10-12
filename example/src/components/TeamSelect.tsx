"use client";
import React ,{ useEffect, useState } from "react";
import { Avatar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Select from "react-select";


interface TeamChildItems {
    id?: number | string;
    name?: string;
    image?: any;
    role?: any;
    email?: any;
    title?: string;
    getRandomColor: () => {}
   
  }
  interface TeamSelectProps {
    items: TeamChildItems | any;
    selected : any
  }
const TeamSelect: React.FC<TeamSelectProps> = ( { items , selected }) => {

  const [selectData, setSelectData] = useState<any>(items);
  const [selectedOption, setSelectedOption] = useState<any>(selected);
  const [avatarBg, setAvatarBg] = useState<any>();

  function stringToColor(name : any) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2);
    }
    setAvatarBg( color)
}


  const formatOptionLabel = (data: any) => (
    <div style={{ display: "flex" }} className="z-50 static">
     {/* { data.image ? <Avatar
        img="https://flowbite-react.com/images/people/profile-picture-5.jpg"
        rounded
        size="xs"
        className="mr-2"
      /> : <Avatar  onLoadedDataCapture={()=>stringToColor(data.name ? data.name : 'Unassigned') } style={{backgroundColor : `${avatarBg}`}} placeholderInitials={data.name.charAt(0)} rounded  size="xs"
      className="mr-2 bg-tranperant" 
      />
    } */}
    <Avatar
        img="/images/profile/user-5.jpg"
        rounded
        size="xs"
        className="mr-2"
      />
      <div>{data.name}</div>
      <div style={{ marginLeft: "15px",fontSize:'12px' }} className="text-darklink" > { data.title }</div>
    </div>

  );


  return (
    <>
       <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        getOptionValue={(option) => option.id}
        options={selectData}
        formatOptionLabel={formatOptionLabel}
      />
    </>
  );
};

export default TeamSelect;

