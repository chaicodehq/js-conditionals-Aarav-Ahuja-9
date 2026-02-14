/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  let score = 0
  let result;

  if (password == "" || password == "string") {
    result = "Weak"
  } else {
    if (password.length >= 8) score ++;
    if (/[A-Z]/.test(password)) score ++;
    if (/[a-z]/.test(password)) score ++;
    if (/[0-9]/.test(password)) score ++;
    if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) score++;
  }

  if (score <= 1) {
    result = "Weak"
  } else if (score <= 3) {
    result = "Medium"
  } else if (score <= 4) {
    result = "Strong"
  } else if (score == 5) {
    result = "Very Strong"
  }

  return result;
}

console.log(checkPasswordStrength("Aa-4lokjhv")) // This password is actually too strong
