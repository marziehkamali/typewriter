const sentence = "hello there from lighthouse labs";
let timeOut = 0;
for(const char of sentence) {
  timeOut = timeOut + 50
  setTimeout(() => {
    process.stdout.write(char);
  }, timeOut)
};