function setExpireDate(hour: number) {
  const oneHour = 60 * 60 * 1000;
  return new Date(Date.now() + hour * oneHour);
}

function getExpireDate(stringDate: string) {
  const date = new Date(stringDate);

  return `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}  ${date.getHours()}:${date.getMinutes()}`;
}

export { setExpireDate, getExpireDate };
