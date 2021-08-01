//arrays:
        //1.length_0-9
        //2.array index (n-1)
        //3.for (i=0; i<length-1; i++)

// 1.push : to push an elememt at the end of the Array.
// 2.Pop:to delete/remove an element at the end of an array.
// 3.unshift:to add an element at the beginning of the Array.
// 4.shift:to remove an elememt at the beginning of the Array.
// 5. splice: it will override original array\to add an elememt at the middle of the Array.
// 6.slice- 
// 7. concat:merging two arrays.
// 8. reversing:to reverse the array.

// Iterating over an array:  it is difficult to access more elements and with the help of this we can access more elements 
//                         beyond 100 or more.

var animals=["dog","cat","camel","horse","lion","zebra"];
console.log(animals.length); //length:6
console.log(animals); //to display the entire array
console.log(animals[5]); //index value (6-1=5):zebra

 //push:
 animals.push("donkey","platypus"); //adds at the end
 console.log(animals);
 console.log(animals.length); //8

 //pop:
 animals.pop("platypus");
 console.log(animals); //dog,cat,camel,horse,lion,zebra,donkey
console.log(animals.length);//7

//unshift:
animals.unshift("goat");
console.log(animals);

//shift:
animals.shift();
console.log(animals);

//splice

animals.splice(5,0,"sheep");
console.log(animals);

//concat:merging
var a=[1,4];
var b=[2,3];
var c=a.concat(b);
console.log(c);

//reversing:
animals.reverse();
console.log(animals);

//iterating:
for(i=0; i<=length-1; i++){
        console.log(animals[4]);
}