export function hexToCss(hex: number) {
  const css = hex.toString(16);
  const { length } = css;
  return (
    '#' + (length < 6 ? '0'.repeat(6 - length) + css : css.substring(0, 6))
  );
}
