"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "../utils/schema";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import ProductInfoFormSection from "./product-info";
import GeneralInformation from "./general-info";
import OtherInfo from "./other-info";
import ProductUploadModal from "./upload/product-upload";
import UploadVariations from "./upload/upload-variations";
import ApplicationSection from "./app-section";
import OrganizationSection from "./org-section";
import FloatingSubmitButton from "@/components/button-groups/floating-button";

function ProductForm() {
  const [tags, setTags] = React.useState<string[]>([]);
  const [storage, setStorage] = React.useState<string[]>([]);
  const [colors, setColors] = React.useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      sku: "",
      product_description: "",
      category: "",
      tags: [],
      type: "",
      brand: "",
      display_info: "",
      storage: [],
      camera: "",
      battery: "",
      colors: [],
      ram_information: "",
      availability: true,
      stock: 0,
      compare_at_price: false,
      feature_image: { url: "", alt: "" },
      images: [{ url: "", alt: "" }],
      variations: [],
      services: [],
      additional_information: {},
    },
  });

  function onSubmitHandler(values: FormData) {
    console.log(values);
    // Implement your form submission logic here
  }
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <form>
        <div className="w-full grid xl:grid-cols-[1fr_430px] gap-x-5 gap-4 mt-12">
          <div className="flex flex-col gap-y-4">
            <div className="card-layout">
              <header className="w-full h-10 px-6 pb-3 flex justify-between items-center border-b">
                <h3 className="text-base font-medium">Product Info</h3>
              </header>
              <ProductInfoFormSection />
              {/* general details section */}
              <GeneralInformation />
            </div>
            <div className="card-layout">
              <header className="w-full h-10 px-6 pb-3 flex justify-between items-center border-b">
                <h3 className="text-base font-medium">Other Details</h3>
              </header>
              {/* other details section */}
              <OtherInfo />
            </div>
            <div className="card-layout">
              <header className="w-full h-10 px-6 pb-3 flex justify-between items-center border-b">
                <h3 className="text-base font-medium">
                  Upload Product Variations
                </h3>
                <ProductUploadModal />
              </header>
              <UploadVariations />
            </div>
          </div>
          <div className="sticky top-8 h-screen overflow-auto">
            <div className="flex flex-col gap-y-4">
              <div className="card-layout">
                <header className="w-full h-10 px-6 pb-3 flex justify-between items-center border-b">
                  <h3 className="text-base font-medium">Application</h3>
                </header>
                <ApplicationSection />
              </div>
              <div className="card-layout">
                <header className="w-full h-10 px-6 pb-3 flex justify-between items-center border-b">
                  <h3 className="text-base font-medium">Organization Info</h3>
                </header>
                <OrganizationSection />
              </div>
            </div>
          </div>
        </div>
        <FloatingSubmitButton
          submitButtonText="Save Product"
          onSubmit={onSubmitHandler}
        />
      </form>
    </div>
  );
}

export default ProductForm;
