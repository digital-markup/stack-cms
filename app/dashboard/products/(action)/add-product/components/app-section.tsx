"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

function ApplicationSection() {
  return (
    <>
      <div className="form-body">
        <div className="form-item-space">
          <section className="flex flex-col space-y-5 w-full">
            <div className="flex flex-row w-full justify-between items-start">
              <span className="flex flex-col gap-y-1">
                <Label
                  htmlFor="availability"
                  className="text-sm font-medium text-slate-500"
                >
                  Availability
                </Label>
                <small className="max-w-[290px]">
                  Is this item available in the stock?
                </small>
              </span>
              <Switch name="availability" />
            </div>
            <div className="mb-4">
              <Label htmlFor="stock" className="text-sm text-slate-500">
                Stock
              </Label>
              <Input type="number" name="stock" id="stock" placeholder="0" />
            </div>
            <div className="flex flex-row w-full justify-between items-start">
              <span className="flex flex-col gap-y-1">
                <Label
                  htmlFor="compareAtPrice"
                  className="text-sm font-medium text-slate-500"
                >
                  Compare Products
                </Label>
                <small className="max-w-[290px]">
                  This product visible for comparison with others
                </small>
              </span>
              <Switch name="compareAtPrice" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ApplicationSection;
