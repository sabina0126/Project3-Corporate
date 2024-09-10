"use client"

import { productData } from "@/app/Data";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  let { id } = useParams();
  let cat = productData.filter((a) => a.category == id);
  return (
    <>
      <div className="container mx-auto pt-10 flex flex-wrap w-[90%]">
            {cat.map((a) => (
              <div className="border rounded-xl m-5">
                <img className="border rounded-t-lg" src={a.image} alt="" />
                <div className="p-5">
                  <p className="font-semibold text-2xl py-5 font-sans">
                    {a.title}
                  </p>
                  <p className="pb-2 text-wrap font-serif">{a.description}</p>
                  <Link href={`/details/${a.id}`}>
                    <h5>Explore more →</h5>
                  </Link>
                </div>
              </div>
            ))}
          </div>
    </>
  );
}

export default page;
