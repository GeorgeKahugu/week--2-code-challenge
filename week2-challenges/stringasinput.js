// function that accepts string as input and changes to uPPERCASE

// Call the function
function changesCaseFirstCharacter(str) {

  // .split & .map 
    return str.split('').map(function(changes) {
      return changes === changes.toUpperCase() ?
       changes.toLowerCase() :
        changes.toUpperCase();
    }).join('');
  }
  
//  input and output of CharacterCase
  let input = 'The Boy Is Headed To School';
  let output = changesCaseFirstCharacter(input);

  console.log(output); 
  // tHE bOY iS hEADED tO sCHOOL
  