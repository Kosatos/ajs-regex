export default class Validator {
  static validateUsername(username) {
    if (
      /^[^\d-_][\w-]+[^\d-_]$/.test(username) && !/\d{4,}/.test(username)) {
      return username;
    }
    throw new Error(`
      - Only Latin letters, dashes, underscores _ and numbers (0-9) are allowed.
      - The name must not contain more than three digits in a row, or begin or end with numbers, underscores, or dashes.`);
  }

  static validateMobile(mobile) {
    const number = mobile.replace(/[\s\-()]/g, '');

    if (number.length > 13 || number.length < 11) {
      throw new Error(`An invalid number ${mobile} was entered`);
    }

    if (number.length === 12 && !/\+/.test(number)) {
      return number.replace(/(^\d)/, '+$1');
    }
    if (
      (number.length === 12 && /\+/.test(number)) || number.length === 11) {
      return number.replace(/^([^+]|8)/g, '+7');
    }
    return number;
  }
}
