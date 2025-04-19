"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type TimelineItem = {
  id: string;
  name: string;
  description: string;
};

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "step1",
    name: "Your application has been received",
    description:
      "We have received your application and are currently processing it.",
  },
  {
    id: "step2",
    name: "Appointment fee received for appointment",
    description: "Your appointment fee has been successfully received.",
  },
  {
    id: "step3",
    name: "Your appointment has been created for the relevant unit",
    description: "Your appointment has been scheduled with the relevant unit.",
  },
  {
    id: "step4",
    name: "Your documents are being prepared before your appointment date",
    description:
      "Your documents are being prepared before your appointment date.",
  },
  {
    id: "step5",
    name: "Your documents were shipped",
    description: "Your documents were shipped to the consulate.",
  },
];

export function Timeline() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl py-8">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-0.5 w-full bg-purple-700"></div>
        <div className="relative flex w-full justify-between">
          {TIMELINE_ITEMS.map((item, index) => (
            <div key={item.id} className="flex flex-col items-center">
              <div
                className={cn(
                  "z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-700 bg-purple-800 text-white",
                  activeItem === item.id && "border-white bg-purple-700"
                )}
                onMouseEnter={() =>
                  setActiveItem((prev) => (prev === item.id ? null : item.id))
                }
              >
                <span className="absolute text-xs font-semibold text-white">
                  {index + 1}
                </span>
              </div>

              {activeItem === item.id && (
                <div className="absolute top-16 z-20 w-full max-w-xs rounded-lg bg-purple-800 p-4 shadow-lg md:max-w-md">
                  <h3 className="mb-1 text-xl font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
