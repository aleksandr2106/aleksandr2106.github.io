function delay(timeout) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), timeout);
  });
}

delay(2000)
  .then(() => {
    console.log("2 second passed!");
    return delay(1000);
  })
  .then(() => {
    console.log("3 second passed!");
    return delay(2000);
  })
  .then(() => console.log("5 second passed!"));
