import { BaseError } from '../../core/error/base.error';

export class StubError extends BaseError {
  constructor() {
    super(0, 'unknown');
  }
}
