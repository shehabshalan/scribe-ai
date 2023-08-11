import { ChatOpenAI } from "langchain/chat_models/openai";
import { LLMChain } from "langchain/chains";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "langchain/prompts";

type CallBotParams = {
  systemTemplate: string;
  modelName?: string;
  temperature?: number;
  maxTokens?: number;
  key?: string;
};

export const callBot = ({
  systemTemplate,
  modelName = "gpt-3.5-turbo",
  temperature = 0,
  maxTokens = 256,
  key,
}: CallBotParams) => {
  const systemMessagePrompt =
    SystemMessagePromptTemplate.fromTemplate(systemTemplate);

  const humanTemplate = "{query}";
  const humanMessagePrompt =
    HumanMessagePromptTemplate.fromTemplate(humanTemplate);

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    systemMessagePrompt,
    humanMessagePrompt,
  ]);

  const chat = new ChatOpenAI({
    openAIApiKey: key,
    modelName,
    temperature,
    maxTokens,
  });

  return (query: string) => {
    const chain = new LLMChain({
      llm: chat,
      prompt: chatPrompt,
    });

    return chain.call({ query });
  };
};
