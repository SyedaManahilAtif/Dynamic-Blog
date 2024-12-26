import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="/Animated%20Profile.jpg" // Corrected image path
          alt="Author image"
        />
        <div>
          <h3 className="text-xl font-bold">Syeda Manahil Atif</h3>
          <p className="text-slate-500">Student of matric class</p>
        </div>
      </div>
    </div>
  );
}
