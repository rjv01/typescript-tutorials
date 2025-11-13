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


// class User {
//     // private _courseCount = 1;
//     protected _courseCount = 1;
//     readonly city:string = "ahmedabad";
//     constructor(
//         public email:string,
//         public name:string,
//         private userId:string
//         ){
//     }
//     private deleteToken(){
//         console.log("Token deleated");
//     }
//     get getAppleEmail():string{
//         return `apple${this.email}`;
//     }
//     get courseCount():number {
//         return this._courseCount;
//     }
//     set courseCount(courseNum){
//         if(courseNum <= 1){
//             throw new Error("Course count should be more than 1");
//         }
//         this._courseCount = courseNum;
//     }
// }

// const raj = new User("raj@gmail.com","raj","01");
// // raj.deleteToken();

// class subClass extends User{
//     isFamily:boolean = true;
//     changeCourseCount(){
//         this._courseCount = 4;
//     }
// }

interface Camera{
    cameraMode:string,
        filter:string,
        burst:number
}

interface story{
    createStory():void
}

class Instagram implements Camera{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
}

class Youtube implements Camera,story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        public short:string
    ) {}

    createStory(): void {
        console.log("Youtube shorts created")
    }
}