"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Nerko_One} from "@next/font/google"
import { Bungee } from "@next/font/google"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string; // Optional image property
    bgColor?: string; // Optional background color property
    textColor?: string; // Optional text color property
    imageClasses?: string; // Optional custom classes for image
    text?: string;
    textPosition?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[300px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[250px] md:h-[100px]"
            style={{
              background: item.bgColor
                ? item.bgColor
                : "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              color: item.textColor || "inherit", // Apply custom text color
            }}
            key={idx}
          >
            <div className="flex flex-col items-start">
              <blockquote className="flex items-center justify-between w-full">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.quote}
                    className={`object-cover mr-4 ${item.imageClasses}`}
                  />
                )}
                <div >
                  <div className="flex flex-col items-end  ">
                  <span className="text-2xl leading-[1.6] text-white mb-2 mr-5">
                    {item.quote}
                  </span>
                  <div className="mt-2 flex flex-col items-end">
                    <span className="text-sm leading-[1.6] font-normal">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal">
                      {item.title}
                    </span>
                    </div>

                  </div>
                </div>
              </blockquote>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
  );
};
