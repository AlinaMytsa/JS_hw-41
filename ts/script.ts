interface user {
  name?: string,
  surname: string,
}

const obj: user = {
  name: 'John',
  surname: 'Smith'
}

const emptyObj: user = {}

obj.name = 'Pete';
delete obj.name;

// task3
type customType = Array<number> | Array<string>;
let arr:customType = [1, 2, 3, -1, -2, -3];

function func (item:customType):boolean {
for (let i = 0; i < arr.length; i += 1){

  if (i > 0){
    return true;
  }
  return false;
}
}

console.log(func(arr));
