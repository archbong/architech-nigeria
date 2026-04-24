import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SITE_NAME = "Architech Nigeria"
export const SITE_URL = "https://architech.ng"
export const CONTACT_EMAIL = "hello@architech.ng"