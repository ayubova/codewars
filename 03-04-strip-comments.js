const solution = (input, markers) => {
  const arr = input.split('\n');
  
  const deleteComment = (arr) => {
    const index = arr.findIndex(v => markers.includes(v));
    return arr.slice(0, index === -1 ? arr.length : index).join('').trim();
  };

  return arr.map(c => deleteComment(c.split(''))).join('\n');
};
