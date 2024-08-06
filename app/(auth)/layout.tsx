import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-2 border-b text-center">10% off</div>
      {children}
    </div>
  );
}
