export interface GroupMember {
  id: number;
  name: string;
  avatar: string;
}

export interface ProjectGroup {
  id: number;
  title: string;
  desc?: string;
  badge?: string;
  members: number;
  online: number;
  size?: 'small' | 'large';
}

export interface DiscoverGroup {
  id: number;
  name: string;
  desc: string;
  followers: string;
  color: string;
  iconColor: string;
}