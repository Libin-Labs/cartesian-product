export function cartesianProduct<T>(dimensions: readonly (readonly T[])[], limit = 100000): T[][] {
  if (!Array.isArray(dimensions) || dimensions.some((d) => !Array.isArray(d)))
    throw new TypeError('Expected array dimensions');
  if (!Number.isSafeInteger(limit) || limit < 0 || limit > 1000000)
    throw new RangeError('Invalid result limit');
  let result: T[][] = [[]];
  for (const dimension of dimensions) {
    if (!dimension.length) return [];
    if (result.length * dimension.length > limit)
      throw new RangeError('Product exceeds result limit');
    const next: T[][] = [];
    for (const prefix of result) for (const value of dimension) next.push([...prefix, value]);
    result = next;
  }
  return result;
}
