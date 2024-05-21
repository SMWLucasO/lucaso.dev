import { BlogPostOverview } from "@blog/Pages";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/blog")({
  component: BlogPostOverview,
});
