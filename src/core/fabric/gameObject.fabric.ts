import { GameObject } from '../../classes';

export abstract class GameObjectFabric {
  abstract create(payload: HeroOnline.interfaces.IGameObject): GameObject;

  public boot(payload: HeroOnline.interfaces.IGameObject) {
    const gameObject = this.create(payload);
    gameObject.boot();
    return gameObject;
  }
}
