//float értéket ad vissza egy string összefűzés és parse után, célja az egyszerűbb bruttóár számolása
module.exports.vat = (percentage) => {
  if (percentage >= 100 || percentage <= 0) {
    return 0;
  }
  const numString = 1 + "." + percentage.toString();
  return parseFloat(numString);
};
