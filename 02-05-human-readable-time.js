function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);

  const minutes = Math.floor((seconds - hours * 3600) / 60);

  const secs = seconds - hours * 3600 - minutes * 60;

  const toRightFormat = time => (time < 10 ? `0${time}` : `${time}`);


  return `${toRightFormat(hours)}:${toRightFormat(minutes)}:${toRightFormat(secs)}`;
}
