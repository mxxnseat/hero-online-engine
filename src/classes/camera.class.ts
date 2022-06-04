import { BootError } from '../common/errors/boot.error';

export class Camera implements HeroOnline.interfaces.IGameCamera {
  private _position: HeroOnline.interfaces.ClearPosition =
    null as unknown as HeroOnline.interfaces.ClearPosition;
  private _isBoot = false;

  public get position() {
    return this._position;
  }

  public unboot() {
    if (!this._isBoot) {
      throw new BootError(
        'Cannot unboot camera, because it already not booted',
      );
    }

    this._position = null as unknown as HeroOnline.interfaces.ClearPosition;
    this._isBoot = false;
  }

  public boot(playerPosition: HeroOnline.interfaces.IPosition) {
    if (this._isBoot) {
      throw new BootError('Cannot boot camera twice');
    }

    const cameraPositionX = playerPosition.x / 2;
    const cameraPositionY = playerPosition.y / 2;

    this._position = {
      x: cameraPositionX,
      y: cameraPositionY,
    };

    this._isBoot = true;

    return void 0;
  }

  public move(to: HeroOnline.interfaces.IPosition): void {
    this._position.x += to.x;
    this._position.y += to.y;

    return void 0;
  }
}
