declare namespace HeroOnline {
  export namespace interfaces {
    export interface IEngine {
      start: () => boolean;
    }

    export interface IMap {
      load: (objects: IGameObject[]) => boolean;
    }

    export interface IGameCamera {
      move: (to: IPosition) => void;
    }

    export interface IGameObject {
      get isMoveable(): boolean;
      get isVisible(): boolean;
      get position(): IPosition;

      applyTexture: () => void;
      applyAnimation: () => void;
      draw: () => void;
      boot: () => void;
    }

    export interface ICollisable {
      collision: (position: IPosition) => boolean;
    }

    export interface IMoveable extends ICollisable {
      move: (position: IPosition, rotate: number) => void;
    }

    export interface IAttackable {
      hit: (target: ILiveObject) => void;
      hit: (target: ILiveObject, skill: ISkill) => void;
    }

    export interface ILiveObject extends IGameObject {
      hillPoints: number;
      magicDefense: number;
      physicalDefense: number;
      speed: number;
    }

    export interface IPlayer extends ILiveObject {}

    export interface IPosition {
      x: number;
      y: number;
      rotate: number;
    }

    export type ClearPosition = Omit<IPosition, 'rotate'>;

    export interface IAsset {}
    export interface IAnimation {}
    export interface ISkill {}
  }
}
