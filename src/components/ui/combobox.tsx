"use client";

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
import { cn } from "@/lib/utils";
import * as React from "react";
import { FaCheck } from "react-icons/fa";
import { LuChevronsUpDown } from "react-icons/lu";

type PropsComboBox = {
  data: any[];
  placeholder: string;
  setFormValue?: any;
  fieldName?: string;
};

function ComboBox({
  data = [],
  placeholder = "Select...",
  setFormValue = () => null,
  fieldName = "",
}: PropsComboBox) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-100 justify-between ${!value ? "text-gray-500" : ""} `}
        >
          {value
            ? data.find((item: any) => item.value === value)?.label
            : placeholder}
          <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-100 p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>Nothing found.</CommandEmpty>
          <CommandGroup>
            {data.map(item => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={currentValue => {
                  setValue(currentValue === value ? "" : currentValue);
                  if (item?.code) {
                    setFormValue(fieldName, item.code);
                  } else {
                    setFormValue(fieldName, currentValue);
                  }
                  setOpen(false);
                }}
              >
                <FaCheck
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default React.forwardRef(ComboBox);
