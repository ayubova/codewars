function domainName(url) {
  const adress = url.split('/').filter(v => v.includes('.')).join('').split('.');
  return adress[0] === 'www' ? adress[1] : adress[0];
}
