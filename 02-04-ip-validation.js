function isValidIP(str) {
  return str.split('.').every(v => /[0-9]/.test(v) && v <= 255 && v === Number(v).toString()) && str.split('.').length === 4;
}
