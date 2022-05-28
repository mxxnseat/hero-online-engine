export class Camera implements HeroOnline.interfaces.IGameCamera {
  public get position() {
    return this._position;
  }

  constructor(private _position: HeroOnline.interfaces.IPosition) {}

  move(to: HeroOnline.interfaces.IPosition): void {
    return void 0;
  }
}
