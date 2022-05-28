import { LiveObject } from './liveObject.class';

export class Attackable implements HeroOnline.interfaces.IAttackable {
  hit(target: HeroOnline.interfaces.ILiveObject): void;
  hit(target: LiveObject, skill: HeroOnline.interfaces.ISkill): void;

  hit(target: LiveObject, skill?: HeroOnline.interfaces.ISkill): void {
    return void 0;
  }
}
