import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function OtherInfo() {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const onClickHandler = () => {
    // add the info to the store
    // if (title && description) setInfo(title, description);

    // clear the input fields
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <div className="w-full h-full flex px-2 py-3 flex-col gap-y-3 mb-1">
        <div className="form-item-space flex-col mb-1 px-4">
          <section className="flex flex-col space-y-2.5 w-full">
            <Label htmlFor="displayInfo" className="text-sm text-slate-500">
              Title
            </Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title Information"
              className="max-w-screen-sm"
            />
          </section>
          <section className="flex flex-col space-y-2.5 w-full">
            <Label htmlFor="displayInfo" className="text-sm text-slate-500">
              Description
            </Label>
            <Textarea
              id="displayInfo"
              rows={7}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </section>
          <div className="w-full flex justify-start">
            <Button
              type="button"
              variant={"secondary"}
              className="w-[150px]"
              onClick={onClickHandler}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherInfo;
