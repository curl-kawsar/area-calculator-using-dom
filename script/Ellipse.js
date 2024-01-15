document.getElementById('ep-btn').addEventListener('click', function () {

    // Get the Base
    const triangleBaseField = document.getElementById('ep-b');
    const triangleBaseElement = triangleBaseField.value;
    const triangleBaseElementString = parseFloat(triangleBaseElement);
    const triangleBase = triangleBaseElementString;
    // console.log(triangleBase);

    // Get the Height

    const triangleHeightField = document.getElementById('ep-a');
    const triangleHeightElement = triangleHeightField.value;
    const triangleHeightElementString = parseFloat(triangleHeightElement);
    const triangleHeight = triangleHeightElementString;
    // console.log(triangleHeight);


    // Set the Area

    const triangleAreaField = document.getElementById('ep-area');
    const triangleAreaElement = triangleAreaField.innerText;
    // const triangleAreaElementString = parseFloat(triangleAreaElement);
    // const triangleAreaBox = triangleAreaElementString;

    // Calculate The Area Value

    if (isNaN(triangleBase) && isNaN(triangleHeight)) {
        alert("Please Enter Number Only")
    }
    else {
        const triangleAreaFloat = 3.1416 * triangleBase * triangleHeight;
        const triangleArea = triangleAreaFloat.toFixed(2);
        triangleAreaField.innerText = triangleArea;
    }

    // Clear the Box
    triangleBaseField.value = '';
    triangleHeightField.value = '';

});