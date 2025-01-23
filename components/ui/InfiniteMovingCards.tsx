"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { Bungee, Caveat, Courgette, Lilita_One, Nerko_One, Teko } from "@next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "400" });
const Nerko_one = Nerko_One({ subsets: ['latin'], weight: "400" });
const bungee = Bungee({ subsets: ['latin'], weight: "400" });
const teko = Teko({ subsets: ['latin'], weight: "400" });
const caveat = Caveat({ subsets: ['latin'], weight: "400" });
const lilita_one = Lilita_One({ subsets: ['latin'], weight: "400" });
const courgette = Courgette({ subsets: ['latin'], weight: "400" });

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
    imageSize?: string; // New: Size property for image (e.g., "h-16 w-16")
    imageMargin?: string; // New: Margin property for image (e.g., "mr-4")
    bgColor?: string; // Optional background color property
    textColor?: string; // Optional text color property
    imageClasses?: string; // Optional custom classes for image
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      if (scrollerRef.current.childElementCount === scrollerContent.length) {
        // Avoid duplicating if already done
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      setAnimationProperties();
      setStart(true);
    }
  }, [containerRef, scrollerRef]);

  const setAnimationProperties = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  }, [direction, speed]);

  useEffect(() => {
    if (!start) {
      addAnimation();
    }
  }, [start, addAnimation]);

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
            <div className={teko.className}>
              <div className="flex flex-col items-start">
                <blockquote className="flex items-center justify-between   /w-full">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.quote}
                      width={64} // Adjust width and height
                      height={64}
                      className={cn(
                        "object-cover",
                        item.imageSize || "h-16 w-16", // Apply custom image size
                        item.imageMargin || "mr-4", // Apply custom margin
                        item.imageClasses
                      )}
                    />
                  )}
                  <div>
                    <div className="flex flex-col items-end">
                      <span className="text-4xl pr-8 leading-[1.6] text-white mb-2 mr-5">
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
