/**
*/
export const reverseString = (text) => {
  const arrText = text.split("");
  let newText = "";
  for (let i = arrText.length; i > 0; i--) {
    newText += arrText[i - 1];
  }
  return newText;
};
