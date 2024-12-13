import React from "react";
import AllProducts from "./components/all-products";

function ProductsPage() {
  return (
    <div className="w-full h-full flex-col gap-y-4">
      <header>
        <h1 className="text-sm font-medium text-blue-600">Products</h1>
      </header>
      <div className="w-full flex">
        <AllProducts />
      </div>
    </div>
  );
}

export default ProductsPage;
