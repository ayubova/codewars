const longestConsec = (strarr, k) => {
    function longestConsec(strarr, k) {
        if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return '';
    }
     return strarr.reduce((result, item, i) => {
        const currString = strarr.slice(i, i + k).join('');
        return (currString.length > result.length)
          ? currString
          : result;
      }, '');
    }