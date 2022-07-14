export interface Profile {
  id: string;
  name: string;
  goal: number;
  tags: string[];
}

export interface UserCourse {
  id: string;
  name: string;
  source: string;
  rating: number;
  userCount: number;
  duration: number;
  progress: number;
  state: string;
}
