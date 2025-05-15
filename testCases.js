{
  "testFunctions": [
    {
      "functionName": "countPrimes",
      "testCases": [
        { "input": [10], "expected": 4 },
        { "input": [0], "expected": 0 },
        { "input": [2], "expected": 0 },
        { "input": [20], "expected": 8 }
      ]
    },
    {
      "functionName": "isCoprime",
      "testCases": [
        { "input": [15, 28], "expected": true },
        { "input": [12, 18], "expected": false },
        { "input": [17, 19], "expected": true },
        { "input": [9, 27], "expected": false }
      ]
    },
    {
      "functionName": "lcmOfArray",
      "testCases": [
        { "input": [[2, 7, 3]], "expected": 42 },
        { "input": [[4, 6]], "expected": 12 },
        { "input": [[5, 10, 15]], "expected": 30 },
        { "input": [[1, 1, 1]], "expected": 1 }
      ]
    },
    {
      "functionName": "isDivisibleBy3or5or11",
      "testCases": [
        { "input": [55], "expected": true },
        { "input": [33], "expected": true },
        { "input": [22], "expected": false },
        { "input": [15], "expected": true },
        { "input": [14], "expected": false }
      ]
    }
  ]
}
