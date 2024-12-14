"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { MultipleProductUploaderModal } from "./upload/product-upload";

function ProductInfoFormSection() {
  return (
    <div className="flex px-6 py-4 flex-col gap-y-3 mb-1 border-b">
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <Label htmlFor="title" className="text-sm text-slate-500 font-medium">
            Title
          </Label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Product Title"
          />
        </section>
        <section className="flex flex-col space-y-2">
          <Label htmlFor="SKU" className="text-sm text-slate-500 font-medium">
            SKU
          </Label>
          <Input type="text" id="title" name="sku" placeholder="Product SKU" />
        </section>
      </div>
      <div className="w-full h-full flex flex-col space-y-2 mb-4">
        <Label htmlFor="title" className="text-sm text-slate-500 font-medium">
          Product Images
        </Label>
        {/* <ProductMediaUpload /> */}
        <section className="flex flex-col border rounded-lg bg-blue-50 space-y-3 justify-center items-center w-full min-h-[400px] max-h-[450px]">
          <Image
            src={"/img/images-gallery.png"}
            alt="File"
            width={100}
            height={100}
            className="object-contain w-[100px] h-[100px]"
            priority
          />
          <div className="text-lg text-slate-500 flex flex-col gap-y-1 items-center">
            Add images relevant to the product
            <div className="flex">
              <small className="text-blue-500">
                File types supported: png, jpg, jpeg
              </small>
              <small>Max file size: 5MB</small>
            </div>
          </div>
          <MultipleProductUploaderModal />
        </section>
      </div>
      <div className="form-item-space">
        <section className="flex flex-col space-y-2 w-full">
          <Label
            htmlFor="description"
            className="text-sm text-slate-500 font-medium"
          >
            Product Description
          </Label>
          <Textarea
            id="description"
            name="productDescription"
            className="form-control"
            rows={7}
          />
        </section>
      </div>
    </div>
  );
}

export default ProductInfoFormSection;
