const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {

  setTimeout(() => {
    console.log(char);
  }, delay);
  delay += 50;
}