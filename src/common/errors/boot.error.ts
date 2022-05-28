import { BaseError } from '../../core/error/base.error';

export class BootError extends BaseError {
  constructor(message?: string) {
    super(0, message || 'Cannot boot game engine');
  }
}
