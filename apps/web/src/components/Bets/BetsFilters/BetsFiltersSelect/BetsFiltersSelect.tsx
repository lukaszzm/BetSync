"use client";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@ui/components/select";
import { Label } from "@ui/components/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BetsSearchParams } from "@/interfaces/search-params";

interface BetsFilterSelectProps {
  param: keyof BetsSearchParams;
  label: string;
  values: Record<string, string>;
  placeholder?: string;
}

export const BetsFiltersSelect = ({ param, label, values, placeholder }: BetsFilterSelectProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const changeHandler = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(param, value);

    replace(`${pathName}?${params.toString()}`);
  };

  const defaultValue = searchParams.get(param)?.toString();

  return (
    <div className="flex flex-col gap-1">
      <Label className="p-2">{label}</Label>
      <Select key={defaultValue} onValueChange={changeHandler} defaultValue={defaultValue}>
        <SelectTrigger className="w-[180px]">
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
