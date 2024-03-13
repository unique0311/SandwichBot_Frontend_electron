import React from "react";

const ShortenedWord = ({ word }) => {
  if (!word || word.length === 0) {
    return <span>...</span>;
  }

  const maxLength = 6;
  const ellipsisLength = 4;

  if (word.length <= maxLength + ellipsisLength) {
    return <span>{word}</span>;
  }

  const firstCharacters = word.slice(0, maxLength);
  const lastCaracters = word.slice(-ellipsisLength);

  return (
    <span>
      {firstCharacters}...{lastCaracters}
    </span>
  );
};

export default ShortenedWord;
