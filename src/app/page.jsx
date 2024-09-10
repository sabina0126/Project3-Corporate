"use client";
import Link from "next/link";
import { productData } from "./Data";
import { brand } from "./brand";

export default function page() {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <img
            className="w-full py-3 h-[500px]"
            src="https://www.coca-cola.com/content/dam/onexp/ie/en/offerings-2024/best-coke-ever/cczs_best_coke_ever_desktop.png"
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="container py-6">
          <h2 className="font-bold font-sans text-4xl text-center pt-20">
            Our Sustainability Goals and Progress 
          </h2>
          <div className="container mx-52 pt-10 flex justify-center w-[70%]">
            {productData.slice(0, 2).map((a) => (
              <div className="border rounded-xl mx-5">
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
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="font-bold font-sans text-5xl text-center pt-20">
            Featured News 
          </h2>
          <div className="container mx-10 pt-10 flex justify-center w-[100%]">
            {productData.slice(2, 5).map((a) => (
              <div className="border rounded-xl mx-5">
                <img
                  className="border rounded-t-lg w-[100%] h-[50%]"
                  src={a.image}
                  alt=""
                />
                <div className="p-5">
                  <p className="font-semibold text-2xl py-5 font-sans">
                    {a.title}
                  </p>
                  <Link href={`/details/${a.id}`}>
                    <h5>Explore more →</h5>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-52 py-5 justify-center w-[70%]">
          {productData.slice(0, 1).map((a) => (
            <div className="flex gap-2 my-5">
              <div className="p-5 w-[50%] border rounded-xl mx-5">
                <p className="font-semibold text-2xl py-5 font-sans">
                  {a.title}
                </p>
                <p className="pb-2 text-wrap font-serif">{a.description}</p>
                <Link href={`/details/${a.id}`}>
                  <h5>Explore more →</h5>
                </Link>
              </div>
              <div className="w-[50%] border rounded-xl mx-5">
                <img
                  className="border w-[100%] rounded-t-lg"
                  src={a.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="container mx-52 py-5 justify-center w-[70%]">
          {productData.slice(1, 2).map((a) => (
            <div className="flex gap-2 my-5">
              <div className="w-[50%] border rounded-xl mx-5">
                <img
                  className="border w-[100%] rounded-t-lg"
                  src={a.image}
                  alt=""
                />
              </div>
              <div className="p-5 w-[50%] border rounded-xl mx-5">
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
      </section>

      <section className="py-10">
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
          <Link href={"/brands"}>
            <button className="border border-black rounded-lg px-16 py-3 text-center ml-60">
              Explore more →
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
