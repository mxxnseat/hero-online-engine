export class Collisable implements HeroOnline.interfaces.ICollisable {
  collision(position: HeroOnline.interfaces.IPosition) {
    return false;
  }
}
