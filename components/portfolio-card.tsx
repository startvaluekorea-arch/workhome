"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PortfolioItem } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative"
    >
      <Link href={`/portfolio/${item.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
          <img
            src={item.images.cover}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
                {item.category}
              </p>
              <h3 className="text-xl font-serif mb-4 leading-tight">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-zinc-300 font-medium">
                View Project <ExternalLink className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
      
      {/* Footer Info (Visible on small screens or always for accessibility) */}
      <div className="mt-4 px-2">
        <h4 className="text-zinc-900 font-bold text-lg line-clamp-1">{item.title}</h4>
        <p className="text-zinc-500 text-sm mt-1">{item.category}</p>
      </div>
    </motion.div>
  );
}
