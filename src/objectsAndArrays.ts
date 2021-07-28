var person = {firstName: "Leonardo", lastName: "Davinci", age: "37"};
console.log(` \n Person:\n\t Name: "${person.firstName} ${person.lastName}" \n\t Age: ${person.age}`)


//var myArray = [52, 99, 82, 21, 27];
//console.log(myArray[7]);
//console.log(myArray[55]);
//myArray.push(99.32568); 

//console.log(myArray)

var artSupplies: Array<string> = [
    "Paint Brush",
    "Clay",
    "graphite or Charcoal",
    "Carving tools",
    "Canvas",
  ]
console.log(`\n  Favorite mediums: \n`)
  
  artSupplies.forEach((thing, i) => {
    console.log(`${i + 1}. ${thing}`);
  });
  
