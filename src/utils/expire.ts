function setExpireDate(hour: number) {
  const oneHour = 60 * 60 * 1000;
  return new Date(Date.now() + hour * oneHour);
}

export default setExpireDate;
