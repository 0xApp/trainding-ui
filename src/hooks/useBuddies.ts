import useSWR from "swr";
import { getBuddies } from "../api/api";

export default function useBuddies() {
    const { data, isValidating, mutate } = useSWR(["buddies"], () =>
        getBuddies('1')
    );


  return {
    data: data ?? [],
    isValidating: isValidating,
    mutate,
  };
}
