import React from "react";
import Image from "next/image";
import FilterBar from "@/components/productcomp/FilterBar";
import ProductListing1 from "@/components/productcomp/Listing1";
import ProductListing2 from "@/components/productcomp/Listing2";
import ProductListing from "@/components/Listing";

const Products = () => {
  return (
    <div>
      <Image
        src={"/allproducts.png"}
        alt="All products"
        width={1440}
        height={209}
      />
      <main className="pt-[10px]">
        <FilterBar />
      </main>
      <main className="pt-[10px]">
        <ProductListing1 />
      </main>
      <main className="pt-[10px]">
        <ProductListing2 />
      </main>
      <main className="pt-[10px]">
        <ProductListing />
      </main>
    </div>
  );
};

export default Products;
