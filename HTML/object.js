var obj = {
            name:'d',
            age:243,
            gender:'M',
            isHuman : true,
            address :{
                country : "India",
                state : "Karnataka",
                city : "Bengaluru"
            },
            friends : [" v ","vfs"]
        }
        var a = "gender" 
console.log(obj)
console.log(obj[a]);
console.log(obj.address.country)
// CRUD : Create, Read, Update, Delete.
obj.isHuman = false
obj.friends.push("njk")
delete obj.gender
console.log(obj);
// ()=>();

var a = 10;
var b = "sohjh";
console.log(a*b);