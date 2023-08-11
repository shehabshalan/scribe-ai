"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

interface OpenAIKeyProps {
  setApiKey: (key: string) => void;
  apiKey: string;
}

const OpenAIKey = ({ apiKey, setApiKey }: OpenAIKeyProps) => {
  return (
    <div className="grid gap-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <Label htmlFor="openai">OpenAI Key</Label>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="top"
        >
          We will not store your key. It will be stored in your browser's local
          storage.
        </HoverCardContent>
      </HoverCard>
      <Input
        id="openai"
        autoFocus
        type="password"
        className="mt-2"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
    </div>
  );
};

export default OpenAIKey;
