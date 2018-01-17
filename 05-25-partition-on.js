// Write a function which partitions a list of items based on a given predicate.

// After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

// NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.

// For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items.


const partitionOn = (pred, items) => {
  const f = items.filter(v => !pred(v));
  const t = items.filter(e => pred(e));
  items.splice(0); items.push(...f); items.push(...t);
  return f.length;
};
