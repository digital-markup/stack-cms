import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductForm from "./components/product-form";

export default function AddProduct() {
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
      <div className="w-full">
        <ProductForm />
      </div>
    </div>
  );
}
