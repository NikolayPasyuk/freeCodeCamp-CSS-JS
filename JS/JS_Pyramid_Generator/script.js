const count = 8;
const character = "#";
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1)
    + " ".repeat(rowCount - rowNumber);
}

// TODO: Change this to a while loop

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  }
}

/*
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}
*/

/*
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count))
}
*/

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);