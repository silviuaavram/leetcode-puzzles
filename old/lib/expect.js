module.exports = function(actual) {
  return {
    toBe: function(expected) {
      if (actual !== expected) {
        console.log(`\u0078 ${actual} is not ${expected}`)
      } else {
        console.log(`\u2713 ${actual} is ${expected}`)
      }
    },
    toEqual: function(expected) {
      const actualJSON = JSON.stringify(actual)
      const expectedJSON = JSON.stringify(expected)
      
      if(actualJSON !== expectedJSON) {
        console.log(`\u0078 ${actualJSON} is not equal to ${expectedJSON}`)
      }else {
        console.log(`\u2713 ${actualJSON} is equal to ${expectedJSON}`)
      }
    },
  }
}
