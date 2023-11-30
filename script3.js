let obj1={name:"Person 1",age:5};

let obj2={age:5,name:"Person 1"};

if(JSON.stringify(obj1)===JSON.stringify(obj2))
{
    console.log("Both  objects are same");
}
else
{
    console.log("Both are different objects")
}