import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const bosnianFormatter = new Intl.NumberFormat('bs-BA', {
  style: 'currency',
  currency: 'BAM',
  minimumFractionDigits: 2,
});

export const kmFormatter = new Intl.NumberFormat('bs-BA', {
  style: 'currency', 
  currency: 'BAM', 
});

