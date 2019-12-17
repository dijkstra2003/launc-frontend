import { Goal } from './Goal';

export class Campaign {
  id: number;
  campaignName: string;
  campaignDescription: string;
  campaignGoal: Goal[];
  teamCampaign: any[];
  userCampaign: any[];
  userLikes: any[];
  createdOn: string;
  updatedOn: string;
}
