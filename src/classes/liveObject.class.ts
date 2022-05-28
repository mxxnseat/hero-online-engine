import { GameObject } from './gameObject.class';

export class LiveObject
  extends GameObject
  implements HeroOnline.interfaces.ILiveObject
{
  public get hillPoints() {
    return this._hillPoints;
  }

  public get magicDefense() {
    return this._magicDefense;
  }

  protected set magicDefense(value: number) {
    this._magicDefense = value;
  }

  public get physicalDefense() {
    return this._physicalDefense;
  }

  protected set physicalDefense(value: number) {
    this._physicalDefense = value;
  }

  public get speed() {
    return this._speed;
  }

  protected set speed(value: number) {
    this._speed = value;
  }

  constructor(
    protected _hillPoints: number,
    protected _magicDefense: number,
    protected _physicalDefense: number,
    protected _speed: number,
    protected _isMoveable: boolean,
    protected _isVisible: boolean,
    protected _position: HeroOnline.interfaces.IPosition,
    protected _texture: HeroOnline.interfaces.IAsset,
    protected _animation: HeroOnline.interfaces.IAnimation,
  ) {
    super(_isMoveable, _isVisible, _position, _texture, _animation);
  }

  protected set hillPonts(value: number) {
    this._hillPoints = value;
  }
}
