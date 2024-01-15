document.getElementById('parallelogram-btn').addEventListener('click', function () {

    // Get the Base
    const baseField = document.getElementById('parallelogram-base');
    const baseFieldElement = baseField.value;
    const baseFieldElementString = parseFloat(baseFieldElement);
    const parallelogramBase = baseFieldElementString;

    // Get the Height

    const heightField = document.getElementById('parallelogram-height');
    const heightFieldElement = heightField.value;
    const heightFieldElementString = parseFloat(heightFieldElement);
    const parallelogramHeight = heightFieldElementString;

    // Set the area

    const areaField = document.getElementById('parallelogram-area');
    const areaFieldElement = areaField.innerText;
    // const areaFieldElementString = parseFloat(areaFieldElement);
    // const parallelogramResult =areaFieldElementString;


    // Calculate
    if (isNaN(parallelogramBase) && isNaN(parallelogramHeight)) {
        alert("Please Enter Number");
    }
    else {

        const parallelogramArea = (parallelogramBase * parallelogramHeight).toFixed(2);
        areaField.innerText = parallelogramArea;
    }


    // clear the field
    baseField.value = '';
    heightField.value = '';
})