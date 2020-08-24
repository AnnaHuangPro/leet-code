function schedule(urls, k, callback) {
  const sendList = [];
  if (k > urls.length) {
    k = urls.length;
  }
  function send(urls) {
    return fetch(urls.shift())
      .then(value => value)
      .finally(() => {
        if (urls.length) {
          send(urls);
        }
      });
  }
  while (k--) {
    sendList.push(send(urls));
  }
  Promise.all(sendList).then(callback);
}
