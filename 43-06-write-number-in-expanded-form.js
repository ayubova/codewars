const expandedForm = num => String(num).split('').map((v, i) => v * Math.pow(10, String(num).length - 1 - i)).filter(c => c).join(' + ')
