/**
 * Encodes a string of repeated characters using the number of chars
 * 
 * @param texto {String} The string to be encoded
 * @returns {String} The encoded string
 */
export const encode = (texto) => {
  const matches = [...texto.matchAll(/([a-zA-Z ])\1*/g)];
  const groups = matches.map(m => m[0]);
  let strEncoded = "";
  groups.forEach(group => {
    group.length === 1 ? strEncoded += group : strEncoded += `${group.length}${group[0]}`;
  });
  return strEncoded;
};

/**
 * Decodes a string that's composed of numbers and a letter
 * 
 * @param texto {String} The string to be decoded
 * @returns {String} The decoded string
 */
export const decode = (texto) => {
  const matches = [...texto.matchAll(/((\d*)([A-Z ]{1}))/gi)];
  const groups = matches.map(m => [m[2], m[3]]);
  
  let strDecoded = "";
  groups.forEach(group => {
      strDecoded += group[1].repeat(group[0] === "" ? 1 : group[0]);
  });
  return strDecoded;
  
};