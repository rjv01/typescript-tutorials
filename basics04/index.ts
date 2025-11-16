console.log("hello world raj");

type User = {
    id:string,
    name:string,
    age:number,
    address:{
        street:string,
        city:string
    }
}

//this will remove id from user so we can provide all expect id
function createUser(user: Omit<User,"id">) {}
// function createUser(user: User) {}

//partial any number of arguments
function updateUser(user: Partial<User>) {}
// function updateUser(user: User) {}

//if 
function createUserWithAddress(user: Required<User>) {}


//what if i want to give only name and age rest will come will from DB;
//also give same result
// function renderUserDetails(user: {name:string,age:number}){

//better
function renderUserDetails(user: Pick<User, "name" | "age">){
    console.log("name: ",user.name," age: ",user.age);
}

const user1:User = {
    id:"1",
    name:"raj",
    age:23,
    address:{
        street:"asd",
        city:"asd",
    }
}

renderUserDetails(user1);
renderUserDetails({name:"raj",age:23});
// createUserWithAddress({ })

type Role = "admin" | "user" | "moderator";

// t can have both properties of admin and moderator
type T = Extract<Role,"admin" | "moderator">;

//that means same that T1 can have both admin and moderator but not the user;
type T1 = Exclude<Role,"user">;


function getUser(id: string){
    return { name:"raj",id, age:30};
}

type t2 = ReturnType<typeof getUser>;

type t3 = Parameters<typeof getUser>;