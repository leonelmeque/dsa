type CapitalizeWords = (args: string[]) => string[];

export const capitalizeWords: CapitalizeWords = (words) => {
  let output: string[] = [];

  if (words.length === 0) return output;

  output = output.concat(
    words[0].toUpperCase() + capitalizeWords(words.slice(1))
  );

  return output;
};
