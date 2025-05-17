"use client";
import React, { JSX } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { data } from "./interface/datainterface";

const collection: data[] = [
  {
    image: "/demo.jpg",
    pname: "alu",
    price: 200,
  },
  {
    image: "/demo.jpg",
    pname: "tommatar",
    price: 20,
  },
];

export default function Data(): JSX.Element {
  return (
    <>
      <section className="flex justify-center gap-6">
        {collection.map((data) => (
          <div
            key={data.pname}
            className="relative grid w-[15rem] rounded-2xl bg-[#F4631E]"
          >
            <img
              className="w-full h-full rounded-t-2xl"
              src={data.image}
              alt="Demo"
            />
            <div className="text-center">
              <h1 className="font-bold text-[1.7rem] text-white uppercase mb-0 p-0">
                Rs.{data.price} per Kg
              </h1>
              <h2 className="font-semibold text-[1.6rem] mb-2 text-white mt-0 p-0">
                {data.pname}
              </h2>
              <div className="grid gap-2 pb-3">
                <button className="cursor-pointer bg-white mx-3 rounded-[4px] py-2 flex items-center justify-center gap-2">
                  <FiEdit className="text-[#F4631E]" />
                  Edit
                </button>
                <button className="cursor-pointer bg-white mx-3 rounded-[4px] py-2 flex items-center justify-center gap-2">
                  <FiTrash2 className="text-[#F4631E]" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
