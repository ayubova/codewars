const onlyDuplicates = str => str.split('').filter(e => str.indexOf(e) !== str.lastIndexOf(e)).join('');
