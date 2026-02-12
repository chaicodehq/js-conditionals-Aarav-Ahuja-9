/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {

  // I found the below function while googling about javascript, and it is an higher function for now but i got this early.
  let lowerCaseColor = color.toLowerCase(); // We can also use "var" but its legacy, we are in the future we will use new type of variables.

  switch (lowerCaseColor) {
    case "green":
      return "Go"
      break;

    case "yellow":
      return "Slow Down"
      break;

    case "red":
      return "Stop"
      break;
    
    case "flashing red":
      return "Stop and Proceed With Caution"
      break;

    default:
      return "Invalid Signal"
  }
}

console.log(getTrafficAction("red"))