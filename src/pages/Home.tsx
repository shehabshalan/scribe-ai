import { CounterClockwiseClockIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Model, models, types } from "../data/models";
import { Task, tasks } from "../data/tasks";
import { TaskSelector } from "../components/TaskSelector";
import { TaskSave } from "../components/TaskSave";
import { TaskActions } from "../components/TaskActions";
import { ModelSelector } from "../components/ModelSelector";
import { TemperatureSelector } from "../components/TemperatureSelector";
import { MaxLengthSelector } from "../components/MaxLengthSelector";
import { ModeToggle } from "../components/ModeToggle";
import ResponseArea from "@/components/ResponseArea";
import { callBot } from "@/lib/llm";
import { getTemplate } from "@/lib/templates";
import { useEffect, useState } from "react";
import OpenAIKey from "@/components/OpenAIKey";
import { ButtonLoading } from "@/components/LoadingButton";
type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "ScribeAI",
  description: "The AI powered content creation tool.",
};

const Home = () => {
  const [response, setResponse] = useState<string>("");
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [apiKey, setApiKey] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<Model>(models[0]);
  const [selectedTemperature, setSelectedTemperature] = useState<number[]>([0]);
  const [selectedMaxLength, setSelectedMaxLength] = useState<number[]>([256]);
  const [query, setQuery] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const localApiKey = localStorage.getItem("openai-key");
    if (localApiKey) {
      setApiKey(localApiKey);
    } else {
      localStorage.setItem("openai-key", apiKey);
    }
  }, []);

  const handleSubmit = async () => {
    if (!apiKey) {
      alert("Please enter your OpenAI API key");
      return;
    }

    if (!selectedTask) {
      alert("Please select a task");
      return;
    }

    if (!selectedModel) {
      alert("Please select a model");
      return;
    }

    if (!selectedTemperature) {
      alert("Please select a temperature");
      return;
    }

    if (!selectedMaxLength) {
      alert("Please select a max length");
      return;
    }

    if (!query) {
      alert("Please enter a query");
      return;
    }

    const template = getTemplate(selectedTask);

    const myBot = callBot({
      systemTemplate: template,
      modelName: selectedModel.name,
      temperature: selectedTemperature[0],
      maxTokens: selectedMaxLength[0],
      key: apiKey,
    });

    try {
      setIsSubmitting(true);
      const response = await myBot(query);
      setResponse(response.text);
      setIsSubmitting(false);
    } catch (error: any) {
      alert(error.response.data.error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="md:hidden">
        <h2 className="text-lg font-semibold">ScribeAI</h2>
      </div>
      <div className="h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="hidden md:block text-lg font-semibold">ScribeAI</h2>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <TaskSelector
              tasks={tasks}
              setSelectedTask={setSelectedTask}
              selectedTask={selectedTask as Task}
            />
            <TaskSave />
            <div className="hidden space-x-2 md:flex">
              <ModeToggle />
            </div>
            <TaskActions />
          </div>
        </div>
        <Separator />
        <Tabs defaultValue="complete" className="flex-1">
          <div className="container h-full py-6">
            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
              <div className="flex-col space-y-4 sm:flex md:order-2">
                <div className="grid gap-2"></div>
                <ModelSelector
                  types={types}
                  models={models}
                  setSelectedModel={setSelectedModel}
                  selectedModel={selectedModel}
                />
                <TemperatureSelector
                  setSelectedTemperature={setSelectedTemperature}
                  selectedTemperature={selectedTemperature}
                />
                <MaxLengthSelector
                  setSelectedMaxLength={setSelectedMaxLength}
                  selectedMaxLength={selectedMaxLength}
                />
                <OpenAIKey setApiKey={setApiKey} apiKey={apiKey} />
              </div>
              <div className="md:order-1">
                <TabsContent value="complete" className="mt-0 border-0 p-0">
                  <div className="flex h-full flex-col space-y-4">
                    <Textarea
                      placeholder="Write a tagline for an ice cream shop"
                      className="min-h-[400px] flex-1 p-4 md:min-h-[400px] lg:min-h-[400px]"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    {response && !isSubmitting && (
                      <ResponseArea response={response} />
                    )}

                    <div className="flex items-center space-x-2">
                      {isSubmitting ? (
                        <ButtonLoading />
                      ) : (
                        <Button onClick={handleSubmit} disabled={!query}>
                          Submit
                        </Button>
                      )}
                      <Button variant="secondary" disabled={!response}>
                        <span className="sr-only">Show history</span>
                        <CounterClockwiseClockIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
