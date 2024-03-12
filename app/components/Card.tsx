import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-[#FEFFFF] rounded-lg overflow-hidden p-4 ${className}`}>
      {children}
    </div>
  );
}
