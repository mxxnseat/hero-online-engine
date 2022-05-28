import { Camera } from './camera.class';
import { Map as GameMap } from './map.class';

export class GameEngine {
  private readonly _pressedKeys: Map<string, boolean> = new Map();

  constructor(
    objects: HeroOnline.interfaces.IGameObject[],
    private readonly _map: GameMap,
    private readonly _player: HeroOnline.interfaces.IPlayer,
    private readonly _camera: Camera,
  ) {
    this.start(objects);
  }

  public start(objects: HeroOnline.interfaces.IGameObject[]) {
    this._setupKeyboardListeners();

    this._map.load(objects);
  }

  private _setupKeyboardListeners() {
    window.onkeydown = (e: KeyboardEvent) => {
      this._pressedKeys.set(e.code, true);
    };

    window.onkeyup = (e: KeyboardEvent) => {
      const isSet = this._pressedKeys.get(e.code);

      if (isSet) {
        this._pressedKeys.delete(e.code);
      }
    };
  }
}
