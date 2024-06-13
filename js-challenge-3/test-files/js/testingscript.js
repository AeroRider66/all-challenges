
// Select a random employee
// const employeesArray = ["aaa", "bbb", "ccc", "ddd"];
// console.log(employeesArray);
const getRandomEmployee = function() {
    const employeesArray = ["aaa", "bbb", "ccc", "ddd"];
    console.log(employeesArray);

    function getRandomIntInclusive()  {
      const min = 0;
      const max = (employeesArray.length);
      console.log("min",min);
      console.log("max",max);
      const minCeiled = Math.ceil(min);
      console.log("ceil",minCeiled)
      const maxFloored = Math.floor(max);
      console.log("floor",maxFloored);
      const mathResult = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
      console.log("result",mathResult);
      return mathResult;
    }
    getRandomIntInclusive();
    console.log(getRandomIntInclusive());
      //Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);


    // const employeesArray = [];
    //     employeesArray[0] = "aaa";
    //     employeesArray[1] = "bbb";
    //     employeesArray[2] = "ccc";
        // "aaa", "bbb", "ccc", "ddd"];
    // TODO: Select and display a random employee

}

//const employeesArray = ["aaa", "bbb", "ccc", "ddd"];
//console.log(employeesArray);
getRandomEmployee();

    // function getRandomIntInclusive()  {
    //   const min = 0;
    //   const max = (employeesArray.length - 1);
    //   console.log("min",min);
    //   console.log("max",max);
    //   const minCeiled = Math.ceil(min);
    //   const maxFloored = Math.floor(max);
    //   const mathResult = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    //   console.log(mathResult);
    //   return mathResult;
    // }
    //   //Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    // getRandomIntInclusive();    
    
    // //generate random number
    // // const randomNumber = Math.random() * ()
    // // let giveRandomEmployee = employeesArray.length