import { useQuery } from "@tanstack/react-query";
import { UsersApi } from ".";

export function useGetAllUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: UsersApi.getUsers
  })
}