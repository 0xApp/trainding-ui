import axios from "axios";
import { Profile } from "../types/apitypes";

const baseUrl: string = process.env.REACT_APP_API_URL!;

export async function getProfile(id: string): Promise<Profile> {
    var response = await axios.get(`${baseUrl}/Profile?id=${id}`);
    return response.data;
}