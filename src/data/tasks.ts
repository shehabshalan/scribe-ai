export interface Task {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const tasks: Task[] = [
  {
    id: "b1a0e66a-9937-465d-a188-2c4c4ae2401d",
    name: "Creative Content Writer",
    slug: "creative-content-writer",
    description:
      "Generate creative and relevant ideas for blog, topics,, or any content.",
  },
  {
    id: "b1a0e66a-9937-465d-a188-2c4c4ae2411d",
    name: "Copy Editor / Proofreader",
    slug: "copy-editor-proofreader",
    description:
      "Proofread and edit blog posts before publication. Ensure all-around consistency (style, fonts, images and tone).",
  },
  {
    id: "b1a0e66a-9937-465d-a188-2c4c4ae2461d",
    name: "SEO Specialist",
    slug: "seo-specialist",
    // TODO: use Agent for this task?
    description:
      "Optimizes your content. Conduct keyword research. Review technical SEO issues and recommend fixes.",
  },
];
