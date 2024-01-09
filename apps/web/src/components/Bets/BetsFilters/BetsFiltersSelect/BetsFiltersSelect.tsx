"use client";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@ui/components/select";
import { Label } from "@ui/components/label";
import { BetsSearchParams } from "@/interfaces/search-params";
import { useQueryParams } from "@/hooks/useQueryParams";

interface BetsFilterSelectProps {
  param: keyof BetsSearchParams;
  label: string;
  name: string;
  values: Record<string, string>;
  placeholder?: string;
}

export const BetsFiltersSelect = ({ param, label, name, values, placeholder }: BetsFilterSelectProps) => {
  const { searchParams, navigateWithQuery } = useQueryParams();
  const defaultValue = searchParams.get(param)?.toString();

  const changeHandler = (value: string) => navigateWithQuery(param, value, ["page"]);

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name} className="p-2">
        {label}
      </Label>
      <Select key={defaultValue} onValueChange={changeHandler} defaultValue={defaultValue}>
        <SelectTrigger className="sm:w-32 md:w-40" id={name} aria-label="Trigger filter select">
          <SelectValue placeholder={placeholder ?? "all"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(values).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
