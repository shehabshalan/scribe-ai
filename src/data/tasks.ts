export interface Task {
  id: string;
  name: string;
  description: string;
}

export const tasks: Task[] = [
  {
    id: "b1a0e66a-9937-465d-a188-2c4c4ae2401d",
    name: "Content Ideation and Generation",
    description:
      "Generate creative and relevant ideas for blog, topics,, or any content.",
  },
  {
    id: "b2a0e66a-9937-465d-a188-2c4c4ae2401g",
    name: "Grammar and Style Check",
    description:
      "Ensure error-free and professionally written content with proper grammar and style.",
  },
  {
    id: "9cb0e66a-9937-465d-a188-2c4c4ae2401f",
    name: "SEO Optimization",
    description:
      "Optimize content for search engines by suggesting keywords and meta descriptions.",
  },
  {
    id: "61eb0e32-2391-4cd3-adc3-66efe09bc0b7",
    name: "Readability Enhancement",
    description:
      " Improve content readability by refining sentence structure and coherence.",
  },
  {
    id: "adfa95be-a575-45fd-a9ef-ea45386c64de",
    name: "Visual Enhancements",
    description:
      "Suggest multimedia elements like images and videos to enhance content engagement.",
  },
  {
    id: "adfa95be-a575-45fd-a9ef-ea45386c64ye",
    name: "Summarization and Abstracts",
    description:
      "Generate concise summaries or abstracts of longer content pieces.",
  },
  {
    id: "adfa95be-a575-45fd-a9ef-ea45386c64te",
    name: "Social Media Teasers",
    description:
      "Generate attention-grabbing snippets for sharing on social media platforms.",
  },
];
