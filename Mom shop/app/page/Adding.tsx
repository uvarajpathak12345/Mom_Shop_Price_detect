"use client";
import React, { useState, useRef } from "react";
import { FaUpload } from "react-icons/fa";
import { Add } from "./interface/AddingInterface";

export default function Adding() {
  const [open, setOpen] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [data, setdata] = useState<Add>({
    Pname: "",
    PricePerKg: 0,
  });

  const toggleDialog = () => setOpen(!open);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Revoke previous URL to prevent memory leaks
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
      const imageUrl = URL.createObjectURL(file);
      setImageFile(file);
      setImagePreview(imageUrl);
    }
  };

  const handleChangePicture = () => {
    setImagePreview(null);
    setImageFile(null);
  };

  return (
    <section className="p-4">
      {/* Add Button */}
      <div
        onClick={toggleDialog}
        className="w-40 h-40 cursor-pointer rounded-3xl border-4 border-dashed border-[#F4631E] bg-orange-50 text-[#F4631E] font-bold text-6xl flex items-center justify-center hover:bg-orange-200 hover:border-orange-500 transition-all duration-300 shadow-md"
      >
        +
      </div>

      {/* Modal Dialog */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8 mx-4">
            {/* Close Button */}
            <button
              onClick={toggleDialog}
              className="cursor-pointer absolute top-4 right-4 text-3xl font-bold text-[#F4631E] hover:text-red-500 transition-all duration-200"
            >
              &times;
            </button>

            <form>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Add New Product
              </h2>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                {/* Image Upload/Preview */}
                <div className="flex flex-col items-center">
                  {imagePreview ? (
                    <div className="flex justify-center items-center border-3 border-dashed border-[#F4631E] rounded-2xl h-48 w-48 bg-orange-50">
                      <img
                        src={imagePreview}
                        alt="Product Preview"
                        className="h-full w-full object-cover rounded-2xl"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center border-3 border-dashed border-[#F4631E] rounded-2xl h-48 w-48 bg-orange-50 hover:bg-orange-100 transition-all duration-200">
                      <label
                        htmlFor="photo"
                        className="flex flex-col items-center cursor-pointer text-gray-600"
                      >
                        <FaUpload className="text-2xl text-[#F4631E] mb-2" />
                        Upload Photo
                      </label>
                      <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                      />
                    </div>
                  )}
                  {imagePreview && (
                    <button
                      type="button"
                      onClick={handleChangePicture}
                      className="mt-4 bg-gray-100 text-[#F4631E] px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
                    >
                      Change Picture
                    </button>
                  )}
                </div>

                {/* Form Fields */}
                <div className="space-y-4 w-full md:w-1/2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="Pname"
                      className="text-sm font-medium text-gray-700 mb-1"
                    >
                      Product Name
                    </label>
                    <input
                      onChange={(e) => {
                        setdata((prev) => ({ ...prev, Pname: e.target.value }));
                      }}
                      value={data.Pname}
                      type="text"
                      id="Pname"
                      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#F4631E] transition-all duration-200"
                      placeholder="Enter product name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="Price"
                      className="text-sm font-medium text-gray-700 mb-1"
                    >
                      Price per Kg
                    </label>
                    <input
                      onChange={(e) => {
                        setdata((prev) => ({
                          ...prev,
                          PricePerKg: parseInt(e.target.value),
                        }));
                      }}
                      value={data.PricePerKg}
                      type="number"
                      id="Price"
                      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#F4631E] transition-all duration-200"
                      placeholder="Enter price"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="cursor-pointer bg-[#F4631E] text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-md"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
