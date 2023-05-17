// // #1
let firstElement;
let secondElement;

function myFunction(...nums) {
  if (nums.length < 2) {
    return 'Not enough numbers';
  }

  firstElement = nums[0] + nums[1];
  secondElement = 1;

  for (let i = 2; i < nums.length; i++) {
    secondElement = secondElement * nums[i];
  }

  const resultArray = [firstElement, secondElement]
  return resultArray;
}

const result = myFunction(2, 8, 7, 10, 9);
console.log(result);

// #2
    const user = {
        banks: [ 
        {
            address: {
                city: 'Batumi'
            }
        },
        {
            address: {
                city: 'Tbilisi'
            }
        },
        {
            address: {
                city: 'Tokyo'
            }
        },
      ]
    };
function mySecondFunction(user) {
    const { banks: [, , { address: { city } = {} } = {} ] = [] } = user;
    return city;
}
const city = mySecondFunction(user);
console.log(city);

// #3
function myThirdFunction(newObj) {
    return newObj;
}

const obj = {
    name: 'Jimsheri',
    surname: 'Underjmia',
    nickname: 'Gymsheri',
    age: 12,
    address: {
        city: 'Tbilisliorum',
    },
    targets: ['target1', 'target2']
 }

const newObj = {
    ...obj,
    address: {
        ...obj.address
    },
    targets: [...obj.targets]
}

const copy = myThirdFunction(newObj);
console.log(copy);

