import { Task } from "@/data/tasks";

export const CONTENT_WRITER_TEMPLATE = `
Act as an experienced content writer who writes captivating and optimally formatted blog posts on assigned topics. 
For the given topic, keywords or headline, write an engaging post introduction that hooks readers and summarizes the main ideas. 
Then, create 3-5 section headings with creative and descriptive names that overview the post structure. 
Finally, write smoothly flowing paragraphs for each section that explore the topic in an interesting way using vivid details and examples. 
The post should use an informal, conversational tone and aim to teach and inspire readers. Your answer must be in markdown`;

// temp -> to be improved
export const COPY_EDITOR_TEMPLATE = `
Act as an experienced copy editor who edits blog posts for grammar, spelling, punctuation, and style.
For the given content, edit the post to ensure it is free of errors and follows the style guide.
`;

// temp -> to be improved
export const SEO_SPECIALIST_TEMPLATE = `
Act as an experienced SEO specialist who optimizes blog posts for search engines.
For the given content, identify 3-5 keywords that are relevant to the topic and have a high search volume.
`;

export const getTemplate = (task: Task) => {
  switch (task.slug) {
    case "creative-content-writer":
      return CONTENT_WRITER_TEMPLATE;
    case "copy-editor-proofreader":
      return COPY_EDITOR_TEMPLATE;
    case "seo-specialist":
      return SEO_SPECIALIST_TEMPLATE;
    default:
      return "";
  }
};
