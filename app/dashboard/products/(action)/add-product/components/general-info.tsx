"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function GeneralInformation() {
  return (
    <div className="form-body">
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <Label
            htmlFor="displayInfo"
            className="text-sm text-slate-500 font-medium"
          >
            Display
          </Label>
          <Input
            type="text"
            id="displayInfo"
            name="displayInfo"
            placeholder="Display Information"
            className="form-control min-w-full"
          />
        </section>
        <section className="flex flex-col space-y-2 w-full">
          <Label
            htmlFor="colors"
            className="text-sm text-slate-500 font-medium"
          >
            Colors
          </Label>
          {/* <SelectMultipleColors /> */}
        </section>
      </div>
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <Label
            htmlFor="storage"
            className="text-sm text-slate-500 font-medium"
          >
            Storage
          </Label>
          <Input
            type="text"
            id="storage"
            name="storage"
            placeholder="Storage Information"
            className="form-control min-w-full"
          />
        </section>
        <section className="flex flex-col space-y-2 w-full">
          <Label
            htmlFor="camera"
            className="text-sm text-slate-500 font-medium"
          >
            Camera
          </Label>
          <Input
            type="text"
            id="camera"
            name="camera"
            placeholder="Camera Information"
            className="form-control min-w-full"
          />
        </section>
      </div>
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <Label
            htmlFor="battery"
            className="text-sm text-slate-500 font-medium"
          >
            Battery
          </Label>
          <Input
            type="text"
            id="battery"
            name="battery"
            placeholder="Battery Capacity Information"
            className="form-control min-w-full"
          />
        </section>
        <section className="flex flex-col space-y-2 w-full">
          <Label
            htmlFor="ramInformation"
            className="text-sm text-slate-500 font-medium"
          >
            RAM
          </Label>
          <Input
            type="text"
            id="ramInformation"
            name="ramInformation"
            placeholder="RAM Information"
            className="form-control min-w-full"
          />
        </section>
      </div>
    </div>
  );
}

export default GeneralInformation;
