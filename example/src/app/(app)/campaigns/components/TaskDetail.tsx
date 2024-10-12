"use client";
import {
  Button,
  Drawer,
  Label,
  TextInput,
  Textarea,
  FileInput,
  Avatar,
  Datepicker,
  Tooltip,
  Dropdown,
  Popover
} from "flowbite-react";

import React, { useEffect, useState, useContext, useRef } from "react";
import CardBox from "@/app/components/CardBox";
import { twMerge } from "tailwind-merge";
import SimpleBar from "simplebar-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { format } from "date-fns";
import {
  IconLayoutDashboard,
  IconBrandTrello,
  IconInbox,
  IconTarget,
  IconCubePlus,
  IconCube,
  IconInfoTriangle,
} from "@tabler/icons-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import Link from "next/link";
import TeamSelect from "@/app/components/TeamSelect";
import { CampaignContext } from "@/app/context/campaignContext/index";
import Comment from "./Comments";

// Define the props interface
interface TaskstepProps {
  openTaskValue: boolean;
  onCloseTask: () => void;
}
const taskFull = {

  "comments": [
    {
      "id": 8,
      "task_id": 25,
      "user_id": 31,
      "body": "Content creation is hitting a snag on social media marketing. We're working through it and expect to be back on track by tomorrow. No changes to the overall campaign goals.",
      "created_at": "3 minutes ago",
      "updated_at": "2024-09-12T06:17:56.000000Z",
      "user": {
        "id": 31,
        "organization_id": 1,
        "name": "Napoleon Gorczany",
        "email": "aurelio81@example.org",
        "role": "staff",
        "title": "Graphic Designer",
        "email_verified_at": "2024-07-11T08:30:27.000000Z",
        "deleted_at": null,
        "created_at": "2024-07-11T08:30:27.000000Z",
        "updated_at": "2024-07-11T08:30:27.000000Z"
      }
    },
    {
      "id": 9,
      "task_id": 25,
      "user_id": 31,
      "body": "Thanks for the update! If there is any help needed with this task ping me",
      "created_at": "3 minutes ago",
      "updated_at": "2024-09-12T06:18:22.000000Z",
      "user": {
        "id": 31,
        "organization_id": 1,
        "name": "Json Born",
        "email": "owner@acme.com",
        "role": "owner",
        "title": "Brand Manager",
        "email_verified_at": "2024-07-11T08:30:27.000000Z",
        "deleted_at": null,
        "created_at": "2024-07-11T08:30:27.000000Z",
        "updated_at": "2024-07-11T08:30:27.000000Z"
      }
    },
    {
      "id": 10,
      "task_id": 25,
      "user_id": 31,
      "body": " We're working through it and expect to be back on track by tomorrow. No changes to the overall campaign goals",
      "created_at": "2 minutes ago",
      "updated_at": "2024-09-12T06:18:54.000000Z",
      "user": {
        "id": 31,
        "organization_id": 1,
        "name": "Napoleon Gorczany",
        "email": "aurelio81@example.org",
        "role": "staff",
        "title": "Graphic Designer",
        "email_verified_at": "2024-07-11T08:30:27.000000Z",
        "deleted_at": null,
        "created_at": "2024-07-11T08:30:27.000000Z",
        "updated_at": "2024-07-11T08:30:27.000000Z"
      }
    },
    {
      "id": 11,
      "task_id": 25,
      "user_id": 31,
      "body": "This is font family",
      "created_at": "2 minutes ago",
      "updated_at": "2024-09-12T06:19:19.000000Z",
      "user": {
        "id": 31,
        "organization_id": 1,
        "name": "Mr. Rickie Hammes IV",
        "email": "yundt.kamille@example.org",
        "role": "staff",
        "title": "Manager",
        "email_verified_at": "2024-07-11T08:30:27.000000Z",
        "deleted_at": null,
        "created_at": "2024-07-11T08:30:27.000000Z",
        "updated_at": "2024-07-11T08:30:27.000000Z"
      }
    }
  ],
  "teams": [
    {
      "id": 1,
      "name": "Development Team",
      "organization_id": 1,
      "created_at": "2024-07-11T08:30:26.000000Z",
      "updated_at": "2024-07-11T08:30:26.000000Z",
      "deleted_at": null,
      "members": [
        {
          "id": 4,
          "organization_id": 1,
          "name": "Napoleon Gorczany",
          "email": "aurelio81@example.org",
          "role": "staff",
          "title": "Graphic Designer",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 4
          }
        },
        {
          "id": 5,
          "organization_id": 1,
          "name": "Mrs. Shany Dibbert",
          "email": "fmarks@example.net",
          "role": "staff",
          "title": "Brand Artist",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 5
          }
        },
        {
          "id": 8,
          "organization_id": 1,
          "name": "Mr. Rickie Hammes IV",
          "email": "yundt.kamille@example.org",
          "role": "staff",
          "title": "Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 8
          }
        },
        {
          "id": 16,
          "organization_id": 1,
          "name": "Amanda Hahn",
          "email": "camila.bayer@example.net",
          "role": "staff",
          "title": "Campaign Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 16
          }
        },
        {
          "id": 18,
          "organization_id": 1,
          "name": "Miss Ellen Hoppe V",
          "email": "mortimer.boyle@example.org",
          "role": "staff",
          "title": "Graphic Designer",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 18
          }
        },
        {
          "id": 19,
          "organization_id": 1,
          "name": "Dr. Paige Rau",
          "email": "schmeler.lia@example.org",
          "role": "staff",
          "title": "Brand Artist",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 19
          }
        },
        {
          "id": 21,
          "organization_id": 1,
          "name": "Prof. Glennie Yost IV",
          "email": "zackery26@example.com",
          "role": "staff",
          "title": "Marketing Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 21
          }
        },
        {
          "id": 22,
          "organization_id": 1,
          "name": "Matilde Satterfield",
          "email": "robel.nyasia@example.net",
          "role": "staff",
          "title": "Campaign Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 22
          }
        },
        {
          "id": 25,
          "organization_id": 1,
          "name": "Marianna Kris",
          "email": "tremblay.zane@example.net",
          "role": "staff",
          "title": "Marketing Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 25
          }
        },
        {
          "id": 26,
          "organization_id": 1,
          "name": "Prof. Laurie Senger V",
          "email": "tessie.nienow@example.org",
          "role": "staff",
          "title": "Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 26
          }
        },
        {
          "id": 30,
          "organization_id": 1,
          "name": "Dasia Stroman",
          "email": "keon96@example.net",
          "role": "staff",
          "title": "Brand Artist",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 30
          }
        },
        {
          "id": 31,
          "organization_id": 1,
          "name": "Json Born",
          "email": "owner@acme.com",
          "role": "owner",
          "title": "Brand Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 1,
            "user_id": 31
          }
        }
      ]
    },
    {
      "id": 2,
      "name": "Email Marketing Team",
      "organization_id": 1,
      "created_at": "2024-07-11T08:30:26.000000Z",
      "updated_at": "2024-07-11T08:30:26.000000Z",
      "deleted_at": null,
      "members": [
        {
          "id": 3,
          "organization_id": 1,
          "name": "Angela Satterfield",
          "email": "spencer.shana@example.com",
          "role": "staff",
          "title": "Campaign Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 2,
            "user_id": 3
          }
        },
        {
          "id": 10,
          "organization_id": 1,
          "name": "Mrs. Molly Rice PhD",
          "email": "elta.rodriguez@example.com",
          "role": "staff",
          "title": "Graphic Designer",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 2,
            "user_id": 10
          }
        },
        {
          "id": 12,
          "organization_id": 1,
          "name": "Luigi Schuster",
          "email": "murray.cyrus@example.com",
          "role": "staff",
          "title": "Brand Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 2,
            "user_id": 12
          }
        },
        {
          "id": 17,
          "organization_id": 1,
          "name": "Josiane Schiller",
          "email": "jacobs.courtney@example.org",
          "role": "staff",
          "title": "Brand Artist",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 2,
            "user_id": 17
          }
        },
        {
          "id": 24,
          "organization_id": 1,
          "name": "Ms. Verlie Muller V",
          "email": "braxton75@example.com",
          "role": "staff",
          "title": "Product Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 2,
            "user_id": 24
          }
        }
      ]
    },
    {
      "id": 3,
      "name": "Brand Loyalty Team",
      "organization_id": 1,
      "created_at": "2024-07-11T08:30:26.000000Z",
      "updated_at": "2024-07-11T08:30:26.000000Z",
      "deleted_at": null,
      "members": [
        {
          "id": 1,
          "organization_id": 1,
          "name": "Dayana Blanda II",
          "email": "harley28@example.org",
          "role": "staff",
          "title": "Brand Manager",
          "email_verified_at": "2024-07-11T08:30:26.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 1
          }
        },
        {
          "id": 2,
          "organization_id": 1,
          "name": "Antone Bogisich",
          "email": "ernie.howe@example.com",
          "role": "staff",
          "title": "Campaign Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 2
          }
        },
        {
          "id": 6,
          "organization_id": 1,
          "name": "Dr. Lukas Veum Jr.",
          "email": "collins.randi@example.net",
          "role": "staff",
          "title": "Brand Artist",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 6
          }
        },
        {
          "id": 7,
          "organization_id": 1,
          "name": "Maximo Kuhic IV",
          "email": "ephraim15@example.com",
          "role": "staff",
          "title": "Associate",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 7
          }
        },
        {
          "id": 9,
          "organization_id": 1,
          "name": "Savannah Beer",
          "email": "freeman00@example.com",
          "role": "staff",
          "title": "Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 9
          }
        },
        {
          "id": 11,
          "organization_id": 1,
          "name": "Tavares Breitenberg",
          "email": "susan12@example.net",
          "role": "staff",
          "title": "Software Developer",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 11
          }
        },
        {
          "id": 13,
          "organization_id": 1,
          "name": "Alice Mertz",
          "email": "terry.weber@example.com",
          "role": "staff",
          "title": "Campaign Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 13
          }
        },
        {
          "id": 14,
          "organization_id": 1,
          "name": "Alexzander Kunde",
          "email": "lelah.ziemann@example.com",
          "role": "staff",
          "title": "Graphic Designer",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 14
          }
        },
        {
          "id": 15,
          "organization_id": 1,
          "name": "Jermain Kerluke III",
          "email": "eric.sauer@example.com",
          "role": "staff",
          "title": "Associate",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 15
          }
        },
        {
          "id": 20,
          "organization_id": 1,
          "name": "Kavon Johnston",
          "email": "yesenia.klocko@example.com",
          "role": "staff",
          "title": "Campaign Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 20
          }
        },
        {
          "id": 23,
          "organization_id": 1,
          "name": "Michaela Von",
          "email": "jazmyn.oberbrunner@example.com",
          "role": "staff",
          "title": "Associate",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 23
          }
        },
        {
          "id": 27,
          "organization_id": 1,
          "name": "Warren Rippin",
          "email": "ctowne@example.net",
          "role": "staff",
          "title": "Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 27
          }
        },
        {
          "id": 28,
          "organization_id": 1,
          "name": "Hassan Smitham",
          "email": "oreilly.justyn@example.com",
          "role": "staff",
          "title": "Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 28
          }
        },
        {
          "id": 29,
          "organization_id": 1,
          "name": "Saul West",
          "email": "arnold35@example.org",
          "role": "staff",
          "title": "Manager",
          "email_verified_at": "2024-07-11T08:30:27.000000Z",
          "deleted_at": null,
          "created_at": "2024-07-11T08:30:27.000000Z",
          "updated_at": "2024-07-11T08:30:27.000000Z",
          "pivot": {
            "team_id": 3,
            "user_id": 29
          }
        }
      ]
    }
  ],
  "currentUser": {
    "id": 31,
    "organization_id": 1,
    "name": "Json Born",
    "email": "owner@acme.com",
    "role": "owner",
    "title": "Brand Manager",
    "email_verified_at": "2024-07-11T08:30:27.000000Z",
    "deleted_at": null,
    "created_at": "2024-07-11T08:30:27.000000Z",
    "updated_at": "2024-07-11T08:30:27.000000Z",
    "organization": {
      "id": 1,
      "name": "Kuhn, Schuster and Rempel",
      "address": "4846 Mario Circles",
      "map_link": "http://strosin.net/quis-eum-repellendus-sint-eos-est-nihil",
      "created_at": "2024-07-11T08:30:26.000000Z",
      "updated_at": "2024-07-11T08:30:26.000000Z",
      "deleted_at": null
    }
  }
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

