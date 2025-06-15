// function pleceOrder(foodItem) {
//   return new Promise((resolve, reject) => {
//     console.log(` Checking availability for  : ${foodItem}`);

//     setTimeout(() => {
//       const inStock = foodItem === "pizza";

//       if (inStock) {
//         resolve(` your ${foodItem} is being prepared`)
//       }
//       else{
//         reject(`sorry ${foodItem} is not available`)
//       }
//     }, 2000);
//   });
// }

// pleceOrder( "pizza")
// .then((message)=>{
//   console.log( " Success : ",message )
//   return"Order is on the way ..."
// })
// .then((nextStap)=>{
//   console.log(nextStap)
// })
// .catch((error)=>{
//   console.log( "Error : ",error)
// })
// .finally(()=>{
//   console.log( " thanks for visiting .....")
// })

// function fechdata(){
//   let url = "https://jsonplaceholder.typicode.com/users"
//    fetch(url)
//    .then((reponse)=>{
//     return reponse.json()
//    })
//    .then((data)=>{
//     console.log("data",data)
//    })
//    .catch((error)=>{
//     console.log(error)
//    })
  
   
// }
// fechdata();

// const number =[1,2,3,4];
//   let sum =number.reduce((acc ,num)=> {
//      return acc + num;
//   },0)

// console.log(sum)

//  const arr1 = [1,2,3,4];
//  const arr2 = [...arr1,4,5]
//  console.log( arr2);


//   let ff =function (...number){
//   return  number.reduce((acc, num)=>{
//     return acc+num
//   },0);
//  }
//   console.log(ff(1,2,3,4));

//   let ff = function (...number) {
//   return number.reduce((acc, num) => {
//     return acc + num;
//   }, 0);
// };

// console.log(ff(1, 2, 3, 4));

// let fff = (...number)=> number.reduce((acc,num)=> acc+num , 0)
// console.log(fff(1,2,3,4))

// async function fetchData() {
//   let respones = await fetch("https://jsonplaceholder.typicode.com/users")
//   let data = await respones.json();
//   console.log("data",data) 
// } 
// fetchData();


// const user ={
//  name : "",
//  greet : function(message){
//   console.log(`${message} ${this.name}`)
//  }
// }


//  user.greet.call({name:"munish"},"hello")

// function info (){
//   console.log( " my name is" + this.name)
// }

// const person = { name : " Munish"};
// info.call(person);

//  function curryAdd (a){
//   return function(b){
//     return function(c){
//       return function(d){
//         return a+b+c+d;
      
//       }
//     }
//   }
//  }

//  console.log(curryAdd(1)(2)(3)(4));


// const parent = {
//   greet : function (){
//     return "Hello form Parent!";
//   }
// }
// const child = Object.create(parent);  
// // Inheriting  from parent

// console.log(child.greet())

// console.log( child.__proto__ === parent);

// const grandparent ={ role : " Greandparent"}

// const parent = Object.create(grandparent);
// parent.name= "parent"

// const child = Object.create(parent)
// child.age = 18;

// console.log(child.role)
// console.log(child.name)
// console.log(child.age)


// function person(name){
//   this.name = name
// }
//  person.prototype.greet = function(){
//   return ` Hello my name is ${this.name}`;
//  }

//  const john = new person("mk")
//  console.log( john.greet());

