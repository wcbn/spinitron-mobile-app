import { useInfiniteQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../../config";
import { paths } from "./openapi-types";

export type PersonasQueryInput = NonNullable<
  paths["/personas"]["get"]["parameters"]["query"]
>;

export type PersonasQueryData =
  paths["/personas"]["get"]["responses"]["200"]["content"]["application/json"];

function usePersonas(input?: PersonasQueryInput) {
  return useInfiniteQuery<PersonasQueryData>({
    queryKey: ["personas"],
    queryFn: async ({ pageParam }) => {
      return fetch(API_BASE_URL + "/personas?page=" + pageParam).then((res) =>
        res.json()
      );
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage?._meta?.currentPage ? lastPage?._meta?.currentPage + 1 : null,
  });
}

export { usePersonas };