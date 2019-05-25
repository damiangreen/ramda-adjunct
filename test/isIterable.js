import { assert } from 'chai';

import * as RA from '../src';

// Notice: BigInt64Array and BigUint64Array should be added to this list once they are supported by RA's node version

describe('isIterable', function() {
  context('given the item is an array with items', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(['arrays', 'are', 'iterable']));
    });
  });

  context('given the item is a non-empty string', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable('strings are iterable, too'));
    });
  });

  context('given the item is an empty array', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable([]));
    });
  });

  context('given the item is an empty string', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(''));
    });
  });

  context('given the item is a Map', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Map()));
    });
  });

  context('given the items is a Set', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Set()));
    });
  });

  context('given the item is an Int8Array', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Int8Array()));
    });
  });

  context('given the item is a Uint8Array', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Uint8Array()));
    });
  });

  context('given the item is a Uint8ClampedArray', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Uint8ClampedArray()));
    });
  });

  context('given the item is an Int16Array', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Int16Array()));
    });
  });

  context('given the item is a Uint16Array', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Uint16Array()));
    });
  });

  context('given the item is an Int32Array', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Int32Array()));
    });
  });

  context('given the item is a Uint32Array', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Uint32Array()));
    });
  });

  context('given the item is a Float32Array', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Float32Array()));
    });
  });

  context('given the item is a Float64Array', function() {
    specify('returns true', function() {
      assert.isTrue(RA.isIterable(new Float64Array()));
    });
  });

  context('given the item is a custom iterable', function() {
    specify('returns true', function() {
      const myCustomIterable = {
        *[Symbol.iterator]() {
          yield 1;
          yield 2;
          yield 3;
        },
      };
      assert.isTrue(RA.isIterable(myCustomIterable));
    });
  });

  context('given the item is the yeild of a generator function', function() {
    specify('returns true', function() {
      assert.isTrue(
        RA.isIterable(
          (function*() {
            yield 1;
            yield 2;
            yield 3;
          })()
        )
      );
    });
  });

  context('given the item is a generator function', function() {
    specify('returns false', function() {
      assert.isFalse(
        RA.isIterable(function*() {
          yield;
        })
      );
    });
  });

  context('given the item is a function', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(() => {}));
    });
  });

  context('given the item is an object with properties', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable({ not: 'plain objects' }));
    });
  });

  context('given the item is an empty object', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable({}));
    });
  });

  context('given the item is an object with no prototype chain', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(Object.create(null)));
    });
  });

  context('given the item is a Promise', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(new Promise(() => {})));
    });
  });

  context('given the item is a WeakMap', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(new WeakMap()));
    });
  });

  context('given the item is a WeakSet', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(new WeakSet()));
    });
  });

  context('given the item is a Symbol', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(Symbol('Ziltoid the Omniscient')));
    });
  });

  context('given the item is NaN', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(NaN));
    });
  });

  context('given the item is Infinity', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(Infinity));
    });
  });

  context('given the item is -0', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(-0));
    });
  });

  context('given the item is `true`', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(true));
    });
  });

  context('given the item is `false`', function() {
    specify('returns false', function() {
      assert.isFalse(RA.isIterable(false));
    });
  });
});
