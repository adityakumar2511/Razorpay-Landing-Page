import React from "react";
import innovationData from "./innovationData";

export default function InnovationSection() {
    return (
        <section className="w-full bg-[#f5f8ff] py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
                    We have innovated at every instance, creating a disruption.
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                    {innovationData.map((item) => (
                        <div
                            key={item.id}
                            className={`
                                bg-white rounded-2xl p-8 border border-gray-400
                                shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
                                hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]
                                transition-shadow duration-300
                                ${item.size === "large" ? "lg:col-span-2" : ""}
                            `}
                        >
                            {/* Top Label + Icon */}
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-sm font-semibold text-slate-500">{item.titleTop}</p>
                                <span className="text-xl">{item.icon}</span>
                            </div>

                            {/* Main Heading */}
                            <h3 className="text-[28px] font-bold leading-snug text-slate-900 mb-4">
                                {item.heading}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 mb-6">
                                {item.desc}
                            </p>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <button className="px-6 py-2 bg-[#2251FF] text-white rounded-md font-medium shadow hover:bg-blue-700 transition">
                                    {item.primaryBtn}
                                </button>

                                <button className="text-blue-600 font-medium hover:underline">
                                    {item.secondaryBtn}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
