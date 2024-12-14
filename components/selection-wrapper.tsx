"use client";

import { EntityType } from "@/app/dashboard/products/(action)/add-product/utils/enum";
import React from "react";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import handleEntityOperation from "@/app/dashboard/products/(action)/add-product/services/handleEntity";

interface SelectContentWrapperProps {
  placeholder: string;
  id: EntityType;
}

export default function SelectContentWrapper({ placeholder, id }: SelectContentWrapperProps) {
  const [data, setData] = React.useState<Array<{ name: string; slug: string }>>(
    []
  );

  React.useEffect(() => {
    const values = handleEntityOperation(id);
    // values.then((data) => setData(data));
  }, [id]);

  return (
    <>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data.map((item: (typeof data)[0], idx) => (
          <SelectItem key={idx} value={item.slug}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </>
  );
}
