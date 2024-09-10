import React from 'react'
import { brand } from '../brand'

export default function page() {
  return (
    <>
       <section className="py-5">
        <div className="container mx-56 w-[60%]">
          <h2 className="font-bold font-sans text-5xl text-center pt-20">
            Explore Our Brand
          </h2>
          <div className="container flex justify-center flex-wrap py-5">
            {brand.map((a) => (
              <div className=" border rounded-lg mx-5 my-5">
                <img className="w-[100%] p-5" src={a.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
