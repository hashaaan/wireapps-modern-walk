import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export const capitalize = (str: string) =>
  (str && str[0].toUpperCase() + str.slice(1).toLowerCase()) ?? "";

export const capitalizeWords = (sentence: string) => {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Capitalize the first letter of each word and convert the rest to lowercase
  const capitalizedWords = words.map((word) => {
    // Ensure the word is not empty
    if (word.length > 0) {
      return capitalize(word);
    }
    return "";
  });

  // Join the capitalized words back into a sentence
  return capitalizedWords.join(" ");
};
