import { Goal } from './Goal';

export interface Campaign {
  id?: number;
  campaignName?: string;
  campaignDescription?: string;
  goal?: Goal;
  teamCampaign?: any[];
  userCampaign?: any[];
  userLikes?: any[];
  createdOn?: string;
  updatedOn?: string;
}
