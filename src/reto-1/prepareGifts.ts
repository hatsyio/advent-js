export default function prepareGifts(gifts: number[]): number[] {
  const uniqueGifts = [...new Set(gifts)];
  return uniqueGifts.sort((a, b) => a - b);
}
