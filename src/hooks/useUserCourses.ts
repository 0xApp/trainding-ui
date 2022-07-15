import { useEffect, useState } from "react";
import useSWR from "swr";
import { getUserCourse } from "../api/api";
import { UserCourse } from "../types/apitypes";

export default function useUserCourses(id: string) {
    const { data, isValidating, mutate } = useSWR(['user-course', id], () => getUserCourse(id));

    const [ongoing, setOngoing] = useState<UserCourse[]>([]);
    const [suggested, setSuggested] = useState<UserCourse[]>([]);
    const [upcoming, setUpcoming] = useState<UserCourse[]>([]);

    useEffect(() => {
        if (data) {
            setOngoing(data.filter((c) => c.state === "STARTED"));
            setUpcoming(data.filter((c) => c.state === "JOINED"));
            setSuggested(
              data.filter(
                (c) => c.state === "NOT_STARTED" || c.state === "JOINED"
              )
            );
        }
    }, [data]);

    return {
      data: data ?? [],
      ongoing,
      suggested,
      upcoming,
      isValidating: isValidating,
      mutate,
    };
}