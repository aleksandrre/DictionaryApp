export const fetchFunction = (word) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(
    (res) => res.json()
  );
};
