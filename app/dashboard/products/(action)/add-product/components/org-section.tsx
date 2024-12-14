"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EntityType } from "../utils/enum";
import SelectContentWrapper from "@/components/selection-wrapper";

function OrganizationSection() {
  return (
    <>
      <div className="form-body">
        <div className="form-item-space flex-col">
          <section className="flex flex-row justify-between w-full">
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="brand" className="text-sm text-slate-500">
                Brand
              </Label>
              <Select name="brand">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={"Select Brand"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Apple">Apple</SelectItem>
                  <SelectItem value="Samsung">Samsung</SelectItem>
                  <SelectItem value="Xiaomi">Xiaomi</SelectItem>
                  <SelectItem value="Huawei">Huawei</SelectItem>
                  <SelectItem value="Nokia">Nokia</SelectItem>
                  <SelectItem value="Oppo">Oppo</SelectItem>
                  <SelectItem value="Vivo">Vivo</SelectItem>
                  <SelectItem value="Realme">Realme</SelectItem>
                  <SelectItem value="JBL">JBL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="category" className="text-sm text-slate-500">
                Category
              </Label>
              <Select name="category">
                <SelectContentWrapper
                  placeholder="Select Category"
                  id={EntityType.CATEGORY}
                />
              </Select>
            </div>
          </section>
          <section className="flex flex-col space-y-5 w-full">
            <div className="flex flex-col gap-y-1 mb-4">
              <Label htmlFor="category" className="text-sm text-slate-500">
                Tag
              </Label>
              <Select>
                {/* <SelectContentWrapper.Child
                  placeholder="Select Tags"
                  id={EntityType.TAGS}
                /> */}
              </Select>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default OrganizationSection;
