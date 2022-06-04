import { Camera } from '../../../src/classes/camera.class';
import chai from 'chai';

const expect = chai.expect;

describe('Camera test', () => {
  const playerPosition: HeroOnline.interfaces.IPosition = {
    rotate: 0,
    x: 500,
    y: 400,
  };

  describe('boot suites', () => {
    it('should boot camera', () => {
      const camera = new Camera();
      camera.boot(playerPosition);

      expect(camera.position.x).to.equal(playerPosition.x / 2);
      expect(camera.position.y).to.equal(playerPosition.y / 2);
      expect((camera as unknown as { _isBoot: boolean })._isBoot).to.equal(
        true,
      );
    });

    it('should unboot camera', () => {
      const camera = new Camera();
      camera.boot(playerPosition);

      camera.unboot();
      expect((camera as unknown as { _isBoot: boolean })._isBoot).to.equal(
        false,
      );
    });

    it('should fail if camera already booted', (done) => {
      const camera = new Camera();
      try {
        camera.boot(playerPosition);
        camera.boot(playerPosition);
      } catch {
        done();
      }
    });

    it('should fail if camera not booted', (done) => {
      const camera = new Camera();

      try {
        camera.unboot();
      } catch {
        done();
      }
    });
  });
});
