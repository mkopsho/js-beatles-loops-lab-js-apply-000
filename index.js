// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (let counter = 0; counter < 4; counter++) {
    newArray.push(`${musicians[counter]} plays ${instruments[counter]}`);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var newArray = [];
  while (facts) {
    newArray.push(`${facts}!!!`);
    facts++;
  }
  return newArray;
}