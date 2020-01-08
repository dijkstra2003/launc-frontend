import { Goal } from './Goal';

export interface Campaign {
  id?: number;
  campaignName?: string;
  campaignDescription?: string;
  goal?: Goal;
  url?: string;
  teamCampaign?: any[];
  userCampaign?: any[];
  userLikes?: any[];
  createdOn?: string;
  updatedOn?: string;
}
