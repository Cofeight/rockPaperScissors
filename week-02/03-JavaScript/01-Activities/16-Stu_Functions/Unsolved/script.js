// Write Your Code Below
function compareValue (input1, input2) {
    if (input1 === input2) {
        console.log("They are equal in type and value")
    } 
    else if (input1 == input2) {
        console.log("They are equal in value")
    } else {
        console.log("They are NOT equal in value")
    }
}

compareValue(5, "five")