const TaskDetail: React.FC<TaskstepProps> = ({ openTaskValue, onCloseTask }) => {

  const { selectedTask, setSelectedTask, openTask, setOpenTask, selectedTaskId, setSelectedTaskId } = useContext(CampaignContext);

  const ref = useRef<any>(null);

  const [isElement, setIsOpen] = useState();
  const [taskData, setTaskData] = useState(selectedTask)
  const [taskCommentData, setTaskCommentData] = useState(taskFull.comments)

  const [isTeamEditMode, setIsTeamEditMode] = useState<boolean>(false);
  const [isDateEditMode, setIsDateEditMode] = useState<boolean>(false);
  const [avatarBg, setAvatarBg] = useState<any>();
  const [replyTxt, setReplyTxt] = React.useState("");


  useEffect(() => {
    setTaskData(selectedTask)
    // getRandomColor(taskData.assignee_id ? selectedTask.assignee.name : 'Unassigned') 
    // console.log(taskFull)
    stringToColor(taskData.assignee_id ? selectedTask.assignee.name : 'Unassigned')
  }, [selectedTaskId, openTaskValue]);
  const handleTeamEditClick = () => {
    setIsTeamEditMode(!isTeamEditMode);
    setIsDateEditMode(false)

  }
  const handleDateEditClick = () => {
    setIsTeamEditMode(false);

    setIsDateEditMode(!isDateEditMode);
  }
  const handleSaveClick = () => {
    setIsTeamEditMode(false);
    setIsDateEditMode(false)

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.name, e.target.value, e)

    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
  };
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement> | any) => {
    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }

    const files = event.target.files;
    const formData = new FormData();

    console.log(files)
    let filesArray: any = []
    for (let file of Array.from(files)) {
      filesArray.push(file)
      formData.append('files', filesArray);
    }
    console.log(formData)
    // const file = event.target.files[0];
    // if (!file) return;

    // const formData = new FormData();
    // formData.append('file', file);

  }
  function stringToColor(name: any) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
    setAvatarBg(color)
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (!ref.current?.contains(event.target)) {
        // console.log("Outside Clicked. " ,event);
        setIsTeamEditMode(false);
        setIsDateEditMode(false)
      }

    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div>
      <CardBox>

        <Drawer
          open={openTaskValue}
          onClose={onCloseTask}
          className="p-5 w-2/6 ]"
          position="right"
        >

          <div className="w-full">
            <div className="flex justify-between flex-wrap items-center pt-4 px-6">
              <h5 className="card-title w-full">{taskData.name}</h5>
              <p className="text-darklink text-sm mb-2">Social Media Marketing </p>

            </div>



            <SimpleBar className="max-h-[80vh] h-[calc(100vh_-_100px)]">
              <div className="w-full ">
                <div className="grid grid-cols-12 gap-5 mt-1 px-6">
                  <div className="col-span-12">
                    <h5 className="font-medium mb-0.5">
                      {taskData.description}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="py-4 mt-3 mb-1 ">

                <div>
                  <div className="px-6">
                    <div className="grid grid-cols-7 gap-4 mt-2 taskDetailcardsivs">


                      <div className="col-span-3">
                        <p className="text-darklink text-sm mb-1">Assigned To </p>
                        <Tooltip content={"Click to assigne"} placement="top">



                          <h5 className="font-normal mb-0.5 cursor-pointer" onClick={handleTeamEditClick}>
                            {/* {taskData.assignee_id ? taskData.assignee.name : 'Unassigned'} */}
                            <div className="flex items-center font-medium dark:text-white">
                              <Avatar style={{ backgroundColor: `${avatarBg}` }} className="rounded-full bg-transparent avatar-no-bg mr-2" placeholderInitials={taskData.assignee_id ? taskData.assignee.name.charAt(0) : 'U'} size="xs" />
                              <div className="text-ld">{taskData.assignee_id ? taskData.assignee.name : 'Unassigned'} </div>
                            </div>

                          </h5>
                        </Tooltip>

                      </div>
                      <div className="col-span-2">
                        <p className="text-darklink text-sm mb-1">Due date</p>
                        <Tooltip content={"Click to Change the date"} placement="top">

                          {/* hover:btn-circle-hover hover:w-auto */}
                          <h5 className="font-normal mb-0.5 captalize cursor-pointer" onClick={handleDateEditClick}>
                            {/* {taskData.end} */}
                            {format(new Date(taskData.end), "E, MMM d")}

                          </h5>
                        </Tooltip>
                      </div>
                      <div className="col-span-1">
                        <Tooltip content={"Click to edit the status"} placement="right">
                          <p className="text-darklink text-sm mb-1">Status</p>
                          <h5 className="font-normal mb-0.5 capitalize">
                            <Dropdown label={<span className="capitalize"> {taskData.status} </span>} inline className="status-cusom" >
                              <Dropdown.Item icon={HiViewGrid}>UnAssigned</Dropdown.Item>
                              <Dropdown.Item icon={HiCog}>Assigned</Dropdown.Item>
                              <Dropdown.Item icon={HiCurrencyDollar}>On Progress</Dropdown.Item>
                              <Dropdown.Item icon={HiCurrencyDollar}>Delayed</Dropdown.Item>
                              <Dropdown.Item icon={HiCurrencyDollar}>Onhold</Dropdown.Item>
                              <Dropdown.Item icon={HiCurrencyDollar}>Completed</Dropdown.Item>
                              <Dropdown.Divider />

                            </Dropdown>
                            {/* {format(new Date(taskData.end), "E, MMM d")}  */}

                          </h5>
                        </Tooltip>
                      </div>



                      <div className="col-span-7 relative" ref={ref}>
                        {isDateEditMode &&
                          <div className="absolute top-0 left-0 right-0 bg-muted shadow p-3 border">
                            <Datepicker onChange={handleChange}
                              className="form-rounded-md bg-white" />

                          </div>}
                        {isTeamEditMode &&
                          <div className="absolute top-0 left-0 right-0 bg-muted shadow p-3 border">
                            <TeamSelect items={teamsData} selected={taskData?.assignee && taskData.assignee} />


                          </div>}

                      </div>

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
                  <div className="px-6 mt-6">
                    <div className="rounded-tw py-[8px] flex justify-between items-center mt-2">
                      <div className="w-4/4 flex gap-3 items-center">
                        {/* <Icon
                          icon="solar:star-line-duotone"
                          height={24}
                          className="text-primary dark:text-primary"
                        //  className="h-10 w-10 flex items-center justify-center bg-primary text-white rounded-full"
                        /> */}
                        <IconCubePlus size={26} className="text-primary dark:text-primary" />
                        <p className="border border-primary p-2 rounded text-sm text-darklink truncate line-clamp-1 text-wrap w-[calc(100%_-_60px)]">
                          {taskData?.dependencies}
                        </p>
                      </div>

                    </div>
                    <div className="rounded-tw py-[8px] flex justify-between items-center mt-2">
                      <div className="w-4/4 flex gap-3 items-center">
                        {/* <Icon
                          icon="solar:plain-2-line-duotone"
                          height={24}
                          className="text-primary dark:text-primary"
                        //  className="h-10 w-10 flex items-center justify-center bg-primary text-white rounded-full"
                        /> */}
                        <IconInfoTriangle size={26} className="text-primary dark:text-primary" />

                        <p className="border border-primary p-2 rounded text-sm text-darklink truncate line-clamp-1 text-wrap w-[calc(100%_-_60px)]">
                          {taskData?.pitfalls}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 mt-0">
                <div className="px-6">

                  <div className="mt-4">
                    <div className="flex gap-3 items-center">
                      <h5 className="text-base">Comments</h5> <Link href="#commentbox" >Post Comment</Link>
                      <div className="h-8 w-8 rounded-full bg-lightprimary dark:bg-lightprimary flex items-center justify-center text-primary font-bold">
                        {taskCommentData?.length || 0}
                      </div>
                    </div>
                    <div>
                      {taskCommentData?.map((comment: any) => {
                        return (
                          <Comment key={comment.id} comment={comment} />
                        );
                      })}
                    </div>
                  </div>
                  {/* <CardBox>

            <h5 className="text-sm mb-2 mt-3" id="commentbox">Post Comments</h5>
            <Textarea
              rows={2}
              value={replyTxt}
              className="form-control-textarea"
              onChange={(e) => setReplyTxt(e.target.value)}
            ></Textarea>
            <Button color={"primary"} size='sm' className="w-fit mt-3">
              Post Comment
            </Button> 
</CardBox> */}
                  <CardBox className="p-0">
                    <h5 className="text-sm mb-1 mt-4" id="commentbox">Post Comments</h5>
                    <Textarea className="form-control-textarea rounded-sm" value={replyTxt} rows={3} placeholder="Share your comment" onChange={(e) => setReplyTxt(e.target.value)} />
                    <div className="flex gap-5 mt-1">
                      <div className="flex items-center gap-3 cursor-pointer text-ld font-medium text-primary-ld">

                        <div className="mb-0 block flex items-center">

                          <Label htmlFor="dropzone-file"
                            className="btn-circle p-0 bg-primary text-white cursor-pointer"

                          >
                            <Icon icon="solar:gallery-outline" height="16" />
                            <FileInput
                              id="dropzone-file"
                              onChange={handleFileUpload}
                              multiple={true}

                              className="hidden"
                            // helperText="A profile picture is useful to confirm your are logged into your account"
                            />
                          </Label>
                          {/* <span className="ml-2"> Upload </span> */}
                        </div>

                        {/*           
            <Button  className="btn-circle p-0" color={"primary"} >
              <Icon icon="solar:gallery-outline" height="14" />
            Attachment
            </Button> */}

                      </div>

                      <div className="flex items-center gap-3 cursor-pointer text-ld font-medium text-primary-ld">
                        <Button className="btn-circle p-0" color={"secondary"}>
                          <Icon icon="solar:book-outline" height="14" />
                        </Button>
                        Files
                      </div>
                      <Button className="ms-auto" size='sm' color={'primary'}>Comment</Button>
                    </div>
                  </CardBox>
                </div>
              </div>
            </SimpleBar>

          </div>

        </Drawer>
      </CardBox>

    </div>
  );
};

export default TaskDetail;
