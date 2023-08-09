export const types = ["GPT-3", "GPT-4"] as const;

export type ModelType = (typeof types)[number];

export interface Model<Type = string> {
  id: string;
  name: string;
  description: string;
  strengths?: string;
  type: Type;
}

export const models: Model<ModelType>[] = [
  {
    id: "1",
    name: "gpt-3.5-turbo",
    description:
      "Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration 2 weeks after it is released.",
    type: "GPT-3",
    strengths:
      "Complex intent, cause and effect, creative generation, search, language translation, summarization, classification",
  },
  {
    id: "2",
    name: "gpt-3.5-turbo-16k",
    description:
      "Same capabilities as the standard gpt-3.5-turbo model but with 4 times the context.",
    type: "GPT-3",
    strengths:
      "Complex intent, cause and effect, creative generation, search, language translation, summarization, classification",
  },
  {
    id: "3",
    name: "gpt-4",
    description:
      "More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Will be updated with our latest model iteration 2 weeks after it is released.",
    type: "GPT-4",
    strengths:
      "Advanced reasoning, complex intent, creative generation, search, language translation, summarization, classification",
  },
  {
    id: "4",
    name: "gpt-4-32k",
    description:
      "Same capabilities as the base gpt-4 mode but with 4x the context length. Will be updated with our latest model iteration.",
    type: "GPT-4",
    strengths:
      "Advanced reasoning, complex intent, creative generation, search, language translation, summarization, classification",
  },
];
