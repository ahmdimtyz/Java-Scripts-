function multi(){
    var numVar1 = document.getElementById("numVar1").value;
    var numVar2 = document.getElementById("numVar2").value;

    function multiply(num1, num2)
            {
                return num1*num2;
            }

    document.getElementById("result").innerHTML = multiply(numVar1, numVar2);
}

