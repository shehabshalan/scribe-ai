"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { PopoverProps } from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { tasks, Task } from "../data/tasks";

interface TaskSelectorProps extends PopoverProps {
  tasks: Task[];
}

export function TaskSelector({ tasks, ...props }: TaskSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<Task>();
  //   const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Choose task here"
          aria-expanded={open}
          className="flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]"
        >
          {selectedTask ? selectedTask.name : "Choose task here"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search presets..." />
          <CommandEmpty>No task found.</CommandEmpty>
          <CommandGroup heading="Examples">
            {tasks.map((task) => (
              <CommandItem
                key={task.id}
                onSelect={() => {
                  setSelectedTask(task);
                  setOpen(false);
                }}
              >
                {task.name}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedTask?.id === task.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
