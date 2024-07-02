import { useInfiniteQuery } from "@tanstack/vue-query";

export default function useCharactersList() {
  return useInfiniteQuery({
    queryKey: ["characters-list", "character"],
    queryFn: ({ pageParam = 1 }) => {
      return $rickAndMorty<{
        count: number;
        next: string | null;
        previous: string | null;
        results: {
          name: string;
          url: string;
        }[];
      }>(`character`);
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
}
