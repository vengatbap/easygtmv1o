"use client";
import React, { useEffect, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import { Icon } from "@iconify/react";
import { uniqueId } from "lodash";
import { Accordion, Avatar } from "flowbite-react";
import CardBox from "@/app/components/CardBox";
import CampaignPhase from "./Goal";
import {
  Tabs,
  Badge,
  Button,
  HR,
  List,
  Textarea,

} from "flowbite-react";
import Image from "next/image";

// import BlogComment from "./BlogCommnets";
import { CampaignContext } from "@/app/context/campaignContext/index";
import { useParams } from "next/navigation";
import { CampaignDataType } from '@/app/(admin)/types/campaigns/campaign';
import TaskDetail from "./TaskDetail";

import { format } from "date-fns";

const campaignDetail =
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
  "status": "new",

  "phases": [
    {
      "id": 1,
      "name": "Planning",
      "template_id": 1,
      "goals": [
        {
          "id": 1,
          "template_id": 1,
          "phase_id": 1,
          "goalNumber": 1,
          "name": "Define Campaign Goals",
          "description": "Set specific and measurable goals for the campaign (e.g., brand awareness, lead generation, sales)",
          "inCharge": "Marketing Team",
          "tasks": [
            {
              "id": 1,
              "campaign_id": 1,
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
              "end": "2024-07-17T00:35:00.000000Z",
              "status": "blocked",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-19T18:19:15.000000Z",
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
              }
            },
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
              }
            }
          ]
        },
        {
          "id": 2,
          "template_id": 1,
          "phase_id": 1,
          "goalNumber": 2,
          "name": "Identify Target Audience",
          "description": "Research and define the ideal customer for the campaign",
          "inCharge": "Marketing Team",
          "tasks": [
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
              }
            },
            {
              "id": 7,
              "campaign_id": 1,
              "goal_id": 2,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Create Customer Personas",
              "description": "Develop Detailed Personas: Based on the gathered insights, create detailed customer personas. For example, create personas such as \"Tech-Savvy Millennials\" or \"Busy Working Parents\" with specific attributes, preferences, and pain points.",
              "step": 3,
              "dependencies": "Comprehensive analysis of gathered data, creativity in persona development",
              "pitfalls": "Making assumptions without data validation, creating too many personas or overly generalized ones",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
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
              }
            }
          ]
        },
        {
          "id": 3,
          "template_id": 1,
          "phase_id": 1,
          "goalNumber": 3,
          "name": "Choose Social Media Platforms",
          "description": "Select the most relevant platforms to reach the target audience",
          "inCharge": "Marketing Team",
          "tasks": [
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
              }
            },
            {
              "id": 10,
              "campaign_id": 1,
              "goal_id": 3,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Research Platform Demographics and User Behavior",
              "description": "Research Platform Demographics: Gather data on the demographics and user behavior of different social media platforms.\nExample: Research indicates that Facebook has a diverse user base across age groups, while platforms like Snapchat are popular among younger audiences.",
              "step": 2,
              "dependencies": "Availability of platform analytics data, knowledge of market research methods",
              "pitfalls": "Relying solely on platform demographics without considering user behavior, overlooking emerging platforms",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
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
              }
            },
            {
              "id": 12,
              "campaign_id": 1,
              "goal_id": 3,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Prioritize Platforms Based on Relevance and Reach",
              "description": "Prioritize Platforms: Based on the alignment between audience characteristics and platform features, prioritize the platforms that offer the best opportunities to reach and engage with your target audience.\nExample: If your target audience is primarily professionals and decision-makers, LinkedIn may be a more effective platform for reaching them compared to platforms like Instagram or Snapchat.",
              "step": 4,
              "dependencies": "Clear understanding of target audience characteristics, alignment with overall marketing strategy",
              "pitfalls": "Overlooking niche platforms that may have high engagement rates within your target audience, neglecting to consider long-term platform trends",
              "output": "Platform selection process",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        },
        {
          "id": 4,
          "template_id": 1,
          "phase_id": 1,
          "goalNumber": 4,
          "name": "Set Campaign Budget",
          "description": "Determine the total amount allocated for the advertising campaign",
          "inCharge": "Marketing Team",
          "tasks": [
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
              }
            },
            {
              "id": 14,
              "campaign_id": 1,
              "goal_id": 4,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Identify Advertising Channels and Tactics",
              "description": "Identify Advertising Channels: Determine which advertising channels and tactics will be utilized to achieve the campaign objectives.\nExample: If the target audience is primarily active on social media, allocate a portion of the budget for social media advertising on platforms like Facebook, Instagram, and LinkedIn.",
              "step": 2,
              "dependencies": "Knowledge of available advertising channels and their effectiveness, understanding of target audience behavior",
              "pitfalls": "Relying too heavily on one channel or tactic without diversifying, overlooking emerging or niche advertising opportunities",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 15,
              "campaign_id": 1,
              "goal_id": 4,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Estimate Costs for Each Channel and Tactic",
              "description": "Estimate Costs: Research and estimate the costs associated with each advertising channel and tactic, including ad placement fees, production costs, and agency fees.\nExample: Research the average cost-per-click (CPC) or cost-per-thousand-impressions (CPM) for each advertising platform and estimate the number of clicks or impressions needed to achieve campaign objectives.",
              "step": 3,
              "dependencies": "Access to industry data and cost estimates, knowledge of advertising budgeting techniques",
              "pitfalls": "Underestimating costs or failing to account for hidden expenses, not considering potential fluctuations in ad prices",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 16,
              "campaign_id": 1,
              "goal_id": 4,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Calculate Total Advertising Budget",
              "description": "Summarize Costs: Summarize the estimated costs for each advertising channel and tactic to calculate the total advertising budget required for the campaign.\nExample: If the estimated cost for social media advertising is $5,000 and the estimated cost for search engine marketing (SEM) is $3,000, the total advertising budget would be $8,000.",
              "step": 4,
              "dependencies": "Accuracy of cost estimates for each channel and tactic, adherence to campaign objectives and strategies",
              "pitfalls": "Failing to account for contingency funds or unexpected expenses, not revisiting and adjusting the budget as needed throughout the campaign",
              "output": "Advertising campaign budget",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Content Creation",
      "template_id": 1,
      "goals": [
        {
          "id": 5,
          "template_id": 1,
          "phase_id": 2,
          "goalNumber": 1,
          "name": "Develop Ad Creative",
          "description": "Design visuals, write copy, and create video content for the ads",
          "inCharge": "Creative Team",
          "tasks": [
            {
              "id": 17,
              "campaign_id": 1,
              "goal_id": 5,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Define Ad Objectives and Audience",
              "description": "Define Ad Objectives: Clearly outline the goals of the ad campaign, such as increasing brand awareness, driving website traffic, or generating leads.\nExample: If the objective is to increase sales for a new product, the ad visuals, copy, and video content should focus on highlighting the product's features and benefits.",
              "step": 1,
              "dependencies": "Clear understanding of business objectives, audience research data",
              "pitfalls": "Setting vague or unrealistic objectives, misunderstanding the target audience",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 18,
              "campaign_id": 1,
              "goal_id": 5,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Design Visuals and Write Copy",
              "description": "Design Visuals: Create eye-catching visuals that align with the ad objectives and resonate with the target audience.\nExample: If the target audience is young adults interested in fitness, design visuals that feature vibrant colors, energetic imagery, and fitness-related elements.\nWrite Copy: Craft compelling copy that communicates the key message of the ad and encourages action from the audience.\nExample: Write copy that highlights the product's unique selling points, such as \"Experience the ultimate workout with our innovative fitness equipment. Shop now for exclusive discounts!\"",
              "step": 2,
              "dependencies": "Creative vision, alignment with brand guidelines",
              "pitfalls": "Overcomplicating visuals or copy, failing to maintain brand consistency",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 19,
              "campaign_id": 1,
              "goal_id": 5,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Create Video Content",
              "description": "Create Video Content: Produce engaging video content that effectively communicates the ad message and captivates the audience.\nExample: Create a video showcasing the product in action, demonstrating its features and benefits, and including testimonials from satisfied customers.",
              "step": 3,
              "dependencies": "Access to necessary equipment and software, collaboration between designers and copywriters",
              "pitfalls": "Poor video quality, lack of storytelling or engaging content",
              "output": "Ad content creation process",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        },
        {
          "id": 6,
          "template_id": 1,
          "phase_id": 2,
          "goalNumber": 2,
          "name": "Develop Landing Pages (Optional)",
          "description": "Create targeted landing pages for ad clicks to convert visitors",
          "inCharge": "Web Development Team",
          "tasks": [
            {
              "id": 20,
              "campaign_id": 1,
              "goal_id": 6,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Identify Conversion Goals and Audience",
              "description": "Identify Conversion Goals: Determine the specific actions you want visitors to take on the landing page, such as making a purchase, signing up for a newsletter, or downloading a resource.\nExample: If the goal is to generate leads, the landing page should include a form for visitors to submit their contact information.\nUnderstand Audience Needs: Understand the needs, preferences, and pain points of your target audience to create a landing page that resonates with them.\nExample: If your target audience is interested in eco-friendly products, the landing page could emphasize the sustainability features of your offerings.",
              "step": 1,
              "dependencies": "Understanding of business objectives, access to audience data",
              "pitfalls": "Failing to align conversion goals with business objectives, misunderstanding audience needs",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 21,
              "campaign_id": 1,
              "goal_id": 6,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Design and Develop Landing Page",
              "description": "Design Layout and Visuals: Create a visually appealing layout that highlights key benefits and encourages action. Use compelling visuals, clear headlines, and concise copy to engage visitors.\nExample: Use contrasting colors to make call-to-action buttons stand out and draw attention to important information.\nDevelop Responsive Design: Ensure the landing page is optimized for various devices and screen sizes to provide a seamless experience for visitors.\nExample: Test the landing page on different devices, such as desktops, laptops, tablets, and smartphones, to ensure it displays correctly and is easy to navigate on all platforms.",
              "step": 2,
              "dependencies": "Creative vision, alignment with brand guidelines",
              "pitfalls": "Overcomplicating the design, neglecting mobile responsiveness",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 22,
              "campaign_id": 1,
              "goal_id": 6,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Implement Conversion Optimization Techniques",
              "description": "Include Clear Call-to-Action (CTA): Place a prominent and compelling CTA button above the fold to encourage visitors to take the desired action.\nExample: Use action-oriented language like \"Start Your Free Trial\" or \"Get Instant Access\" to prompt visitors to click.\nOptimize Form Fields: Keep the form fields to a minimum and only ask for essential information to reduce friction and increase conversions.\nExample: Instead of asking for multiple fields, such as name, email, phone number, and address, consider requesting only email address and first name.\nA/B Testing: Continuously test different elements of the landing page, such as headlines, CTA button colors, and form fields, to identify which variations perform best.\nExample: Create two versions of the landing page with different headline variations and track which version generates higher conversion rates.",
              "step": 3,
              "dependencies": "Knowledge of conversion optimization best practices, willingness to iterate and improve",
              "pitfalls": "Not conducting A/B testing, ignoring visitor feedback",
              "output": "Target landing page creation file",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Campaign Setup",
      "template_id": 1,
      "goals": [
        {
          "id": 7,
          "template_id": 1,
          "phase_id": 3,
          "goalNumber": 1,
          "name": "Create Ad Accounts",
          "description": "Set up advertising accounts on chosen social media platforms",
          "inCharge": "Marketing Team",
          "tasks": [
            {
              "id": 23,
              "campaign_id": 1,
              "goal_id": 7,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Choose Social Media Platforms",
              "description": "Identify Platforms: Determine which social media platforms align best with your target audience and advertising goals.\nExample: If your target audience is primarily professionals, consider setting up advertising accounts on LinkedIn. If you're targeting a younger demographic, platforms like Instagram and Snapchat might be more suitable.",
              "step": 1,
              "dependencies": "Understanding of target audience and advertising goals",
              "pitfalls": "Failing to research audience demographics and platform usage statistics",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 24,
              "campaign_id": 1,
              "goal_id": 7,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Create Advertising Accounts",
              "description": "Sign Up: Visit the advertising section of the chosen social media platform's website and sign up for an advertising account.\n    Example: Go to business.facebook.com to create an advertising account on Facebook, or ads.google.com to create an account for Google Ads.",
              "step": 2,
              "dependencies": "Access to business information (for account registration)",
              "pitfalls": "Providing inaccurate or incomplete business information during account setup",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
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
              }
            }
          ]
        },
        {
          "id": 8,
          "template_id": 1,
          "phase_id": 3,
          "goalNumber": 2,
          "name": "Design Ad Formats",
          "description": "Choose the ad format best suited for the campaign goals (e.g., image ads, video ads, carousel ads)",
          "inCharge": "Marketing Team",
          "tasks": [
            {
              "id": 26,
              "campaign_id": 1,
              "goal_id": 8,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Define Campaign Goals and Audience",
              "description": "Define Campaign Goals: Clearly outline what you want to achieve with your ad campaign, such as brand awareness, engagement, traffic, or conversions.\nExample: If your goal is to increase brand awareness, you might choose a format that maximizes reach and visual impact, like image ads or video ads.\nUnderstand Your Audience: Know your target audience's preferences, behaviors, and how they consume content on the chosen platform.\n    Example: If your audience prefers quick, engaging content, video ads might be more effective than carousel ads.",
              "step": 1,
              "dependencies": "Clear understanding of business objectives, access to audience insights",
              "pitfalls": "Neglecting to align ad format with specific campaign goals, misunderstanding audience behavior and preferences",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 27,
              "campaign_id": 1,
              "goal_id": 8,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Review Available Ad Formats",
              "description": "Explore Ad Formats: Research the different ad formats available on the platform, considering how each aligns with your campaign goals.\nExample: On Facebook, options include image ads, video ads, carousel ads, and slideshow ads. Choose based on what best showcases your product and captures your audience's attention.\n    Evaluate Suitability: Match the ad format to your campaign objectives and audience preferences.\n    Example: For an e-commerce campaign aimed at showcasing multiple products, a carousel ad might be ideal as it allows users to swipe through various items.",
              "step": 2,
              "dependencies": "Knowledge of platform-specific ad formats, access to platform documentation",
              "pitfalls": "Overlooking platform-specific nuances and features of different ad formats",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 28,
              "campaign_id": 1,
              "goal_id": 8,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Test and Optimize",
              "description": "A/B Testing: Test different ad formats to see which performs best with your audience.\nExample: Run both video and image ads and compare engagement metrics to determine which format drives more interaction.\nAnalyze and Optimize: Continuously monitor ad performance and optimize based on data.\nExample: If video ads are driving more clicks and engagement, allocate more budget towards them and refine the content for better results.",
              "step": 3,
              "dependencies": "Ability to run and monitor ad campaigns, access to performance data and analytics tools",
              "pitfalls": "Failing to conduct A/B testing, not regularly monitoring and adjusting based on performance data",
              "output": "Ad format selection file",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        },
        {
          "id": 9,
          "template_id": 1,
          "phase_id": 3,
          "goalNumber": 3,
          "name": "Write Ad Copy",
          "description": "Craft compelling ad copy that resonates with the target audience",
          "inCharge": "Marketing Team",
          "tasks": [
            {
              "id": 29,
              "campaign_id": 1,
              "goal_id": 9,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Understand Your Target Audience",
              "description": "Example: Suppose you are selling a fitness app.\nIdentify Demographics: Age, gender, location, income, education level.\nExample: Target audience - Young professionals aged 25-35, living in urban areas, with a middle to high income.\nUnderstand Psychographics: Interests, values, lifestyle, behavior.\nExample: Interests - Health and wellness, tech-savvy, busy lifestyle, values convenience and efficiency.\nIdentify Pain Points and Desires: What problems do they face? What solutions are they looking for?\nExample: Pain points - Lack of time for gym visits, desire for easy-to-follow workout plans.",
              "step": 1,
              "dependencies": " Accurate data on demographics and psychographics, Clear understanding of target audience's pain points and desires",
              "pitfalls": "Failing to accurately identify target audience, Neglecting to understand audience's needs and desires",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 30,
              "campaign_id": 1,
              "goal_id": 9,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Craft a Clear and Engaging Message",
              "description": "Example: Continuing with the fitness app scenario.\nValue Proposition: Highlight the main benefit of your product.\nExample: “Get fit on your schedule with our 10-minute daily workouts.”\nAddress Pain Points: Show how your product solves their problem.\nExample: “No time for the gym? Our app offers quick workouts you can do anywhere.”\nInclude a Call to Action (CTA): Encourage the audience to take a specific action.\nExample: “Download now and start your free trial!”",
              "step": 2,
              "dependencies": "Well-defined target audience, Clear value proposition, Understanding of audience's pain points",
              "pitfalls": "Failing to communicate clear benefits, Neglecting to address pain points, Weak call to action",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 31,
              "campaign_id": 1,
              "goal_id": 9,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Use Persuasive Techniques",
              "description": "Example: Techniques can vary, but here are a few common ones.\nSocial Proof: Testimonials, reviews, or endorsements.\nExample: “Join thousands of satisfied users who have transformed their fitness routines.”\nScarcity and Urgency: Limited-time offers or limited availability.\nExample: “Sign up today and get 50% off your first month!”\nEmotional Appeal: Tap into emotions like fear, happiness, or excitement.\nExample: “Feel confident and energized every day with just a few minutes of exercise.”",
              "step": 3,
              "dependencies": "High-quality testimonials and reviews, Time-sensitive offers, Emotional connection with audience",
              "pitfalls": "Lack of genuine social proof, Creating false urgency, Overly manipulative emotional appeals",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 32,
              "campaign_id": 1,
              "goal_id": 9,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Test and Refine Your Ad Copy",
              "description": "Example: Use A/B testing to see which versions of your ad copy perform best.\nCreate Variations: Change one element at a time (headline, CTA, etc.).\nExample: Version A - “Transform your body in just 10 minutes a day.” Version B - “Quick and easy workouts for your busy life.”\nRun Tests: Use platforms like Facebook Ads, Google Ads, or email marketing tools to test different versions.\nExample: Split your audience into two groups and show each group a different version of the ad.\nAnalyze Results: Look at metrics like click-through rates (CTR), conversion rates, and engagement.\nExample: If Version A has a higher CTR, it might indicate that the phrase “Transform your body” is more compelling.\nRefine Based on Data: Use the insights gained to improve your ad copy.\nExample: If Version A performs better, consider using similar language in future ads.",
              "step": 4,
              "dependencies": "Multiple ad copy variations, Sufficient sample size, Reliable analytics data",
              "pitfalls": "Neglecting to run proper tests, Analyzing insufficient data, Ignoring insights from data",
              "output": "Compelling ad copies file",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        },
        {
          "id": 10,
          "template_id": 1,
          "phase_id": 3,
          "goalNumber": 4,
          "name": "Set Up Targeting Parameters",
          "description": "Define audience demographics, interests, and behaviors for ad delivery",
          "inCharge": "Marketing Team",
          "tasks": [
            {
              "id": 33,
              "campaign_id": 1,
              "goal_id": 10,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Identify and Analyze Existing Customer Data",
              "description": "Begin by gathering and analyzing data from your current customers to understand their demographics, interests, and behaviors. This involves using your CRM system or sales records to identify patterns and trends.\nExample: If you sell outdoor gear, analyze your top customers' age, gender, and purchase history to determine who is most interested in your products.",
              "step": 1,
              "dependencies": "Access to customer data, CRM systems, data analysis skills",
              "pitfalls": "Failing to gather comprehensive data or analyze it accurately can lead to incorrect conclusions about your audience.",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 34,
              "campaign_id": 1,
              "goal_id": 10,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Conduct Market Research",
              "description": "Use surveys, focus groups, and market research reports to gather insights about your target audience’s preferences and behaviors. This step helps you understand the broader market and identify potential new customer segments.\nExample: If you're launching a new product, survey potential customers to understand their needs and preferences. For instance, use SurveyMonkey to create a survey about fitness habits for a new line of athletic wear.",
              "step": 2,
              "dependencies": "Market research tools, access to target audience, survey design skills",
              "pitfalls": "Neglecting to use a representative sample in surveys can result in biased or incomplete data.",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 35,
              "campaign_id": 1,
              "goal_id": 10,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Segment Your Audience",
              "description": "Based on the data and research, segment your audience into distinct groups with shared characteristics. This allows for more targeted and effective marketing strategies.\nExample: Create segments such as \"Young Professionals\" and \"Outdoor Enthusiasts\" based on age, occupation, and interests. Use tools like Excel to organize and visualize these segments.",
              "step": 3,
              "dependencies": "Clean and structured data, analysis tools, segmentation criteria",
              "pitfalls": "Over-segmenting your audience can make marketing efforts too complex and dilute the message.",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 36,
              "campaign_id": 1,
              "goal_id": 10,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Define Audience Personas",
              "description": "Create detailed personas for each segment to personalize your marketing efforts. Personas are fictional characters that represent the key traits of your target audience.\nExample: Develop personas like \"John, 28, Tech-Savvy Hiker\" with details about his hobbies, preferred communication channels, and purchase behavior.",
              "step": 4,
              "dependencies": "Detailed and accurate data from previous steps, tools for creating personas",
              "pitfalls": "Creating personas that are too generic or not based on actual data can lead to ineffective marketing strategies.",
              "output": "Taregt audience parameters file",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        },
        {
          "id": 11,
          "template_id": 1,
          "phase_id": 3,
          "goalNumber": 5,
          "name": "Set Budget and Bidding Strategy",
          "description": "Allocate daily/campaign budget and choose the bidding strategy (e.g., cost-per-click)",
          "inCharge": "Marketing Team",
          "tasks": [
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
              }
            },
            {
              "id": 38,
              "campaign_id": 1,
              "goal_id": 11,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Conduct Market Research and Analyze Historical Data",
              "description": "Gather insights on your target audience, competitors, and past campaign performance. Analyze this data to understand what strategies have worked and where there is room for improvement.\nExample: Review previous campaign data to identify which keywords, demographics, and times of day yielded the best results.",
              "step": 2,
              "dependencies": "Access to previous campaign data, market research tools",
              "pitfalls": "Overlooking important data or relying on outdated information",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 39,
              "campaign_id": 1,
              "goal_id": 11,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Determine Total Campaign Budget",
              "description": "Calculate the total amount of money you have available to spend on the campaign. Ensure this aligns with your overall marketing budget and business financial goals.\nExample: If your marketing budget for the quarter is $50,000, decide how much of this will be allocated to the specific campaign (e.g., $10,000).\n",
              "step": 3,
              "dependencies": "Available funds, financial projections, approval from stakeholders",
              "pitfalls": "Neglecting to consider hidden costs or unforeseen expenses",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 40,
              "campaign_id": 1,
              "goal_id": 11,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Segment Budget by Channel and Campaign",
              "description": "Decide how much of the total budget will be allocated to different marketing channels (e.g., Google Ads, Facebook Ads, LinkedIn).\nExample: Allocate 60% to Google Ads, 30% to Facebook Ads, and 10% to LinkedIn.",
              "step": 4,
              "dependencies": "Insights from market research, historical performance data",
              "pitfalls": "Failing to adapt the budget based on channel performance",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 41,
              "campaign_id": 1,
              "goal_id": 11,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Allocate Daily Budget",
              "description": "Divide the total budget allocated to each channel by the number of days the campaign will run to get your daily budget.\nExample: If the Google Ads budget is $6,000 for a 30-day campaign, the daily budget is $200.",
              "step": 5,
              "dependencies": "Total campaign budget, campaign duration",
              "pitfalls": "Failing to adjust budget based on performance data",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 42,
              "campaign_id": 1,
              "goal_id": 11,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Choose Bidding Strategy",
              "description": "Select a bidding strategy that aligns with your campaign goals. Common strategies include CPC, CPM, and CPA. Consider the behavior of your target audience and the nature of your campaign.\nExample: If your goal is to drive traffic to your website, choose CPC. For brand awareness, consider CPM. For sales or conversions, CPA might be best.",
              "step": 6,
              "dependencies": "Campaign objectives, target audience behavior, platform insights",
              "pitfalls": "Neglecting to align the bidding strategy with campaign goals",
              "output": "Bidding strategy",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "Campaign Management",
      "template_id": 1,
      "goals": [
        {
          "id": 12,
          "template_id": 1,
          "phase_id": 4,
          "goalNumber": 1,
          "name": "Launch & Monitor Campaign",
          "description": "Activate the ad campaign and track its performance",
          "inCharge": "Marketing Team",
          "tasks": [
            {
              "id": 43,
              "campaign_id": 1,
              "goal_id": 12,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Activate the Ad Campaign",
              "description": "Launch your ad campaign on your chosen platforms (e.g., Google Ads, Facebook Ads). Ensure all settings (budget, targeting, creatives, bidding strategy) are correctly configured.\nExample: Activate a Google Ads campaign by setting the daily budget, selecting keywords, creating ad copies, and choosing the bidding strategy.",
              "step": 1,
              "dependencies": "Campaign setup, approval from stakeholders, platform readiness",
              "pitfalls": "Neglecting to double-check settings before launch",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 44,
              "campaign_id": 1,
              "goal_id": 12,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Set Up Tracking and Analytics",
              "description": "Implement tracking mechanisms (e.g., Google Analytics, Facebook Pixel) to monitor campaign performance. Ensure all tracking codes are properly installed on your website or landing pages.\nExample: Set up Google Analytics to track conversions, and configure the Facebook Pixel to monitor user interactions on your site.",
              "step": 2,
              "dependencies": "Access to website backend, knowledge of tracking tools, platform integration",
              "pitfalls": "Failing to test tracking codes to ensure they are working properly",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
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
              }
            }
          ]
        },
        {
          "id": 13,
          "template_id": 1,
          "phase_id": 4,
          "goalNumber": 2,
          "name": "Optimize Campaign Performance",
          "description": "Analyze data, adjust targeting, and optimize ad copy and creatives for better results",
          "inCharge": "Marketing Team",
          "tasks": [
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
              }
            },
            {
              "id": 47,
              "campaign_id": 1,
              "goal_id": 13,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Adjust Targeting Parameters",
              "description": "Use insights from your data analysis to refine your target audience. This could involve adjusting demographics, interests, or geographic targeting to better align with your campaign goals.\nExample: Based on the analysis, narrow the targeting to females aged 25-34 who have shown interest in fitness-related topics.",
              "step": 2,
              "dependencies": "Understanding of target audience, access to targeting settings",
              "pitfalls": "Making changes based on assumptions rather than data",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 48,
              "campaign_id": 1,
              "goal_id": 13,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Optimize Ad Copy and Creatives",
              "description": "Test different ad copy variations and creatives to find what resonates best with your audience. Experiment with headlines, descriptions, images, and calls-to-action.\nExample: A/B test two different ad headlines to see which generates a higher CTR. Alternatively, try using different images in your Facebook ads to see which drives more engagement.",
              "step": 3,
              "dependencies": "Creative assets (images, ad copy), testing platform access",
              "pitfalls": "Not conducting sufficient A/B tests or waiting too long to make adjustments",
              "output": "Optimizing campaign preference file",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        },
        {
          "id": 14,
          "template_id": 1,
          "phase_id": 4,
          "goalNumber": 3,
          "name": "Respond to Comments & Messages",
          "description": "Engage with audience comments and messages for better brand image",
          "inCharge": "Marketing Team",
          "tasks": [
            {
              "id": 49,
              "campaign_id": 1,
              "goal_id": 14,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Monitor Comments and Messages",
              "description": "Regularly check your social media platforms, website, and other communication channels for audience comments and messages. This ensures timely responses and engagement.\nExample: Use social media management tools like Hootsuite or Sprout Social to monitor comments and messages across multiple platforms from a single dashboard.",
              "step": 1,
              "dependencies": "Access to social media platforms, website backend access, social media management tools",
              "pitfalls": "Ignoring or overlooking comments/messages, leading to missed opportunities for engagement",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 50,
              "campaign_id": 1,
              "goal_id": 14,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Respond Promptly and Professionally",
              "description": "Reply to audience comments and messages in a timely manner with professional and helpful responses. Acknowledge their feedback or questions and provide valuable information or assistance.\nExample: If a customer leaves a positive comment on your Facebook post, reply with a thank you message and express appreciation for their support.",
              "step": 2,
              "dependencies": "Knowledge of brand voice and guidelines, customer service training",
              "pitfalls": "Providing generic or automated responses, appearing insincere or impersonal",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 51,
              "campaign_id": 1,
              "goal_id": 14,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Engage in Meaningful Conversations",
              "description": "Foster deeper connections with your audience by engaging in meaningful conversations. Ask questions, seek feedback, and encourage discussions related to your brand or industry.\nExample: If a follower leaves a question about your product on Instagram, respond with a detailed answer and invite them to DM you for further assistance.",
              "step": 3,
              "dependencies": "Understanding of audience interests, industry knowledge, willingness to engage",
              "pitfalls": "Focusing solely on promotion rather than building genuine relationships, neglecting negative comments or feedback",
              "output": "Audience engagement file",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "name": "Reporting & Analysis",
      "template_id": 1,
      "goals": [
        {
          "id": 15,
          "template_id": 1,
          "phase_id": 5,
          "goalNumber": 1,
          "name": "Generate Campaign Reports",
          "description": "Compile reports on campaign performance metrics (e.g., reach, impressions, clicks, conversions)",
          "inCharge": "Marketing Team",
          "tasks": [
            {
              "id": 52,
              "campaign_id": 1,
              "goal_id": 15,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Gather Data from Advertising Platforms",
              "description": "Access performance data from the advertising platforms where your campaigns are running. This includes metrics such as reach, impressions, clicks, conversions, and more.\nExample: Download campaign performance reports from Google Ads, Facebook Ads Manager, and LinkedIn Campaign Manager.",
              "step": 1,
              "dependencies": "Active advertising campaigns, access to platform reporting tools, data export permissions",
              "pitfalls": "Failing to download or export data regularly, missing out on important metrics",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 53,
              "campaign_id": 1,
              "goal_id": 15,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Organize and Consolidate Data",
              "description": "Combine data from different platforms into a single spreadsheet for easy analysis. Ensure consistency in formatting and labeling of metrics across platforms.\nExample: Merge data from Google Ads, Facebook Ads, and LinkedIn Campaign Manager reports into one Excel file, with each platform's data in separate tabs.",
              "step": 2,
              "dependencies": "Understanding of data organization principles, access to data from multiple platforms",
              "pitfalls": "Incorrectly merging or labeling data, leading to data discrepancies",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 54,
              "campaign_id": 1,
              "goal_id": 15,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Analyze and Interpret Metrics",
              "description": "Analyze the compiled data to understand campaign performance trends, identify areas of success, and pinpoint areas for improvement. Calculate key performance indicators (KPIs) such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), and return on ad spend (ROAS).\nExample: Calculate the average CTR across all campaigns, identify campaigns with high CPA, and analyze trends in conversion rates over time.",
              "step": 3,
              "dependencies": "Knowledge of campaign performance metrics, ability to interpret data effectively",
              "pitfalls": "Focusing on vanity metrics without considering overall campaign goals, misinterpreting data due to lack of context",
              "output": "Campaign reports",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        },
        {
          "id": 16,
          "template_id": 1,
          "phase_id": 5,
          "goalNumber": 2,
          "name": "Analyze Data & Identify Insights",
          "description": "Evaluate campaign effectiveness and derive actionable insights for future campaigns",
          "inCharge": "Marketing Team",
          "tasks": [
            {
              "id": 55,
              "campaign_id": 1,
              "goal_id": 16,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Review Key Performance Metrics",
              "description": "Analyze key performance indicators (KPIs) such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), and return on ad spend (ROAS). Compare these metrics to your campaign objectives to gauge effectiveness.\nExample: Calculate the CTR for each ad group in your Google Ads campaign and compare it to industry benchmarks to determine if your ads are performing well.",
              "step": 1,
              "dependencies": "Access to campaign performance data, understanding of KPIs",
              "pitfalls": "Focusing solely on vanity metrics without considering overall campaign goals",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 56,
              "campaign_id": 1,
              "goal_id": 16,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Identify Successful Strategies and Tactics",
              "description": "Determine which aspects of your campaign were most effective in achieving your goals. Look for patterns or trends in your data to identify successful targeting, messaging, or creative elements.\nExample: Analyze the performance of different ad creatives to identify which ones generated the highest conversion rates. Look for common themes or messaging that resonated with your audience.",
              "step": 2,
              "dependencies": "Data analysis skills, campaign tracking and reporting tools",
              "pitfalls": "Overlooking smaller successes or focusing too narrowly on individual metrics",
              "output": null,
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            },
            {
              "id": 57,
              "campaign_id": 1,
              "goal_id": 16,
              "owner_id": 31,
              "assignee_id": null,
              "name": "Extract Actionable Insights for Future Campaigns",
              "description": "Use the insights gained from your analysis to inform future campaign strategies and optimizations. Identify areas for improvement and develop actionable recommendations to enhance future campaign performance.\nExample: Based on the success of certain ad creatives, create new variations or iterate on existing ones to further engage your audience. Adjust targeting parameters based on demographic or behavioral insights.",
              "step": 3,
              "dependencies": "Knowledge of industry trends, creativity, strategic thinking",
              "pitfalls": "Failing to translate insights into actionable recommendations, not prioritizing implementation",
              "output": "Identifying insights",
              "tools": null,
              "start": null,
              "end": null,
              "status": "new",
              "created_at": "2024-07-15T19:05:10.000000Z",
              "updated_at": "2024-07-15T19:05:10.000000Z",
              "deleted_at": null,
              "assignee": null
            }
          ]
        }
      ]
    }
  ]
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
  // {
  //   id: 8,
  //   organization_id: 1,
  //   name: "Mr. Rickie Hammes IV",
  //   email: "yundt.kamille@example.org",
  //   role: "staff",
  //   title: "Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 9,
  //   organization_id: 1,
  //   name: "Savannah Beer",
  //   email: "freeman00@example.com",
  //   role: "staff",
  //   title: "Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 10,
  //   organization_id: 1,
  //   name: "Mrs. Molly Rice PhD",
  //   email: "elta.rodriguez@example.com",
  //   role: "staff",
  //   title: "Graphic Designer",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 11,
  //   organization_id: 1,
  //   name: "Tavares Breitenberg",
  //   email: "susan12@example.net",
  //   role: "staff",
  //   title: "Software Developer",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 12,
  //   organization_id: 1,
  //   name: "Luigi Schuster",
  //   email: "murray.cyrus@example.com",
  //   role: "staff",
  //   title: "Brand Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 13,
  //   organization_id: 1,
  //   name: "Alice Mertz",
  //   email: "terry.weber@example.com",
  //   role: "staff",
  //   title: "Campaign Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 14,
  //   organization_id: 1,
  //   name: "Alexzander Kunde",
  //   email: "lelah.ziemann@example.com",
  //   role: "staff",
  //   title: "Graphic Designer",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 15,
  //   organization_id: 1,
  //   name: "Jermain Kerluke III",
  //   email: "eric.sauer@example.com",
  //   role: "staff",
  //   title: "Associate",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 16,
  //   organization_id: 1,
  //   name: "Amanda Hahn",
  //   email: "camila.bayer@example.net",
  //   role: "staff",
  //   title: "Campaign Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 17,
  //   organization_id: 1,
  //   name: "Josiane Schiller",
  //   email: "jacobs.courtney@example.org",
  //   role: "staff",
  //   title: "Brand Artist",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 18,
  //   organization_id: 1,
  //   name: "Miss Ellen Hoppe V",
  //   email: "mortimer.boyle@example.org",
  //   role: "staff",
  //   title: "Graphic Designer",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 19,
  //   organization_id: 1,
  //   name: "Dr. Paige Rau",
  //   email: "schmeler.lia@example.org",
  //   role: "staff",
  //   title: "Brand Artist",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 20,
  //   organization_id: 1,
  //   name: "Kavon Johnston",
  //   email: "yesenia.klocko@example.com",
  //   role: "staff",
  //   title: "Campaign Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 21,
  //   organization_id: 1,
  //   name: "Prof. Glennie Yost IV",
  //   email: "zackery26@example.com",
  //   role: "staff",
  //   title: "Marketing Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 22,
  //   organization_id: 1,
  //   name: "Matilde Satterfield",
  //   email: "robel.nyasia@example.net",
  //   role: "staff",
  //   title: "Campaign Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 23,
  //   organization_id: 1,
  //   name: "Michaela Von",
  //   email: "jazmyn.oberbrunner@example.com",
  //   role: "staff",
  //   title: "Associate",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 24,
  //   organization_id: 1,
  //   name: "Ms. Verlie Muller V",
  //   email: "braxton75@example.com",
  //   role: "staff",
  //   title: "Product Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 25,
  //   organization_id: 1,
  //   name: "Marianna Kris",
  //   email: "tremblay.zane@example.net",
  //   role: "staff",
  //   title: "Marketing Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 26,
  //   organization_id: 1,
  //   name: "Prof. Laurie Senger V",
  //   email: "tessie.nienow@example.org",
  //   role: "staff",
  //   title: "Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 27,
  //   organization_id: 1,
  //   name: "Warren Rippin",
  //   email: "ctowne@example.net",
  //   role: "staff",
  //   title: "Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 28,
  //   organization_id: 1,
  //   name: "Hassan Smitham",
  //   email: "oreilly.justyn@example.com",
  //   role: "staff",
  //   title: "Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 29,
  //   organization_id: 1,
  //   name: "Saul West",
  //   email: "arnold35@example.org",
  //   role: "staff",
  //   title: "Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 30,
  //   organization_id: 1,
  //   name: "Dasia Stroman",
  //   email: "keon96@example.net",
  //   role: "staff",
  //   title: "Brand Artist",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 31,
  //   organization_id: 1,
  //   name: "Json Born",
  //   email: "owner@acme.com",
  //   role: "owner",
  //   title: "Brand Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
  // {
  //   id: 32,
  //   organization_id: null,
  //   name: "John Doe",
  //   email: "admin@gtm.com",
  //   role: "admin",
  //   title: "Brand Manager",
  //   email_verified_at: "2024-07-11T08:30:27.000000Z",
  //   deleted_at: null,
  //   created_at: "2024-07-11T08:30:27.000000Z",
  //   updated_at: "2024-07-11T08:30:27.000000Z",
  // },
]
const files = {
  attchments: [
    {
      id: '#4Attach',
      image: "/images/chat/icon-figma.svg",
      title: 'service.fig',
      fileSize: '2MB',
    },
    {
      id: '#5Attach',
      image: "/images/chat/icon-javascript.svg",
      title: 'abouts.js',
      fileSize: '2MB',
    },
    {
      id: '#1Attach',
      image: "/images/chat/icon-adobe.svg",
      title: 'adobe.pdf',
      fileSize: '2MB',
    },
    {
      id: '#2Attach',
      image: "/images/chat/icon-chrome.svg",
      title: 'abouts.html',
      fileSize: '2MB',
    },
    {
      id: '#3Attach',
      image: "/images/chat/icon-zip-folder.svg",
      title: 'cheese.zip',
      fileSize: '2MB',
    },
  ],
}
const CampaignmDetailData = () => {
  // const { selectedCampaign, setLoading, fetchCampaignbyId } = useContext(CampaignContext);
  const { selectedTask, setSelectedTask, openTask, setOpenTask, selectedTaskId, setSelectedTaskId } = useContext(CampaignContext);

  const [selectedCTask, setSelectedCTask] = useState({});
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignDataType>();
  const [selectedCTaskId, setSelectedCTaskId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const pathName = usePathname();
  useEffect(() => {
    console.log(selectedTask, selectedTaskId, openTask, "Contesxt")
  }, [selectedTaskId, openTask]);

  const closeTask = () => {
    setSelectedTaskId(null)
    setSelectedTask({});
    setOpenTask(false)
  };

  const getTitle: string | any = pathName.split('/').pop();
  //   const post = posts.find((p) => p.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') === getTitle);
  //   const [replyTxt, setReplyTxt] = React.useState("");
  const { id } = useParams<{ id: string }>();
  //   const paramCase = (t: string) =>
  //     t
  //       .toLowerCase()
  //       .replace(/ /g, "-")
  //       .replace(/[^\w-]+/g, "");

  //   const onSubmit = () => {
  //     if (!post || !post.id) return;
  //     const newComment = {
  //       id: uniqueId('#comm_'),
  //       profile: {
  //         id: uniqueId('#USER_'),
  //         avatar: post.author?.avatar || '',
  //         name: post.author?.name || '',
  //         time: 'Now',
  //       },
  //       comment: replyTxt,
  //       replies: [],
  //       postId: post.id,
  //     };
  //     addComment(post.id, newComment);
  //     setReplyTxt('');
  //   };

  // skeleton


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

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

  useEffect(() => {
    const fetchCampaignbyId = async (id: any) => {
      try {
        // const response = await axios.post('/api/', { id });
        setSelectedCampaign(campaignDetail);
        setLoading(false);
        console.log(campaignDetail)
      } catch (error) {
        console.error('Error fetching blog post:', error);

        setLoading(false);

      }
    };
    fetchCampaignbyId(id);
  }, [id]);

  return (
    <>
      {selectedCampaign &&
        <>


          <CardBox className="p-0 overflow-hidden">

            {/* <div className="flex justify-between items-center -mt-7 px-6">
              <div>
                <Tooltip content={selectedCampaign ? post?.author.name : ""} className="">
                  <Avatar img={post?.author.avatar} rounded />
                </Tooltip>
              </div>
            </div> */}

            <div className="px-6 pb-0">


              <h2 className="md:text-2xl text-2xl my-6 mb-0 capitalize flex items-center">{selectedCampaign?.name}   <Badge className={` ml-3 capitalize bg-light${statusBadge(selectedCampaign?.status)} dark:bg-dark${statusBadge(selectedCampaign?.status)} text-${statusBadge(selectedCampaign?.status)}`}
              >
                {selectedCampaign?.status}
              </Badge></h2>

              <div>
                <div className="flex gap-3 items-center">
                  <div className="flex gap-2 items-center text-darklink text-[15px]">
                    <p className="flex gap-1 pb-1 items-center text-base mb-0 mt-0.5">{selectedCampaign?.categery}</p>

                  </div>
                  {/* <div className="flex gap-2 items-center text-darklink text-[15px]">
                    <Icon icon="solar:chat-line-outline"
                    height="18"
                      className="text-ld"
                    />
                    {format(new Date(selectedCampaign.end), "E, MMM d")} 
                    </div> */}
                  <div className="ms-auto flex gap-2 items-center text-darklink text-[15px]">
                    Start Date
                    <small>
                      {format(new Date(selectedCampaign.start), "E, MMM d")}
                    </small>
                    <GoDot
                      size="16"
                      className="text-ld"
                    />
                    End Date
                    <small>
                      {format(new Date(selectedCampaign.end), "E, MMM d")}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/* <HR className="" /> */}
            <div className='mt-2 px-6'>
              <Tabs aria-label="Tabs with underline" variant="underline">
                <Tabs.Item
                  active
                  title="Task"
                  className='focus:ring-0 ring-0 focus:ring-transparent focus:ring-offset-0'
                  icon={() => <Icon icon="solar:shield-user-outline" className='mr-2' height={20} />}
                >
                   <div className="mb-2 mt-3">

<h3 className="text-base mb-3">Members Assigned </h3>

</div>
                  <div className="flex flex-row flex-wrap mb-6">

                 
                  { teamsData.map((member) => {
                    return(
                    <div className="flex items-center font-medium dark:text-white p-1 bg-muted m-1 mr-2">
                      
                    {/* <Avatar className="rounded-full bg-transparent mr-1" placeholderInitials={member.name.charAt(0)} size="xs" /> */}
                    {/* <Avatar rounded className="rounded-full bg-transparent mr-2"  size="xs" /> */}
                    <Avatar
        img="/images/profile/user-4.jpg"
        rounded
        size="xs"
        className="mr-2"
      />
                    <div className="text-ld">{member.name ? member.name : 'Unassigned'} </div>
                  </div>)
                  })
                  }
                   </div>

                   {selectedCampaign?.phases?.map((phase: any) => {
            return (
              <>
                <CampaignPhase {...phase} />
                {openTask && <TaskDetail openTaskValue={openTask} onCloseTask={closeTask} />}

              </>)
          })}
                </Tabs.Item>
                <Tabs.Item
                  title="Files"
                  className=""
                  icon={() => <Icon icon="solar:graph-linear" className='mr-2' height={20} />}
                >
                  <h3 className="text-base mb-3">All Files </h3>

                    <div className="grid grid-cols-12 gap-6 mt-4">
                      {files.attchments.map((attach: { id: React.Key | null | undefined; image: string | any; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; fileSize: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; }) => (
                        <div
                          className="lg:col-span-4 md:col-span-6 col-span-12"
                          key={attach.id}
                        >
                          <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="bg-muted dark:bg-darkmuted p-3 rounded-md">
                              
                              <Image
                                src={attach.image}
                                height={24}
                                width={24}
                                alt="download"
                              />
                            </div>
                            <div>
                              <h5 className="text-sm group-hover:text-primary">
                                {attach.title}
                              </h5>
                              <p className="text-sm text-darklink">
                                {attach.fileSize}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                </Tabs.Item>

              </Tabs>
            </div>

          </CardBox>

          
        </>
      }

    </>
  );
};
export default CampaignmDetailData;
