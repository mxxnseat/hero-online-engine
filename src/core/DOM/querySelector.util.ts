export function querySelector<T extends Element = Element>(
  selector: string,
): T {
  return document.querySelector<T>(selector) as T;
}
