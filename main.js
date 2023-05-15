// #1
function myFunction(...numbers) {
    if (numbers.length < 2) {
      return [];
    }
  
    const sum = numbers[0] + numbers[1];
    const product = numbers.slice(2).reduce((acc, num) => acc * num, 1);
  
    return [sum, product];
    }

    // #2
    const user1 = {
        banks: {
            address: {
                city: 'Tbilisi'
            }
        }
    }

    function mySecondFunction(object) {
        const { banks: [, , { address: { city } = {} } = {}] = [] } = object;
        return city;
      }
      const city = mySecondFunction(object);
      console.log(city);

    //   #3
    const user2 = {
        banks: {
            address: {
                city: 'Tbilisi'
            }
        }
    }

    function copyObject(user) {
        let newObject = {...user}

        for (let i in user2) {
            if(typeof user2[i] === 'object'){
                newObject[i] = user2[i]
            }
        }
        return newObject;
    }

    const obj2 = copyObject(user2)
    console.log(obj2)