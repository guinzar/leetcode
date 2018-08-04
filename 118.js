// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  var triangle = [[1], [1, 1]];
  for (var i = 3; i <= numRows; i++) {
      var newRow = [1];
      for (var n = 1; n < i - 1; n++) {
          newRow.push(triangle[i - 2][n - 1] + triangle[i - 2][n]);
      }
      newRow.push(1);
      triangle.push(newRow);
  }
  return triangle;
};
