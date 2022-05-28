import { StubError } from '../../common/errors/stub.error';
import { BaseError } from './base.error';

export function assert<T extends BaseError>(
  checkedObject: object | string | null | undefined,
  error?: new () => T,
): never | void {
  const checkedTypes = [null, '', undefined];

  if (checkedTypes.find((type) => checkedObject === type)) {
    if (!error) {
      throw new StubError();
    }

    throw new error();
  }
}
