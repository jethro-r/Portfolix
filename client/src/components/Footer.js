import React from "react";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <div className="w-[calc(100%-4rem)] h-40 mx-auto flex  bg-cyan-900 mt-12 mb-8 items-center">
      <Logo/>
    </div>
  );
}
