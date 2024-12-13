import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

function HeaderOrgList() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
            <Button className="w-full">
                <span>Organizations</span>
            </Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </>
  );
}

export default HeaderOrgList;
