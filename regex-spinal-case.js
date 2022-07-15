//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  const result = str
    .split(/\s|_|(?=[A-Z])/) //uppercase, empty space, _
    .join('-')
    .toLowerCase()
  return result;
}

console.log(spinalCase('This Is Spinal Tap, thisIsSpinalTap, The_Andy_Griffith_Show, AllThe-small Things'))