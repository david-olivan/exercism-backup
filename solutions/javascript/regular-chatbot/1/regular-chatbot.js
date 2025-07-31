// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  return command.match(/chatbot/i).index === 0;
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  return message.replace(new RegExp('emoji[0-9]{4}', 'gi'), "");
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const msg = {
    regex: /\(\+[0-9]{2}\) [0-9]{3}-[0-9]{3}-[0-9]{3}/,
    success: "Thanks! You can now download me to your phone.",
    failure: `Oops, it seems like I can't reach out to ${number}`,
  };
  
  return msg.regex.test(number) ? msg.success : msg.failure;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  return userInput.match(/([a-z]+\.[a-z]+)/gi);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  return `Nice to meet you, ${
    fullName.replace(/([A-Z][a-z]+\, [A-Z][a-z]+)/g,
                     function(name) {
                       const [a, b] = name.split(", ");
                       return `${b} ${a}`;
                     })}`;
}
