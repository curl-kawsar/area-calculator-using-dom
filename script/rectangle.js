document.getElementById('rectangle-btn').addEventListener('click', function () {

    // Get the width

    const widthField = document.getElementById('rectangle-width');
    const widthFieldElement = widthField.value;
    const widthFieldElementString = parseFloat(widthFieldElement);
    const rectangleWidth = widthFieldElementString;
    // console.log(rectangleWidth)

    // Get the Height

    const heightField = document.getElementById('rectangle-height');
    const heightFieldElement = heightField.value;
    const heightFieldElementString = parseFloat(heightFieldElement);
    const rectangleHeight = heightFieldElementString;

    // Calculate the Area

    const rectangleAreaField = document.getElementById('rectangle-area');
    const rectangleAreaFieldElement = rectangleAreaField.innerText;
    // const rectangleAreaFieldElementString = parseFloat(rectangleAreaFieldElement);
    // const rectangleArea = rectangleAreaFieldElementString;

    // Set the Area 

    if (isNaN(rectangleWidth) && isNaN(rectangleHeight)) {
        alert("Please Enter Valid Number")
    }
    else {
        const Area = rectangleWidth * rectangleHeight;
        rectangleAreaField.innerText = Area.toFixed(2);
    }

    widthField.value = '';
    heightField.value = '';


})