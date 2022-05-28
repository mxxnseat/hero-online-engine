export function getContext(canvas: HTMLCanvasElement) {
  return canvas.getContext('2d') as CanvasRenderingContext2D;
}
