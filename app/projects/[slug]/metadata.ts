// app/projects/[slug]/metadata.ts

import type { Metadata } from "next";
import { getProject } from "../data";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) {
    return {
      title: "Project",
      description: "Project details.",
    };
  }

  return {
    title: `${project.title} | Andrew Gordienko`,
    description: project.desc,
  };
}
