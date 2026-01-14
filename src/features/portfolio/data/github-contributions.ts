import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
  contributions: Activity[];
  total?: {
    lastYear?: number;
    [year: string]: number | undefined;
  };
};

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      // Use 'last' to get the last year of contributions (last 365 days)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
        {
          signal: controller.signal,
          next: { revalidate: 86400 }, // Cache for 1 day
        }
      );

      clearTimeout(timeoutId);

      if (!res.ok) {
        return [];
      }

      const data = (await res.json()) as GitHubContributionsResponse;
      return data.contributions || [];
    } catch (error) {
      // Return empty array on error to prevent build failures
      console.error("Failed to fetch GitHub contributions:", error);
      return [];
    }
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
);
