//PRIMITIVE DATA TYPES USES -> stack
//NON PRIMITIVE DATA TYPES(ARRAYS.,OBJ.,FUNCTION) USE -> heap

//so 

//heap

let user1={
    email: "xyz@gmail.com",
    number: 5656456456

}
 
let user2=user1;
// console.log(user1.email);
// console.log(user2.email);
//xyz@gmail.com will bw thw output

//now

user2.email="abc@gmail.com";
console.log(user1.email);
console.log(user2.email);

//now both values will get changed to abc@gmail.com as in heap the variable is passed as reference(original value) and changes made in one will effect other too

//STACK
//in stack the value of variable is passed as a copy so changes done in one do not effect other value