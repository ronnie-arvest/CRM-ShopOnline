function capitalize () {
  let string = 'привет Мир';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); 
}

console.log(capitalize());