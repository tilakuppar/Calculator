function inp(val) {
    var x = val;
    document.getElementById("input").value += x;
}

function compute() {
    var inputElement = document.getElementById("input");
    var input = inputElement.value;
    input = input.replace(/√(\d+)/g, 'Math.sqrt($1)');
    console.log("Transformed Input: " + input);
    try {
        var result = eval(input);

        if (!isNaN(result) && typeof result === 'number') {
            inputElement.value = result;
            inputElement.style.color = 'green'; 
            inputElement.contentEditable='false'
        } else {
            inputElement.value = 'Invalid Input';
            inputElement.style.color = 'red'; 
        }
    } catch (error) {
        inputElement.value = 'Error';
        inputElement.style.color = 'red'; 
    }
}
function backspace() {
    var inputElement = document.getElementById("input");
    var inputValue = inputElement.value;
    inputElement.value = inputValue.substring(0, inputValue.length - 1);
}


