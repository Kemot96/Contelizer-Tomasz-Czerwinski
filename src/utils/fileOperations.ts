const PUNCTUATION_MARKS = [
  '.',
  ',',
  '!',
  '?',
  ';',
  ':',
  '(',
  ')',
  '[',
  ']',
  '{',
  '}',
  '<',
  '>',
  '*',
  '&',
  '•',
  '#',
  '~',
  '@',
  '^',
  '|',
];

export function rearrangeLetters(fileContent: string) {
  const lines = fileContent.split('\n');

  const processedText = lines
    .map((line) => {
      return line
        .split(' ')
        .map((word) => {
          word = word.trim();
          const lastChar = word.slice(-1);

          if (PUNCTUATION_MARKS.includes(lastChar)) {
            const wordPart = word.slice(0, -1);
            const punctuationPart = lastChar;
            return shuffleWord(wordPart) + punctuationPart;
          } else {
            return shuffleWord(word);
          }
        })
        .join(' ');
    })
    .join('\n');
  return processedText;
}

function shuffleWord(word: string) {
  if (word.length <= 3) return word;

  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];

  const middleLetters = word.slice(1, -1).split('');

  for (let i = middleLetters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [middleLetters[i], middleLetters[j]] = [middleLetters[j], middleLetters[i]];
  }

  return firstLetter + middleLetters.join('') + lastLetter;
}