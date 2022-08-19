/*
    객체에 대한 접근 및 병합 등의 작업을 제공하는 함수이다.
    Object.assign({property},obj,{property}) : 객체를 얕은 복사를 통해서 같은 주소를 참조하지 않게 한다.
    Object.keys(obj):해당 객체의 key를 반환한다.
    Object.values(obj):해당 객체의 value를 반환한다.
    Object.entries(obj): 객체를 [[키,값],[키,값],....]형태의 배열로 반환한다.
    Object.fromEntries(arr): [[키,값],[키,값],....]형태의 배열을 객체로 반환한다.
*/
let a = "age";
const user={
    name:"mike",
    [a]:20    
}
//console.log(user); 
//{ name: 'mike', age: 20 }

const user2={
    ["na"+"me"]:"mike",
    [1+4]:20    
}
//console.log(user2);
//{ '5': 20, name: 'mike' }

/*-------------------Object.assign---------------------*/
//객체 복사(값만 복사됨으로 같은 객체가 아님)
const clone = Object.assign({},user)
// console.log(clone);
// console.log(user==clone);
// console.log(user===clone);
/*
{ name: 'mike', age: 20 }
false
false
*/

//객체 복사(인자를 추가)/인자를 변환할수는 없음 
const clone2 = Object.assign({gender:"male"},user)
//console.log(clone2);
//{ gender: 'male', name: 'mike', age: 20 }

//객체 병합
const clone3 = Object.assign(user,user2);
//console.log(clone3);
//{ '5': 20, name: 'mike', age: 20 }

/*-------------------Object.keys---------------------*/
//console.log(Object.keys(Object.assign(user,user2)));
//객체의 키를 반환
//[ '5', 'name', 'age' ]

/*-------------------Object.values---------------------*/
//console.log(Object.values(Object.assign(user,user2)));
//객체의 값을 반환
//[ 20, 'mike', 20 ]

/*-------------------Object.entries--------------------*/
console.log(Object.entries(Object.assign(user,user2)));
arr = Object.entries(Object.assign(user,user2));
// console.log(arr[0][1]); = 20
//객체의 키,값 모두 반환(배열 형태)
//[ [ '5', 20 ], [ 'name', 'mike' ], [ 'age', 20 ] ]

/*-------------------Object.FromEntries--------------------*/
//console.log(Object.fromEntries(arr));
//배열로 변환된 객체를 객체로 변환
//{ '5': 20, name: 'mike', age: 20 }

