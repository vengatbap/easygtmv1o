"use client";
import { useRouter } from 'next/navigation';
import { TicketType } from '@/app/(admin)/types/tasks/task';
import { Avatar, Badge, Button, Dropdown, TextInput, Tooltip } from 'flowbite-react';
import { format } from 'date-fns';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useContext, useState, useEffect } from 'react';
import { CampaignContext } from "@/app/context/campaignContext/index";
import { useParams } from "next/navigation";
import { CampaignDataType } from '@/app/(admin)/types/campaigns/campaign';
import TaskDetail from "@/app/(admin)/campaigns/components/TaskDetail";
import CardBox from '@/app/components/CardBox';
import { HiOutlineDotsVertical } from "react-icons/hi";
import Link from 'next/link';

const tasksData: TicketType[] = [
    {
        Id: 1,
        ticketTitle: 'Sed ut perspiciatis unde omnis iste',
        ticketDescription:
            'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
        Status: 'Closed',
        Label: 'error',
        thumb: "/images/profile/user-10.jpg",
        AgentName: 'Liam',
        // Date: chance.date(),
        deleted: false,
    },
    {
        Id: 2,
        ticketTitle: 'Consequuntur magni dolores eos qui ratione',
        ticketDescription:
            'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
        Status: 'Pending',
        Label: 'warning',
        thumb: "/images/profile/user-2.jpg",
        AgentName: 'Steve',
        // Date: chance.date(),
        deleted: false,
    },
    {
        Id: 3,
        ticketTitle: 'Exercitationem ullam corporis',
        ticketDescription:
            'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
        Status: 'Open',
        Label: 'success',
        thumb: "/images/profile/user-3.jpg",
        AgentName: 'Jack',
        // Date: chance.date(),
        deleted: false,
    },
    {
        Id: 4,
        ticketTitle: 'Sed ut perspiciatis unde omnis iste',
        ticketDescription:
            'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
        Status: 'Closed',
        Label: 'error',
        thumb: "/images/profile/user-4.jpg",
        AgentName: 'Steve',
        // Date: chance.date(),
        deleted: false,
    },
    {
        Id: 5,
        ticketTitle: 'Exercitationem ullam corporis',
        ticketDescription:
            'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
        Status: 'Closed',
        Label: 'error',
        thumb: "/images/profile/user-5.jpg",
        AgentName: 'Liam',
        // Date: chance.date(),
        deleted: false,
    },
    {
        Id: 6,
        ticketTitle: 'Consequuntur magni dolores eos qui ratione',
        ticketDescription:
            'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
        Status: 'Pending',
        Label: 'warning',
        thumb: "/images/profile/user-6.jpg",
        AgentName: 'Jack',
        // Date: chance.date(),
        deleted: false,
    },
    {
        Id: 7,
        ticketTitle: 'Sed ut perspiciatis unde omnis iste',
        ticketDescription:
            'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
        Status: 'Open',
        Label: 'success',
        thumb: "/images/profile/user-7.jpg",
        AgentName: 'Steve',
        // Date: chance.date(),
        deleted: false,
    },
    {
        Id: 8,
        ticketTitle: 'Consequuntur magni dolores eos qui ratione',
        ticketDescription:
            'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
        Status: 'Closed',
        Label: 'error',
        thumb: "/images/profile/user-8.jpg",
        AgentName: 'John',
        // Date: chance.date(),
        deleted: false,
    },
];
const tasklist: any = {
    "28": [
        {
            "id": 11,
            "campaign_id": 1,
            "goal_id": 3,
            "owner_id": 31,
            "assignee_id": 8,
            "name": "Match Audience Characteristics with Platform Features",
            "description": "Match Audience Characteristics with Platform Features: Align the characteristics of your target audience with the features and functionalities of each platform.\nExample: If your target audience prefers visual content and short videos, platforms like Instagram, TikTok, and Snapchat may be more suitable.",
            "step": 3,
            "dependencies": "Knowledge of platform features and functionalities, understanding of audience preferences",
            "pitfalls": "Not considering platform-specific features and limitations, neglecting to analyze audience engagement patterns",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-08T04:17:00.000000Z",
            "status": "delayed",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-19T23:56:57.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 8,
                "organization_id": 1,
                "name": "Mr. Rickie Hammes IV",
                "email": "yundt.kamille@example.org",
                "role": "staff",
                "title": "Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 25,
            "campaign_id": 1,
            "goal_id": 7,
            "owner_id": 31,
            "assignee_id": 18,
            "name": "Set Up Ad Campaigns",
            "description": "Define Campaign Objectives: Choose the objective of your ad campaign, such as brand awareness, website traffic, or lead generation.\nExample: If the objective is to drive website traffic, select the \"Traffic\" objective when setting up your ad campaign.\nDefine Target Audience: Specify the demographics, interests, and behaviors of your target audience to ensure your ads reach the right people.\nExample: If you're targeting young adults interested in fitness, you might specify the age range, location, and fitness-related interests in the audience targeting settings.",
            "step": 3,
            "dependencies": "Clear campaign objectives and target audience definition",
            "pitfalls": "Not properly defining campaign objectives or target audience, neglecting to monitor and optimize campaigns for performance",
            "output": "Social media advertising setup file",
            "tools": null,
            "start": null,
            "end": "2024-07-09T05:00:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-19T23:30:15.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 18,
                "organization_id": 1,
                "name": "Miss Ellen Hoppe V",
                "email": "mortimer.boyle@example.org",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 5,
            "campaign_id": 1,
            "goal_id": 2,
            "owner_id": 31,
            "assignee_id": 4,
            "name": "Gather Existing Data and Insights",
            "description": "Review Existing Customer Data: Analyze past campaign performance data, including customer demographics, purchase history, and engagement metrics. For example, analyze data from previous email marketing campaigns to identify which customer segments responded best to specific offers.",
            "step": 1,
            "dependencies": "Availability of historical customer data, access to relevant analytics tools",
            "pitfalls": "Neglecting to analyze all available data sources, relying solely on anecdotal evidence",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-09T11:12:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-19T05:43:12.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 4,
                "organization_id": 1,
                "name": "Napoleon Gorczany",
                "email": "aurelio81@example.org",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 6,
            "campaign_id": 1,
            "goal_id": 2,
            "owner_id": 31,
            "assignee_id": 8,
            "name": "Conduct Market Research",
            "description": "Analyze Market Trends: Research industry reports and analyze competitor strategies to understand market trends. For example, examine reports on the growth of the e-commerce industry and analyze competitor social media advertising strategies to identify emerging trends.",
            "step": 2,
            "dependencies": "Access to market research resources, understanding of industry trends",
            "pitfalls": "Failing to keep up with changing market dynamics, overlooking niche segments",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-10T10:59:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-20T05:29:47.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 8,
                "organization_id": 1,
                "name": "Mr. Rickie Hammes IV",
                "email": "yundt.kamille@example.org",
                "role": "staff",
                "title": "Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 45,
            "campaign_id": 1,
            "goal_id": 12,
            "owner_id": 31,
            "assignee_id": 8,
            "name": "Monitor and Analyze Campaign Performance",
            "description": "Regularly check campaign metrics (e.g., impressions, clicks, conversions, cost per conversion) to assess performance. Use this data to make informed adjustments to your campaign.\nExample: Use Google Ads reports to monitor the cost per click (CPC) and conversion rate. Adjust bids and targeting based on performance data.",
            "step": 3,
            "dependencies": "Data from tracking tools, regular monitoring schedule, understanding of performance metrics",
            "pitfalls": "Neglecting to regularly monitor and adjust the campaign based on performance data",
            "output": "Launch and monitor campaign file",
            "tools": null,
            "start": null,
            "end": "2024-07-11T05:40:00.000000Z",
            "status": "delayed",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-22T03:21:24.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 8,
                "organization_id": 1,
                "name": "Mr. Rickie Hammes IV",
                "email": "yundt.kamille@example.org",
                "role": "staff",
                "title": "Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
        }
    ],
    "29": [
        {
            "id": 58,
            "campaign_id": 2,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 22,
            "name": "Define the Objective of the Campaign",
            "description": "Identify the Purpose: Clearly define the primary goal or objective of the campaign, such as brand awareness, lead generation, or sales.",
            "step": 1,
            "dependencies": "Understanding of the business objectives, knowledge of the target audience",
            "pitfalls": "Failing to align campaign objectives with overall business goals",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-15T05:20:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:17:50.000000Z",
            "updated_at": "2024-07-19T23:50:43.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 22,
                "organization_id": 1,
                "name": "Matilde Satterfield",
                "email": "robel.nyasia@example.net",
                "role": "staff",
                "title": "Campaign Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 9,
            "campaign_id": 1,
            "goal_id": 3,
            "owner_id": 31,
            "assignee_id": 30,
            "name": "Identify Target Audience Characteristics",
            "description": "Define Audience Demographics: Determine the demographic characteristics of your target audience, such as age, gender, location, and income level.\nExample: If your target audience consists of young adults aged 18-24 who are interested in fashion and lifestyle, you would prioritize platforms like Instagram and TikTok.",
            "step": 1,
            "dependencies": "Understanding of business objectives, access to customer data",
            "pitfalls": "Clear understanding of target audience characteristics, alignment with overall marketing strategy",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-16T04:11:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-19T22:42:02.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 30,
                "organization_id": 1,
                "name": "Dasia Stroman",
                "email": "keon96@example.net",
                "role": "staff",
                "title": "Brand Artist",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 13,
            "campaign_id": 1,
            "goal_id": 4,
            "owner_id": 31,
            "assignee_id": 21,
            "name": "Define Campaign Objectives and Strategies",
            "description": "Define Campaign Objectives: Clearly outline the goals of the advertising campaign, such as increasing brand awareness, driving website traffic, or generating leads.\nExample: If the objective is to increase sales by 20% over the next quarter, the advertising budget should be aligned with this goal.",
            "step": 1,
            "dependencies": "Understanding of business objectives and target audience, alignment with overall marketing strategy",
            "pitfalls": "Setting unrealistic objectives or unclear goals, lack of alignment with overall marketing strategy",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-16T04:24:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-19T22:54:24.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 21,
                "organization_id": 1,
                "name": "Prof. Glennie Yost IV",
                "email": "zackery26@example.com",
                "role": "staff",
                "title": "Marketing Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 172,
            "campaign_id": 4,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 8,
            "name": "Define the Objective of the Campaign",
            "description": "Identify the Purpose: Clearly define the primary goal or objective of the campaign, such as brand awareness, lead generation, or sales.",
            "step": 1,
            "dependencies": "Understanding of the business objectives, knowledge of the target audience",
            "pitfalls": "Failing to align campaign objectives with overall business goals",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-16T15:34:00.000000Z",
            "status": "in progress",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:07:40.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 8,
                "organization_id": 1,
                "name": "Mr. Rickie Hammes IV",
                "email": "yundt.kamille@example.org",
                "role": "staff",
                "title": "Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 1,
            "campaign_id": 1,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 26,
            "name": "Define the Objective of the Campaign",
            "description": "Identify the Purpose: Clearly define the primary goal or objective of the campaign, such as brand awareness, lead generation, or sales.",
            "step": 1,
            "dependencies": "Understanding of the business objectives, knowledge of the target audience",
            "pitfalls": "Failing to align campaign objectives with overall business goals",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-17T00:35:00.000000Z",
            "status": "blocked",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-09-12T05:54:19.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 26,
                "organization_id": 1,
                "name": "Prof. Laurie Senger V",
                "email": "tessie.nienow@example.org",
                "role": "staff",
                "title": "Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 2,
            "campaign_id": 1,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 4,
            "name": "Establish Specific Goals",
            "description": "Set Specific Metrics: Determine specific metrics or key performance indicators (KPIs) that align with the campaign objective.",
            "step": 2,
            "dependencies": "Clear understanding of campaign objectives, availability of relevant data",
            "pitfalls": "Setting vague or overly ambitious goals that are difficult to measure",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-17T00:35:00.000000Z",
            "status": "delayed",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-17T17:16:11.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 4,
                "organization_id": 1,
                "name": "Napoleon Gorczany",
                "email": "aurelio81@example.org",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 3,
            "campaign_id": 1,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 2,
            "name": "Quantify Goals",
            "description": "Assign Numerical Targets: Quantify the goals by setting measurable targets for each selected metric.",
            "step": 3,
            "dependencies": "Access to historical campaign data, understanding of relevant metrics",
            "pitfalls": "Neglecting to consider past performance or industry benchmarks when setting targets",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-17T00:39:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-15T19:09:51.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 2,
                "organization_id": 1,
                "name": "Antone Bogisich",
                "email": "ernie.howe@example.com",
                "role": "staff",
                "title": "Campaign Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 628,
            "campaign_id": 12,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 19,
            "name": "Define the Objective of the Campaign",
            "description": "Identify the Purpose: Clearly define the primary goal or objective of the campaign, such as brand awareness, lead generation, or sales.",
            "step": 1,
            "dependencies": "Understanding of the business objectives, knowledge of the target audience",
            "pitfalls": "Failing to align campaign objectives with overall business goals",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-17T07:09:00.000000Z",
            "status": "new",
            "created_at": "2024-07-22T01:34:20.000000Z",
            "updated_at": "2024-07-22T01:40:05.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 19,
                "organization_id": 1,
                "name": "Dr. Paige Rau",
                "email": "schmeler.lia@example.org",
                "role": "staff",
                "title": "Brand Artist",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 173,
            "campaign_id": 4,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 4,
            "name": "Establish Specific Goals",
            "description": "Set Specific Metrics: Determine specific metrics or key performance indicators (KPIs) that align with the campaign objective.",
            "step": 2,
            "dependencies": "Clear understanding of campaign objectives, availability of relevant data",
            "pitfalls": "Setting vague or overly ambitious goals that are difficult to measure",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-17T15:35:00.000000Z",
            "status": "new",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:05:10.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 4,
                "organization_id": 1,
                "name": "Napoleon Gorczany",
                "email": "aurelio81@example.org",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 174,
            "campaign_id": 4,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 12,
            "name": "Quantify Goals",
            "description": "Assign Numerical Targets: Quantify the goals by setting measurable targets for each selected metric.",
            "step": 3,
            "dependencies": "Access to historical campaign data, understanding of relevant metrics",
            "pitfalls": "Neglecting to consider past performance or industry benchmarks when setting targets",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-17T15:35:00.000000Z",
            "status": "new",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:05:25.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 12,
                "organization_id": 1,
                "name": "Luigi Schuster",
                "email": "murray.cyrus@example.com",
                "role": "staff",
                "title": "Brand Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 176,
            "campaign_id": 4,
            "goal_id": 2,
            "owner_id": 31,
            "assignee_id": 5,
            "name": "Gather Existing Data and Insights",
            "description": "Review Existing Customer Data: Analyze past campaign performance data, including customer demographics, purchase history, and engagement metrics. For example, analyze data from previous email marketing campaigns to identify which customer segments responded best to specific offers.",
            "step": 1,
            "dependencies": "Availability of historical customer data, access to relevant analytics tools",
            "pitfalls": "Neglecting to analyze all available data sources, relying solely on anecdotal evidence",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-17T15:35:00.000000Z",
            "status": "delayed",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:12:43.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 5,
                "organization_id": 1,
                "name": "Mrs. Shany Dibbert",
                "email": "fmarks@example.net",
                "role": "staff",
                "title": "Brand Artist",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 178,
            "campaign_id": 4,
            "goal_id": 2,
            "owner_id": 31,
            "assignee_id": 17,
            "name": "Create Customer Personas",
            "description": "Develop Detailed Personas: Based on the gathered insights, create detailed customer personas. For example, create personas such as \"Tech-Savvy Millennials\" or \"Busy Working Parents\" with specific attributes, preferences, and pain points.",
            "step": 3,
            "dependencies": "Comprehensive analysis of gathered data, creativity in persona development",
            "pitfalls": "Making assumptions without data validation, creating too many personas or overly generalized ones",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-17T15:36:00.000000Z",
            "status": "new",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:06:03.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 17,
                "organization_id": 1,
                "name": "Josiane Schiller",
                "email": "jacobs.courtney@example.org",
                "role": "staff",
                "title": "Brand Artist",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 179,
            "campaign_id": 4,
            "goal_id": 2,
            "owner_id": 31,
            "assignee_id": 22,
            "name": "Validate and Refine Personas",
            "description": "Validate with Stakeholders: Share the personas with relevant stakeholders for feedback and validation. For example, present the personas to the sales team and gather input on whether the identified characteristics align with their experiences with customers. Adjust the personas based on feedback to ensure accuracy.",
            "step": 4,
            "dependencies": "Collaboration among team members and stakeholders, willingness to accept feedback",
            "pitfalls": "Not involving relevant stakeholders in the validation process, being resistant to feedback",
            "output": "Ideal customer definition process",
            "tools": null,
            "start": null,
            "end": "2024-07-17T15:36:00.000000Z",
            "status": "new",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:06:13.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 22,
                "organization_id": 1,
                "name": "Matilde Satterfield",
                "email": "robel.nyasia@example.net",
                "role": "staff",
                "title": "Campaign Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 181,
            "campaign_id": 4,
            "goal_id": 3,
            "owner_id": 31,
            "assignee_id": 22,
            "name": "Research Platform Demographics and User Behavior",
            "description": "Research Platform Demographics: Gather data on the demographics and user behavior of different social media platforms.\nExample: Research indicates that Facebook has a diverse user base across age groups, while platforms like Snapchat are popular among younger audiences.",
            "step": 2,
            "dependencies": "Availability of platform analytics data, knowledge of market research methods",
            "pitfalls": "Relying solely on platform demographics without considering user behavior, overlooking emerging platforms",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-17T15:36:00.000000Z",
            "status": "new",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:06:43.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 22,
                "organization_id": 1,
                "name": "Matilde Satterfield",
                "email": "robel.nyasia@example.net",
                "role": "staff",
                "title": "Campaign Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 182,
            "campaign_id": 4,
            "goal_id": 3,
            "owner_id": 31,
            "assignee_id": 5,
            "name": "Match Audience Characteristics with Platform Features",
            "description": "Match Audience Characteristics with Platform Features: Align the characteristics of your target audience with the features and functionalities of each platform.\nExample: If your target audience prefers visual content and short videos, platforms like Instagram, TikTok, and Snapchat may be more suitable.",
            "step": 3,
            "dependencies": "Knowledge of platform features and functionalities, understanding of audience preferences",
            "pitfalls": "Not considering platform-specific features and limitations, neglecting to analyze audience engagement patterns",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-17T15:36:00.000000Z",
            "status": "new",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:06:51.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 5,
                "organization_id": 1,
                "name": "Mrs. Shany Dibbert",
                "email": "fmarks@example.net",
                "role": "staff",
                "title": "Brand Artist",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 183,
            "campaign_id": 4,
            "goal_id": 3,
            "owner_id": 31,
            "assignee_id": 5,
            "name": "Prioritize Platforms Based on Relevance and Reach",
            "description": "Prioritize Platforms: Based on the alignment between audience characteristics and platform features, prioritize the platforms that offer the best opportunities to reach and engage with your target audience.\nExample: If your target audience is primarily professionals and decision-makers, LinkedIn may be a more effective platform for reaching them compared to platforms like Instagram or Snapchat.",
            "step": 4,
            "dependencies": "Clear understanding of target audience characteristics, alignment with overall marketing strategy",
            "pitfalls": "Overlooking niche platforms that may have high engagement rates within your target audience, neglecting to consider long-term platform trends",
            "output": "Platform selection process",
            "tools": null,
            "start": null,
            "end": "2024-07-17T15:36:00.000000Z",
            "status": "new",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:06:59.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 5,
                "organization_id": 1,
                "name": "Mrs. Shany Dibbert",
                "email": "fmarks@example.net",
                "role": "staff",
                "title": "Brand Artist",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 175,
            "campaign_id": 4,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 10,
            "name": "Ensure Relevance and Alignment",
            "description": "Ensure Relevance: Ensure that the goals are relevant to the overall business objectives and are achievable within the campaign's scope.",
            "step": 4,
            "dependencies": "Alignment with overall business strategy, collaboration among stakeholders",
            "pitfalls": "Lack of communication and alignment among team members and stakeholders",
            "output": "Campaign goal setting file",
            "tools": null,
            "start": null,
            "end": "2024-07-18T15:35:00.000000Z",
            "status": "new",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:05:35.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 10,
                "organization_id": 1,
                "name": "Mrs. Molly Rice PhD",
                "email": "elta.rodriguez@example.com",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 177,
            "campaign_id": 4,
            "goal_id": 2,
            "owner_id": 31,
            "assignee_id": 10,
            "name": "Conduct Market Research",
            "description": "Analyze Market Trends: Research industry reports and analyze competitor strategies to understand market trends. For example, examine reports on the growth of the e-commerce industry and analyze competitor social media advertising strategies to identify emerging trends.",
            "step": 2,
            "dependencies": "Access to market research resources, understanding of industry trends",
            "pitfalls": "Failing to keep up with changing market dynamics, overlooking niche segments",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-18T15:35:00.000000Z",
            "status": "new",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:05:56.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 10,
                "organization_id": 1,
                "name": "Mrs. Molly Rice PhD",
                "email": "elta.rodriguez@example.com",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 180,
            "campaign_id": 4,
            "goal_id": 3,
            "owner_id": 31,
            "assignee_id": 5,
            "name": "Identify Target Audience Characteristics",
            "description": "Define Audience Demographics: Determine the demographic characteristics of your target audience, such as age, gender, location, and income level.\nExample: If your target audience consists of young adults aged 18-24 who are interested in fashion and lifestyle, you would prioritize platforms like Instagram and TikTok.",
            "step": 1,
            "dependencies": "Understanding of business objectives, access to customer data",
            "pitfalls": "Clear understanding of target audience characteristics, alignment with overall marketing strategy",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-18T15:36:00.000000Z",
            "status": "new",
            "created_at": "2024-07-16T10:04:16.000000Z",
            "updated_at": "2024-07-16T10:06:35.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 5,
                "organization_id": 1,
                "name": "Mrs. Shany Dibbert",
                "email": "fmarks@example.net",
                "role": "staff",
                "title": "Brand Artist",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 37,
            "campaign_id": 1,
            "goal_id": 11,
            "owner_id": 31,
            "assignee_id": 4,
            "name": "Set Campaign Objectives and Goals",
            "description": "Begin by clearly defining what you want to achieve with your campaign. This could be increasing brand awareness, generating leads, driving sales, or promoting a specific product.\nExample: If you aim to increase sales by 20% within a month, set this as your primary goal.",
            "step": 1,
            "dependencies": "Market research, business objectives, target audience analysis",
            "pitfalls": "Failing to define clear, measurable objectives",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-19T21:25:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-19T15:55:20.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 4,
                "organization_id": 1,
                "name": "Napoleon Gorczany",
                "email": "aurelio81@example.org",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
        }
    ],
    "30": [
        {
            "id": 46,
            "campaign_id": 1,
            "goal_id": 13,
            "owner_id": 31,
            "assignee_id": 18,
            "name": "Analyze Campaign Data",
            "description": "Review performance metrics from your ad campaigns to identify areas for improvement. Look at metrics such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), and return on ad spend (ROAS).\nExample: Analyze Google Ads data to find that the ad campaign targeting females aged 25-34 has a higher CTR but lower conversion rate compared to males in the same age group.",
            "step": 1,
            "dependencies": "Access to campaign performance data, data analysis tools",
            "pitfalls": "Failing to analyze data regularly or thoroughly enough",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-23T08:47:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-22T03:18:03.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 18,
                "organization_id": 1,
                "name": "Miss Ellen Hoppe V",
                "email": "mortimer.boyle@example.org",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 629,
            "campaign_id": 12,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 5,
            "name": "Establish Specific Goals",
            "description": "Set Specific Metrics: Determine specific metrics or key performance indicators (KPIs) that align with the campaign objective.",
            "step": 2,
            "dependencies": "Clear understanding of campaign objectives, availability of relevant data",
            "pitfalls": "Setting vague or overly ambitious goals that are difficult to measure",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-07-26T07:11:00.000000Z",
            "status": "new",
            "created_at": "2024-07-22T01:34:20.000000Z",
            "updated_at": "2024-07-22T01:41:29.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 5,
                "organization_id": 1,
                "name": "Mrs. Shany Dibbert",
                "email": "fmarks@example.net",
                "role": "staff",
                "title": "Brand Artist",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
        }
    ],
    "31": [
        {
            "id": 4,
            "campaign_id": 1,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 10,
            "name": "Ensure Relevance and Alignment",
            "description": "Ensure Relevance: Ensure that the goals are relevant to the overall business objectives and are achievable within the campaign's scope.",
            "step": 4,
            "dependencies": "Alignment with overall business strategy, collaboration among stakeholders",
            "pitfalls": "Lack of communication and alignment among team members and stakeholders",
            "output": "Campaign goal setting file",
            "tools": null,
            "start": null,
            "end": "2024-07-31T00:39:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-15T19:09:59.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 10,
                "organization_id": 1,
                "name": "Mrs. Molly Rice PhD",
                "email": "elta.rodriguez@example.com",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
        }
    ],
    "33": [
        {
            "id": 8,
            "campaign_id": 1,
            "goal_id": 2,
            "owner_id": 31,
            "assignee_id": 18,
            "name": "Validate and Refine Personas",
            "description": "Validate with Stakeholders: Share the personas with relevant stakeholders for feedback and validation. For example, present the personas to the sales team and gather input on whether the identified characteristics align with their experiences with customers. Adjust the personas based on feedback to ensure accuracy.",
            "step": 4,
            "dependencies": "Collaboration among team members and stakeholders, willingness to accept feedback",
            "pitfalls": "Not involving relevant stakeholders in the validation process, being resistant to feedback",
            "output": "Ideal customer definition process",
            "tools": null,
            "start": null,
            "end": "2024-08-15T04:16:00.000000Z",
            "status": "new",
            "created_at": "2024-07-15T19:05:10.000000Z",
            "updated_at": "2024-07-21T22:46:59.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 18,
                "organization_id": 1,
                "name": "Miss Ellen Hoppe V",
                "email": "mortimer.boyle@example.org",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
        }
    ],
    "34": [
        {
            "id": 636,
            "campaign_id": 12,
            "goal_id": 3,
            "owner_id": 31,
            "assignee_id": 18,
            "name": "Identify Target Audience Characteristics",
            "description": "Define Audience Demographics: Determine the demographic characteristics of your target audience, such as age, gender, location, and income level.\nExample: If your target audience consists of young adults aged 18-24 who are interested in fashion and lifestyle, you would prioritize platforms like Instagram and TikTok.",
            "step": 1,
            "dependencies": "Understanding of business objectives, access to customer data",
            "pitfalls": "Clear understanding of target audience characteristics, alignment with overall marketing strategy",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-08-22T08:42:00.000000Z",
            "status": "new",
            "created_at": "2024-07-22T01:34:20.000000Z",
            "updated_at": "2024-07-22T03:12:33.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 18,
                "organization_id": 1,
                "name": "Miss Ellen Hoppe V",
                "email": "mortimer.boyle@example.org",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
        }
    ],
    "35": [
        {
            "id": 746,
            "campaign_id": 14,
            "goal_id": 2,
            "owner_id": 31,
            "assignee_id": 8,
            "name": "Gather Existing Data and Insights",
            "description": "Review Existing Customer Data: Analyze past campaign performance data, including customer demographics, purchase history, and engagement metrics. For example, analyze data from previous email marketing campaigns to identify which customer segments responded best to specific offers.",
            "step": 1,
            "dependencies": "Availability of historical customer data, access to relevant analytics tools",
            "pitfalls": "Neglecting to analyze all available data sources, relying solely on anecdotal evidence",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-08-30T10:53:00.000000Z",
            "status": "delayed",
            "created_at": "2024-08-01T05:20:49.000000Z",
            "updated_at": "2024-08-01T05:24:16.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 8,
                "organization_id": 1,
                "name": "Mr. Rickie Hammes IV",
                "email": "yundt.kamille@example.org",
                "role": "staff",
                "title": "Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 742,
            "campaign_id": 14,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 16,
            "name": "Define the Objective of the Campaign",
            "description": "Identify the Purpose: Clearly define the primary goal or objective of the campaign, such as brand awareness, lead generation, or sales.",
            "step": 1,
            "dependencies": "Understanding of the business objectives, knowledge of the target audience",
            "pitfalls": "Failing to align campaign objectives with overall business goals",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-08-31T22:51:00.000000Z",
            "status": "new",
            "created_at": "2024-08-01T05:20:49.000000Z",
            "updated_at": "2024-08-01T05:21:25.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 16,
                "organization_id": 1,
                "name": "Amanda Hahn",
                "email": "camila.bayer@example.net",
                "role": "staff",
                "title": "Campaign Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
        }
    ],
    "37": [
        {
            "id": 650,
            "campaign_id": 12,
            "goal_id": 7,
            "owner_id": 31,
            "assignee_id": 19,
            "name": "Choose Social Media Platforms",
            "description": "Identify Platforms: Determine which social media platforms align best with your target audience and advertising goals.\nExample: If your target audience is primarily professionals, consider setting up advertising accounts on LinkedIn. If you're targeting a younger demographic, platforms like Instagram and Snapchat might be more suitable.",
            "step": 1,
            "dependencies": "Understanding of target audience and advertising goals",
            "pitfalls": "Failing to research audience demographics and platform usage statistics",
            "output": null,
            "tools": null,
            "start": null,
            "end": null,
            "status": "delayed",
            "created_at": "2024-07-22T01:34:20.000000Z",
            "updated_at": "2024-07-22T03:15:40.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 19,
                "organization_id": 1,
                "name": "Dr. Paige Rau",
                "email": "schmeler.lia@example.org",
                "role": "staff",
                "title": "Brand Artist",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 801,
            "campaign_id": 15,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 26,
            "name": "Quantify Goals",
            "description": "Assign Numerical Targets: Quantify the goals by setting measurable targets for each selected metric.",
            "step": 3,
            "dependencies": "Access to historical campaign data, understanding of relevant metrics",
            "pitfalls": "Neglecting to consider past performance or industry benchmarks when setting targets",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-09-14T11:30:00.000000Z",
            "status": "new",
            "created_at": "2024-09-12T05:58:47.000000Z",
            "updated_at": "2024-09-12T06:00:31.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 26,
                "organization_id": 1,
                "name": "Prof. Laurie Senger V",
                "email": "tessie.nienow@example.org",
                "role": "staff",
                "title": "Manager",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
        }
    ],
    "38": [
        {
            "id": 799,
            "campaign_id": 15,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 4,
            "name": "Define the Objective of the Campaign",
            "description": "Identify the Purpose: Clearly define the primary goal or objective of the campaign, such as brand awareness, lead generation, or sales.",
            "step": 1,
            "dependencies": "Understanding of the business objectives, knowledge of the target audience",
            "pitfalls": "Failing to align campaign objectives with overall business goals",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-09-18T11:30:00.000000Z",
            "status": "new",
            "created_at": "2024-09-12T05:58:47.000000Z",
            "updated_at": "2024-09-12T05:59:11.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 4,
                "organization_id": 1,
                "name": "Napoleon Gorczany",
                "email": "aurelio81@example.org",
                "role": "staff",
                "title": "Graphic Designer",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
            "id": 800,
            "campaign_id": 15,
            "goal_id": 1,
            "owner_id": 31,
            "assignee_id": 5,
            "name": "Establish Specific Goals",
            "description": "Set Specific Metrics: Determine specific metrics or key performance indicators (KPIs) that align with the campaign objective.",
            "step": 2,
            "dependencies": "Clear understanding of campaign objectives, availability of relevant data",
            "pitfalls": "Setting vague or overly ambitious goals that are difficult to measure",
            "output": null,
            "tools": null,
            "start": null,
            "end": "2024-09-20T11:31:00.000000Z",
            "status": "new",
            "created_at": "2024-09-12T05:58:47.000000Z",
            "updated_at": "2024-09-12T05:59:25.000000Z",
            "deleted_at": null,
            "assignee": {
                "id": 5,
                "organization_id": 1,
                "name": "Mrs. Shany Dibbert",
                "email": "fmarks@example.net",
                "role": "staff",
                "title": "Brand Artist",
                "email_verified_at": "2024-07-11T08:30:27.000000Z",
                "deleted_at": null,
                "created_at": "2024-07-11T08:30:27.000000Z",
                "updated_at": "2024-07-11T08:30:27.000000Z"
            },
            "owner": {
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
        }
    ]
}
const TaskbyWeek = () => {

    const { selectedTask, setSelectedTask, openTask, setOpenTask, selectedTaskId, setSelectedTaskId } = useContext(CampaignContext);
    const [selectedCTask, setSelectedCTask] = useState({});
    const [selectedCampaign, setSelectedCampaign] = useState<CampaignDataType>();
    const [selectedCTaskId, setSelectedCTaskId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        console.log(selectedTask, selectedTaskId, openTask, "Contesxt")
    }, [selectedTaskId, openTask]);

    const closeTask = () => {
        setSelectedTaskId(null)
        setSelectedTask({});
        setOpenTask(false)
    };
    const handleSelectTask = (task: any) => {
        setSelectedTaskId(task.id)
        setSelectedTask(task);
        setOpenTask(true)
    };

    const [tasks, setTasks] = useState<TicketType[]>([]);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const router = useRouter();

    // Fetch tasks from the API when the component mounts using useEffect
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                // const response = await axios.get('/api/data/ticket/TicketData');
                setTasks(tasksData);
            } catch (err) {
                console.error('Error fetching tickets:', err);
            }
        };
        fetchTasks();
    }, []);

    const taskBadge = (ticket: TicketType) => {
        return ticket.Status === "Open"
            ? "success"
            : ticket.Status === "Closed"
                ? "error"
                : ticket.Status === "Pending"
                    ? "warning"
                    : ticket.Status === "Moderate"
                        ? "primary"
                        : "primary";
    };

    return (
        <>


            <div className="my-6 mt-0">
                {/* <div className="flex justify-between items-center mb-4">

          <TextInput
            type="text"
            sizing="md"
            className="form-control sm:max-w-60 max-w-full w-full"
            // onChange={(e) => searchTickets(e.target.value)}
            placeholder="Search"
            icon={() => <Icon icon="solar:magnifer-line-duotone" height={18} />}
          />
          <Button
            onClick={() => router.push('/campaigns/create')}
            className="bg-primary hover:bg-lightprimary hover:text-primary rounded-lg"
          >
            Create New Task
          </Button>
        </div> */}

                <div>

                    <div className="overflow-x-auto">

                        {Object.keys(tasklist).map((week: any) => (
                            <div key={week} className="grid grid-cols-12 gap-4 border">
                                <div className="grid-col col-span-1 border-r p-4">
                                    <h2>Weeks {week}</h2>

                                </div>
                                <div className="grid-col col-span-11 ">
                                    {tasklist[week].map((task: any) => (
                                        <div
                                            key={task.id}
                                            style={{

                                            }}
                                            className='flex items-center w-full border-b  cursor-pointer hover:bg-mute'
                                            onClick={() => { handleSelectTask(task); }}
                                        >
                                            <div className="grid grid-cols-8 gap-15 justify-between w-full items-center p-4">
                                                <div className="grid-col col-span-3" >
                                                    <h6 className="text-base truncate line-clamp-1">{task.name}</h6>
                                                    <p className="text-sm text-darklink truncate line-clamp-1 text-wrap sm:max-w-56">
                                                        {task.description}
                                                    </p>
                                                </div>
                                                <div className="grid-col col-span-3" >
                                                    <div className="flex items-center gap-3">
                                                        <div>
                                                            <Avatar
                                                                // img={ticket.thumb}
                                                                // alt={ticket.AgentName}
                                                                rounded
                                                                size='sm'
                                                            />
                                                        </div>
                                                        <div>
                                                            <h6 className="text-sm text-medium"> {task.assignee.name} </h6>
                                                            <p>  {task.assignee.email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-col col-span-1">Due on {format(new Date(task.start), "E, MMM d")} </div>
                                                <div className="grid-col col-span-1 ml-auto">
                                                    <Badge
                                                        className={`bg-light${taskBadge(task)} dark:bg-dark${taskBadge(task)} text-${taskBadge(task)} capitalize`}

                                                    >
                                                        {task.status}
                                                    </Badge>

                                                </div>

                                            </div>



                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
                {openTask && <TaskDetail openTaskValue={openTask} onCloseTask={closeTask} />}
            </div>
        </>
    );
};

export default TaskbyWeek;

