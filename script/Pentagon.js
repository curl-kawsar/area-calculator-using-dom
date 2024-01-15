document.getElementById('pen-btn').addEventListener('click', function () {

    // Get the Base
    const triangleBaseField = document.getElementById('pen-base');
    const triangleBaseElement = triangleBaseField.value;
    const triangleBaseElementString = parseFloat(triangleBaseElement);
    const triangleBase = triangleBaseElementString;
    // console.log(triangleBase);

    // Get the Height

    const triangleHeightField = document.getElementById('pen-height');
    const triangleHeightElement = triangleHeightField.value;
    const triangleHeightElementString = parseFloat(triangleHeightElement);
    const triangleHeight = triangleHeightElementString;
    // console.log(triangleHeight);


    // Set the Area

    const triangleAreaField = document.getElementById('pen-area');
    const triangleAreaElement = triangleAreaField.innerText;
    // const triangleAreaElementString = parseFloat(triangleAreaElement);
    // const triangleAreaBox = triangleAreaElementString;

    // Calculate The Area Value

    if (isNaN(triangleBase) && isNaN(triangleHeight)) {
        alert("Please Enter Number Only")
    }
    else {
        const triangleAreaFloat = 0.5 * triangleBase * triangleHeight;
        const triangleArea = triangleAreaFloat.toFixed(2);
        triangleAreaField.innerText = triangleArea;
    }

    // Clear the Box
    triangleBaseField.value = '';
    triangleHeightField.value = '';

});