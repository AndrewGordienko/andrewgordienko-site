// app/projects/[slug]/generateStaticParams.ts

import { projects } from "../data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
