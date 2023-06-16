export function reverseWord(word: string) {
  if (word.length === 0) return "";
  return (
    word[word.length - 1] + reverseWord(word.substring(0, word.length - 1))
  );
}
