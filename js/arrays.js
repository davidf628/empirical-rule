/******************************************************************************
 * Shuffles an array into a randomized order.
 * 
 */

export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

/******************************************************************************
 * Sorts an array of numbers into ascending order.
 * 
 */

export function sort(list) { 
    return list.sort(function(a, b) { return a - b; }); 
}

/******************************************************************************
 * Sorts an array of numbers into descending order.
 * 
 */

export function sortD(list) { 
    return list.sort(function(a, b) { return b - a; }); 
}