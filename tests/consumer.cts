import * as api from '@lp-labs/cartesian-product';
import { cartesianProduct } from '@lp-labs/cartesian-product';
console.log(
  cartesianProduct([
    ['red', 'blue'],
    ['S', 'M'],
  ]),
);
// @ts-expect-error invalid argument must be rejected by declarations
api.cartesianProduct('not dimensions');
