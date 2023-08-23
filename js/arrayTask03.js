'use strict';

function addPrefix(arr, prefix) {
  const result = [];
  
  for (const name of arr) {
    if (name.includes(' ')) {
      result.push(`${prefix}. ${name}`);
    } else {
      result.push(`${prefix} ${name}`);
    }
  }
  
  return result;
}

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const prefixedNames = addPrefix(names, 'Mr');

console.log(prefixedNames);