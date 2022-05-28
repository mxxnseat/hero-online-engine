import { getContext, querySelector } from '../DOM';
import { assert } from '../error/handler';

export class Canvas {
  private _canvasElement: HTMLCanvasElement;
  private _canvasContext: CanvasRenderingContext2D;

  public get canvas() {
    return this._canvasElement;
  }
  public get context() {
    return this._canvasContext;
  }

  constructor(selector: string) {
    this._boot(selector);
  }

  private _boot(selector: string) {
    const possibleCanvas = querySelector<HTMLCanvasElement>(
      `canvas.${selector}`,
    );

    assert(possibleCanvas);

    this._canvasElement = possibleCanvas;
    this._canvasContext = getContext(possibleCanvas);
  }
}
