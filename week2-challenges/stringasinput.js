// function that accepts string as input and changes to uPPERCASE

// Call the function
function swapCaseFirstCharacter(str) {

  // .split & .map 
    return str.split('').map(function(swaps) {
      return swaps === swaps.toUpperCase() ?
       swaps.toLowerCase() :
        swaps.toUpperCase();
    }).join('');
  }
  
//  input and output of CharacterCase
  var input = 'The Boy Is Headed To School';
  var output = swapCaseFirstCharacter(input);

  console.log(output); 
  // tHE bOY iS hEADED tO sCHOOL
  