const countBits = x => x.toString(2).split('').reduce((acc, v) => (v === '1') ? (acc + 1) : acc, 0);
