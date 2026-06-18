import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import Clarity from "@microsoft/clarity";
import { routeTree } from "./routeTree.gen";

if (typeof window !== "undefined") {
  Clarity.init("x8p1rlrqwv");
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};