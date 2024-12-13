"use client";

import { useState } from "react";
import { ArrowLeft, HelpCircle, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";

export default function AddProduct() {
  const [images, setImages] = useState<string[]>([]);

  return (
    <div className="container mx-auto px-6">
      <div className="mb-8">
        <Link
          href="/dashboard/products"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to product list
        </Link>
        <h1 className="mt-2 text-2xl font-bold">Add New Product</h1>
      </div>

      <div>
        <form className="space-y-8">
          {/* Description Section */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold">Overview</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="productName">Product Name</Label>
                  <Input id="productName" placeholder="Enter product name" />
                </div>
                <div>
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                    className="min-h-[150px]"
                  />
                </div>
              </div>
            </div>

            {/* Product Images Section */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Product Images</h2>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <Card className="aspect-square flex items-center justify-center border-dashed">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                  </div>
                </Card>
                {images.map((image, index) => (
                  <Card key={index} className="aspect-square relative">
                    <Image
                      src={image}
                      alt={`Product image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Category Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Category</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <Label>Product Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="health">Health & Medicine</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Shipping Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Shipping and Delivery
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <Label>Items Weight</Label>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="0.00" />
                  <Select defaultValue="kg">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="lb">lb</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Package Size</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Input type="number" placeholder="Length" />
                  </div>
                  <div>
                    <Input type="number" placeholder="Width" />
                  </div>
                  <div>
                    <Input type="number" placeholder="Height" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Inventory Section */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold mb-4">Pricing</h2>
              <div className="grid gap-4">
                <div>
                  <Label>Price</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">$</span>
                    <Input type="number" placeholder="0.00" />
                  </div>
                </div>
                <div>
                  <Label>Compare at Price</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">$</span>
                    <Input type="number" placeholder="0.00" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Inventory</h2>
              <div className="grid gap-4">
                <div>
                  <Label>Quantity</Label>
                  <Input type="number" />
                </div>
                <div>
                  <Label>SKU (Optional)</Label>
                  <Input placeholder="Enter SKU" />
                </div>
              </div>
            </div>
          </div>

          {/* Selling Type Section */}
          <div className="h-full pt-5">
            <h2 className="text-lg font-semibold mb-4">Selling Type</h2>
            <RadioGroup defaultValue="in-store">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in-store" id="in-store" />
                <Label htmlFor="in-store">In-store selling only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online">Online selling only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="both" id="both" />
                <Label htmlFor="both">Available both in-store and online</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4">
            <Button variant="outline">Discard</Button>
            <Button variant="outline">Schedule</Button>
            <Button>Add Product</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
