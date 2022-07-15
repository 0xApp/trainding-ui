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

export interface UserCourseUpdate {
  course: string;
  user: string;
  state: string;
}

export interface Chat {
  id: number;
  from_user: string;
  to_user: string;
  message: string;
  time: string;
}

export interface CreateChat {
  from: string;
  to: string;
  message: string;
}
