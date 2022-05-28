export abstract class GameObject implements HeroOnline.interfaces.IGameObject {
  public get isMoveable(): boolean {
    return this._isMoveable;
  }
  public get isVisible(): boolean {
    return this._isVisible;
  }

  public get position(): HeroOnline.interfaces.IPosition {
    return this._position;
  }

  public get texture(): HeroOnline.interfaces.IAsset {
    return this._texture;
  }

  public get animation(): HeroOnline.interfaces.IAnimation {
    return this._animation;
  }

  constructor(
    protected _isMoveable: boolean,
    protected _isVisible: boolean,
    protected _position: HeroOnline.interfaces.IPosition,
    protected _texture: HeroOnline.interfaces.IAsset,
    protected _animation: HeroOnline.interfaces.IAnimation,
  ) {}

  public applyAnimation(): void {
    return void 0;
  }

  public applyTexture(): void {
    return void 0;
  }

  public draw(): void {
    return void 0;
  }
}
