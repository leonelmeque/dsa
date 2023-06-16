export function capitalizeFirst(words: string[]): string[] {
  let output = [];

  if (words.length === 0) return output;

  const first = words[0][0].toUpperCase();
  const rest = words[0].substring(1);

  output.push(first + rest);
  output = output.concat(capitalizeFirst(words.slice(1)));

  return output;
}
