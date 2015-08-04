var i = 0
  , t = 0
  , n = 100;

// This loop adds all numbers from 1 to 10 excluding 5.
loop:
for (; i < n; i += 1) {
  if (i === 5 ) { continue loop; }
  if (i === 11) { break loop; }
  t += i;
}
console.log("1 + 2 + 3 + 4 + 6 + 7 + 8 + 9 + 10 = " + t);
