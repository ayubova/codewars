const bingo = (ticket, win) => {
  const miniWins = ticket.reduce((result, value) => (value[0].includes(String.fromCodePoint(value[1])) ? result + 1 : result), 0);
  return miniWins >= win ? 'Winner!' : 'Loser!';
};

