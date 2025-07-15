// src/components/Card/Card.tsx

import React, { type ReactNode, type HTMLAttributes } from "react";
import './Card.css'; // Vamos criar este arquivo a seguir

// Interface para o Card principal
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// Interface para o conteúdo do Card
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// O componente Card que será exportado
export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}

// O sub-componente CardContent
export function CardContent({ className = "", children, ...props }: CardContentProps) {
  return (
    <div className={`card-content ${className}`} {...props}>
      {children}
    </div>
  );
}