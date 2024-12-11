export const hexToRGB = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

export const RGBToHex = ({ r, g, b }: { r: number; g: number; b: number }) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

export const mixColors = (hex1: string, hex2: string) => {
  const color1 = hexToRGB(hex1);
  const color2 = hexToRGB(hex2);
  const mixedR = Math.floor((color1.r + color2.r) / 2);
  const mixedG = Math.floor((color1.g + color2.g) / 2);
  const mixedB = Math.floor((color1.b + color2.b) / 2);
  return RGBToHex({ r: mixedR, g: mixedG, b: mixedB });
}
export const degreesToPiFraction = (degrees: number): string => {
  const piFraction = degrees / 180; // Коефіцієнт перед π

  // Якщо результат ціле число, повертаємо як кратне π
  if (Number.isInteger(piFraction)) {
    return `${piFraction}π`;
  }

  // Знаменник та чисельник для точного відображення
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const numerator = degrees;
  const denominator = 180;
  const divisor = gcd(numerator, denominator);

  // Скорочуємо дріб
  const simplifiedNumerator = numerator / divisor;
  const simplifiedDenominator = denominator / divisor;

  return `${simplifiedNumerator}π/${simplifiedDenominator}`;
}