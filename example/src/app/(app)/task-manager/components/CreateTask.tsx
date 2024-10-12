"use client";
import React, { useContext, useState, useEffect } from 'react';
import {
    Drawer, Label, Button, Textarea, TextInput, Datepicker, Avatar, AvatarGroup, theme, Dropdown,
} from 'flowbite-react';
import { HiCog, HiUserAdd, HiCalendar, HiViewGrid } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import TeamSelect from '@/app/components/TeamSelect';
interface TaskdrawerProps {
    isOpen: boolean;
    closeNewTask: () => void;
}
const teamsData = [
    {
        id: 1,
        organization_id: 1,
        name: "Dayana Blanda II",
        email: "harley28@example.org",
        role: "staff",
        title: "Brand Manager",
        email_verified_at: "2024-07-11T08:30:26.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 2,
        organization_id: 1,
        name: "Antone Bogisich",
        email: "ernie.howe@example.com",
        role: "staff",
        title: "Campaign Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 3,
        organization_id: 1,
        name: "Angela Satterfield",
        email: "spencer.shana@example.com",
        role: "staff",
        title: "Campaign Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 4,
        organization_id: 1,
        name: "Napoleon Gorczany",
        email: "aurelio81@example.org",
        role: "staff",
        title: "Graphic Designer",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 5,
        organization_id: 1,
        name: "Mrs. Shany Dibbert",
        email: "fmarks@example.net",
        role: "staff",
        title: "Brand Artist",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 6,
        organization_id: 1,
        name: "Dr. Lukas Veum Jr.",
        email: "collins.randi@example.net",
        role: "staff",
        title: "Brand Artist",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 7,
        organization_id: 1,
        name: "Maximo Kuhic IV",
        email: "ephraim15@example.com",
        role: "staff",
        title: "Associate",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 8,
        organization_id: 1,
        name: "Mr. Rickie Hammes IV",
        email: "yundt.kamille@example.org",
        role: "staff",
        title: "Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 9,
        organization_id: 1,
        name: "Savannah Beer",
        email: "freeman00@example.com",
        role: "staff",
        title: "Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 10,
        organization_id: 1,
        name: "Mrs. Molly Rice PhD",
        email: "elta.rodriguez@example.com",
        role: "staff",
        title: "Graphic Designer",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 11,
        organization_id: 1,
        name: "Tavares Breitenberg",
        email: "susan12@example.net",
        role: "staff",
        title: "Software Developer",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 12,
        organization_id: 1,
        name: "Luigi Schuster",
        email: "murray.cyrus@example.com",
        role: "staff",
        title: "Brand Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 13,
        organization_id: 1,
        name: "Alice Mertz",
        email: "terry.weber@example.com",
        role: "staff",
        title: "Campaign Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 14,
        organization_id: 1,
        name: "Alexzander Kunde",
        email: "lelah.ziemann@example.com",
        role: "staff",
        title: "Graphic Designer",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 15,
        organization_id: 1,
        name: "Jermain Kerluke III",
        email: "eric.sauer@example.com",
        role: "staff",
        title: "Associate",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 16,
        organization_id: 1,
        name: "Amanda Hahn",
        email: "camila.bayer@example.net",
        role: "staff",
        title: "Campaign Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 17,
        organization_id: 1,
        name: "Josiane Schiller",
        email: "jacobs.courtney@example.org",
        role: "staff",
        title: "Brand Artist",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 18,
        organization_id: 1,
        name: "Miss Ellen Hoppe V",
        email: "mortimer.boyle@example.org",
        role: "staff",
        title: "Graphic Designer",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 19,
        organization_id: 1,
        name: "Dr. Paige Rau",
        email: "schmeler.lia@example.org",
        role: "staff",
        title: "Brand Artist",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 20,
        organization_id: 1,
        name: "Kavon Johnston",
        email: "yesenia.klocko@example.com",
        role: "staff",
        title: "Campaign Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 21,
        organization_id: 1,
        name: "Prof. Glennie Yost IV",
        email: "zackery26@example.com",
        role: "staff",
        title: "Marketing Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 22,
        organization_id: 1,
        name: "Matilde Satterfield",
        email: "robel.nyasia@example.net",
        role: "staff",
        title: "Campaign Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 23,
        organization_id: 1,
        name: "Michaela Von",
        email: "jazmyn.oberbrunner@example.com",
        role: "staff",
        title: "Associate",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 24,
        organization_id: 1,
        name: "Ms. Verlie Muller V",
        email: "braxton75@example.com",
        role: "staff",
        title: "Product Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 25,
        organization_id: 1,
        name: "Marianna Kris",
        email: "tremblay.zane@example.net",
        role: "staff",
        title: "Marketing Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 26,
        organization_id: 1,
        name: "Prof. Laurie Senger V",
        email: "tessie.nienow@example.org",
        role: "staff",
        title: "Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 27,
        organization_id: 1,
        name: "Warren Rippin",
        email: "ctowne@example.net",
        role: "staff",
        title: "Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 28,
        organization_id: 1,
        name: "Hassan Smitham",
        email: "oreilly.justyn@example.com",
        role: "staff",
        title: "Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 29,
        organization_id: 1,
        name: "Saul West",
        email: "arnold35@example.org",
        role: "staff",
        title: "Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 30,
        organization_id: 1,
        name: "Dasia Stroman",
        email: "keon96@example.net",
        role: "staff",
        title: "Brand Artist",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 31,
        organization_id: 1,
        name: "Json Born",
        email: "owner@acme.com",
        role: "owner",
        title: "Brand Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
    {
        id: 32,
        organization_id: null,
        name: "John Doe",
        email: "admin@gtm.com",
        role: "admin",
        title: "Brand Manager",
        email_verified_at: "2024-07-11T08:30:27.000000Z",
        deleted_at: null,
        created_at: "2024-07-11T08:30:27.000000Z",
        updated_at: "2024-07-11T08:30:27.000000Z",
    },
]
const CreateTask: React.FC<TaskdrawerProps> = ({ isOpen, closeNewTask }) => {

    const [isElement, setIsOpen] = useState(false);
    const elementClose = () => setIsOpen(false);

    return (
        <>
            <Drawer open={isOpen}
                onClose={closeNewTask}
                className="p-5 w-2/6 ]"
                position="right" >
                <Drawer.Header titleText={false} titleIcon={HiCog}/>
                <Drawer.Items>
                    <form action="#">
                        <div className="mb-6 mt-3">
                            <Label htmlFor="title" className="mb-2 block">
                                Task Name
                            </Label>
                            <TextInput
                                id="title"
                                name="title"
                                placeholder="Add Task Name"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="description" className="mb-2 block">
                                Description
                            </Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Add task description..."
                                rows={4}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-6">
                            <div className="grid grid-cols-12 gap-2 mt-2 flex items-center">


                                <div className="col-span-5">
                                    <p className="text-darklink text-sm mb-1">Assigned To </p>
                                    {/* <Tooltip content={"Click to assigne"} placement="top">



                          <h5 className="font-normal mb-0.5 cursor-pointer" onClick={handleTeamEditClick}>
                            <div className="flex items-center font-medium dark:text-white">
                              <Avatar style={{ backgroundColor: `${avatarBg}` }} className="rounded-full bg-transparent avatar-no-bg mr-2" placeholderInitials={taskData.assignee_id ? taskData.assignee.name.charAt(0) : 'U'} size="xs" />
                              <div className="text-ld">{taskData.assignee_id ? taskData.assignee.name : 'Unassigned'} </div>
                            </div>

                          </h5>
                        </Tooltip> */}
                                    <TeamSelect items={teamsData} selected={''} />


                                </div>
                                <div className="col-span-5">
                                    <p className="text-darklink text-sm mb-1">Due date</p>
                                    <Datepicker className="form-control" defaultDate={new Date('Thu Nov 14 2024 00:00:00 GMT+0530')} onSelectedDateChanged={(date) => console.log(date)} />

                                </div>
                                <div className="col-span-2 ml-auto">
                                    <p className="text-darklink text-sm mb-1">Status</p>
                                    <h5 className="font-normal mb-0.5 capitalize">
                                        <Dropdown label={<span className="capitalize"> UnAssigned </span>} inline className="status-cusom" >
                                            <Dropdown.Item >UnAssigned</Dropdown.Item>
                                            <Dropdown.Item >Assigned</Dropdown.Item>
                                            <Dropdown.Item>On Progress</Dropdown.Item>
                                            <Dropdown.Item >Delayed</Dropdown.Item>
                                            <Dropdown.Item >Onhold</Dropdown.Item>
                                            <Dropdown.Item >Completed</Dropdown.Item>
                                            <Dropdown.Divider />

                                        </Dropdown>
                                        {/* {format(new Date(taskData.end), "E, MMM d")}  */}

                                    </h5>
                                </div>



                                {/* <div className="col-span-7 relative" ref={ref}>
                        {isDateEditMode &&
                          <div className="absolute top-0 left-0 right-0 bg-muted shadow p-3 border">
                            <Datepicker onChange={handleChange}
                              className="form-rounded-md bg-white" />

                          </div>}
                        {isTeamEditMode &&
                          <div className="absolute top-0 left-0 right-0 bg-muted shadow p-3 border">
                            <TeamSelect items={teamsData} selected={taskData?.assignee && taskData.assignee} />


                          </div>}

                      </div> */}

                                {/* <div className="col-span-4">
                        <p className="text-darklink text-sm">Department</p>
                        <h5 className="font-semibold mb-0.5">
                          {taskData.department}
                        </h5>
                      </div>
                      <div className="col-span-8">
                        <p className="text-darklink text-sm">Company</p>
                        <h5 className="font-semibold mb-0.5">
                          {taskData.company}
                        </h5>
                      </div> */}

                            </div>
                        </div>
                        <div className="mb-6">
                            <TextInput
                                id="guests"
                                name="guests"
                                placeholder="Add guest email"
                                type="search"
                                className="form-control"
                                rightIcon={() => (
                                    <Button
                                        size="sm"
                                        className="[&>span]:items-center [&>span]:px-2 [&>span]:py-0"
                                        color="primary"
                                    >
                                        <HiUserAdd className="mr-2" />
                                        Add
                                    </Button>
                                )}
                                theme={{
                                    field: {
                                        rightIcon: {
                                            base: twMerge(
                                                theme.textInput.field.rightIcon.base,
                                                "pointer-events-auto"
                                            ),
                                        },
                                    },
                                }}
                            />
                        </div>
                        <Avatar.Group className="mb-6">
                            <Avatar
                                alt=""
                                img="/images/profile/user-2.jpg"
                                rounded
                                size="sm"
                                stacked
                            />
                            <Avatar
                                alt=""
                                img="/images/profile/user-3.jpg"
                                rounded
                                size="sm"
                                stacked
                            />
                            <Avatar
                                alt=""
                                img="/images/profile/user-4.jpg"
                                rounded
                                size="sm"
                                stacked
                            />
                            <Avatar
                                alt=""
                                img="/images/profile/user-5.jpg"
                                rounded
                                size="sm"
                                stacked
                            />
                        </Avatar.Group>
                        <Button className="w-full" color="primary">
                            <HiCalendar className="mr-2" />
                            Create event
                        </Button>
                    </form>
                </Drawer.Items>
            </Drawer>
        </>
    )
}
export default CreateTask;
