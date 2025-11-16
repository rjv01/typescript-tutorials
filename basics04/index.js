console.log("hello world raj");
//this will remove id from user so we can provide all expect id
function createUser(user) { }
// function createUser(user: User) {}
//partial any number of arguments
function updateUser(user) { }
// function updateUser(user: User) {}
//if 
function createUserWithAddress(user) { }
//what if i want to give only name and age rest will come will from DB;
//also give same result
// function renderUserDetails(user: {name:string,age:number}){
//better
function renderUserDetails(user) {
    console.log("name: ", user.name, " age: ", user.age);
}
var user1 = {
    id: "1",
    name: "raj",
    age: 23,
    address: {
        street: "asd",
        city: "asd",
    }
};
renderUserDetails(user1);
renderUserDetails({ name: "raj", age: 23 });
function getUser(id) {
    return { name: "raj", id: id, age: 30 };
}
