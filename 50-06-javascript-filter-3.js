

function searchNames(logins) {

  const usernames = logins.filter(v => v[0] === '.' || v.slice(-1) === '.')
    .map(e => (e[0] === '.' ? e.slice(1) : e.slice(0, -1)));


  return logins.filter(value => usernames.find(e => value.slice(0, value.indexOf('@')).includes(e)) && value.includes('@'));
}

