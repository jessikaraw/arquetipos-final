// src/components/Progress/Progress.tsx

import React, { type HTMLAttributes } from "react";
import './Progress.css'; 

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
}

export default function Progress({ value = 0, className = "", ...props }: ProgressProps) {
  return (
    <div className={`progress-container ${className}`} {...props}>
      <div className="progress-indicator" style={{ width: `${value}%` }}></div>
    </div>
  );
}