"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  submitButtonText: string;
  onSubmit?: (values: FormData) => void;
}

function FloatingSubmitButton({ submitButtonText, onSubmit }: Props) {
  return (
    <div className="fixed bottom-6 left-0 right-0 w-full justify-center">
      <div className="max-w-sm mx-auto mt-8 flex justify-between bg-slate-800 rounded-full overflow-hidden shadow-md">
        <span className="flex">
          <Button type="submit" variant={"link"} className="text-blue-400">
            Save Draft
          </Button>
        </span>
        <span className="flex items-center gap-x-4 px-4">
          <Button type="reset" variant={"link"} className="text-red-400 p-0">
            Cancel
          </Button>
          <Button
            type="submit"
            variant={"link"}
            className="text-white p-0"
            formAction={onSubmit}
          >
            {submitButtonText}
          </Button>
        </span>
      </div>
    </div>
  );
}

export default FloatingSubmitButton;
