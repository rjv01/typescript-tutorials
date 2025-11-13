// let userName:string = "raj";
// let age:number = 23;
// let loggedin:boolean = true;
// console.log("userName: ",userName);
// console.log("age: ",age);
// console.log("loggedin: ",loggedin);
// console.log("typeScript is working ");
// console.log("typeScript is working still");
// console.log("typeScript is working !!!!!");

// const p = document.getElementById("p");
// p.innerText = "ok"


//interface;

// interface User1 {
//   readonly dbId:number
//   email:string,
//   userId:number,
//   googleId?:string
//   startTrail:() => string,
//   getCoupon(couponName:string,value:number):number
// }

// //reopening of interface

// interface User1 {
//     gitHubToken:string
// }

// interface Admin extends User1{
//     role:"admin" | "learner" | "user"
// }

// const raj:Admin= {
//   dbId: 1,
//   role:"admin",
//   gitHubToken:"gitHubToken",
//   email:'r@r.gmail.com',
//   userId:2211,
//   startTrail: ()=>{
//     return "trail started"
//   },
//   getCoupon: (name:"raj",off:10)=>{
//     return 1;
//   }
// }

// class User {
//     email:string;
//     name:string;
//     city:string = ""
//     constructor(email:string,name:string) {
//         this.email = email;
//         this.name = name;
//     }
// }

// const raj1 = new User("raj@.com","raj")
// raj1.city = "ahmedabad";
// console.log("ok");


class User {
    readonly city:string = "ahmedabad";
    constructor(
        public email:string,
        public name:string,
        private userId:string
        ){
    }
}
