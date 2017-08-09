const formatTime = (seconds) => {
  const date = new Date(seconds * 1000).toISOString().substr(14, 5);
  return date.toString();
}

export default {
  formatTime: formatTime
}
