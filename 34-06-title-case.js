const titleCase = (title, minorWords = '') => {
  if (title === '') {
    return '';
  }

  const minorWordsList = minorWords.toLowerCase().split(' ');

  return title.toLowerCase().split(' ').reduce((acc, w, i) => (minorWordsList.includes(w) && i !== 0) ? [...acc, w] :
      [...acc, w[0].toUpperCase() + w.slice(1)], []).join(' ');
};

