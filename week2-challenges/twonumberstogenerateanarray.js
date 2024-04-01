num1=2
num2=8
num3=-2

// call a function
function createArray(begin,end){
        let array=[];
        if(begin<=end){
            for (let i=begin;i<=end; i++ ){
                array.push(i);
            }
// else 
        }else{
            for (let i=begin; i = end; i--){
                array.push(i);
            }
        }
//return 
        return array;
    }
// output
   let output1=createArray(num1,num2)
   let  output2=createArray(num3,num2)


console.log(output1)
 
//  result= [2, 3, 4, 5,
//   6, 7, 8]



    console.log(output2)
     
    //   result = [-2, -1, 0, 1, 2,
//   3,  4, 5, 6, 7,8]
  





