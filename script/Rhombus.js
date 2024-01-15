document.getElementById('rhombus-btn').addEventListener('click', function () {

    // Get the d1 value

    const doneValue = document.getElementById('d1-box');
    const doneValueElement = doneValue.value;
    const doneValueElementString = parseFloat(doneValueElement);
    const d1Value = doneValueElementString;

    // Get the d2 value

    const dTwoValue = document.getElementById('d2-box');
    const dTwoValueElement = dTwoValue.value;
    const dTwoValueElementString = parseFloat(dTwoValueElement);
    const dTwo = dTwoValueElementString;

    // Get access in area

    const rhombusAreaValue = document.getElementById('rhombus-area');
    const rhombusAreaAccess = rhombusAreaValue.innerText;

    // Calculate the Area

    if (isNaN(d1Value) && isNaN(dTwo)) {
        alert("Enter Valid Number");
    }
    else {
        const rhombusArea = ((d1Value * dTwo) / 2).toFixed(2);
        rhombusAreaValue.innerText = rhombusArea;
    }



    // clear the field
    doneValue.value = '';
    dTwoValue.value = '';


})