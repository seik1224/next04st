"use client";
import React from "react";
import { insertSampleData } from "@/app/_server/insert";
import Link from "next/link";

interface InsertButtonProps {
  category: string;
}

const InsertButton = ({ category }: InsertButtonProps) => {
  return (
    <Link
      href="#"
      onClick={() => insertSampleData(category)}
      className="block rounded-lg bg-black px-6 py-3 text-center text-lg font-bold text-white hover:bg-[--mc-400]"
    >
      데이터삽입
    </Link>
  );
};

export default InsertButton;
