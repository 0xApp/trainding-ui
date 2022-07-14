import axios from "axios";
import { Profile } from "../types/apitypes";

const baseUrl: string = process.env.REACT_APP_API_URL!;

export async function getProfile(id: string): Promise<Profile> {
  var response = await axios.get(`${baseUrl}/Profile?id=${id}`);
  return response.data;
}

export async function setGoal(id: string, goal: number): Promise<void> {
  return await axios.post(`${baseUrl}/Profile/goal`, {
    id,
    goal,
  });
}

export async function setTag(
  id: string,
  tag: string,
  checked: boolean
): Promise<void> {
  return await axios.post(`${baseUrl}/Profile/tag`, {
    user: id,
    tag: tag,
    isSet: checked,
  });
}
