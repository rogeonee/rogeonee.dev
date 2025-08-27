import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getTransitionName = (name: string, key: string) => {
  return ` ${name.replace("\\n", " ").replace(" ", "-")}-${key}`;
};

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

// append 'th', 'st', 'nd', or 'rd' for the day of the month
export const getDateSuffix = (day: number) => {
  if (day > 3 && day < 21) return "th"; // special case for 11th-13th
  return ["th", "st", "nd", "rd"][day % 10] || "th";
};

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const day = date.getDate();

  return formattedDate.replace(/\d+,/, day + getDateSuffix(day));
};

export const formatDateByTimeZone = (date: Date) => {
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Vancouver",
  });
};

export const formatNumber = (value: number): string => {
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(value);
};

export const catchError = async <T>(promise: Promise<T>): Promise<[undefined, T] | [Error]> => {
  return promise.then((data) => [undefined, data] as [undefined, T]).catch((error) => [error]);
};
