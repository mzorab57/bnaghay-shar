import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to conditionally merge Tailwind CSS class names
export function cn(...classes) {
  return twMerge(clsx(...classes));
}
