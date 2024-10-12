  export interface  CampaignList { 
       id: number;
       name: string ;
       start: string ;
       end: string;
       status: string;
       created_at: string;
       updated_at: string;
       total_goals: number; 
       completed_goals: number;
       goals_assigned: number;
       categery: string;
       total_assets: number;  
  }
  export interface  CampaignDataType { 
     id: number;
     name: string ;
     start: string ;
     end: string;
     status: string;
     created_at: string;
     updated_at: string;
     total_goals: number; 
     completed_goals: number;
     goals_assigned: number;
     categery: string;
     total_assets: number;
     phases : PhasesType[] ,
}
export interface  PhasesType { 
     id: number;
     name: string ;
     // start: string ;
     // end: string;
     // status: string;
     // created_at: string;
     // updated_at: string;
     template_id: number;
     goals : any[]
}
export interface  GoalsType { 
     id: number;
     name: string ;
     start: string ;
     end: string;
     status: string;
     created_at: string;
     updated_at: string;
     template_id: number;
}


export interface TaskType {
     id?: string;
     time?: Date;
     comment?: string;
     replies?: any[];
   }

   export interface TemplateType {
     id: number | string;
     name: string;
     description: string;
     image: string;
     category: string;
     category_id:number | string

   }

// "id": 1,
// "template_id": 1,
// "phase_id": 1,
// "goalNumber": 1,
// "name": "Define Campaign Goals",
// "description": "Set specific and measurable goals for the campaign (e.g., brand awareness, lead generation, sales)",
// "inCharge": "Marketing Team",

