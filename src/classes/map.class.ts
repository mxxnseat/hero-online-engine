import { Canvas } from '../core/canvas';
import { GameObjectFabric } from '../core/fabric/gameObject.fabric';
import { GameObject } from './gameObject.class';

export class Map implements HeroOnline.interfaces.IMap {
  public get isLoad() {
    return this._isLoad;
  }
  private _gameObjects: GameObject[];

  constructor(
    private _isLoad: boolean,
    private readonly _staticCanvas: Canvas,
    private readonly _redrawCanvas: Canvas,
    private readonly _gameObjectFactory: GameObjectFabric,
  ) {}

  load(objects: HeroOnline.interfaces.IGameObject[]) {
    this._gameObjects = objects.map((gameObject) => {
      return this._gameObjectFactory.boot(gameObject);
    });

    return false;
  }
}
