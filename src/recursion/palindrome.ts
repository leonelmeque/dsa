import { reverseWord } from "./reverse_word";

export function isPalindrome(word: string): boolean {
  let newWord = reverseWord(word);

  return newWord === word;
}
