"use client";

import { productData } from "@/app/Data";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  let { pid } = useParams();
  let id = productData.find((a) => a.id == pid);
  return (
    <>
      <div className="border rounded-xl m-5">
        <p className="font-semibold text-5xl pt-5 text-center font-sans">{id.title}</p>
        <div className="py-3">
          <img className="py-5" src={id.image} alt="" />
          <p className="pb-2 text-wrap font-serif text-xl">{id.description}</p>
        </div>
      </div>
    </>
  );
}
