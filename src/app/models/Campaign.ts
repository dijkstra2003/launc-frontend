import { Goal } from './Goal';

export interface Campaign {
  id: number;
  campaignDescription: string;
  campaignGoal: Goal[];
  teamCampaign: any[];
  userCampaign: any[];
  userLikes: any[];
  createdOn: string;
  updatedOn: string;
}
