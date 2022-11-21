// Code your solution here
function findMatching(driverArr, driverNam){
    return driverArr.filter(
        listNames => listNames.toLowerCase() === driverNam.toLowerCase()
    );
}

function fuzzyMatch(driverArr, driverLetters){
    return driverArr.filter(
        maybeNames => maybeNames.toLowerCase().indexOf(driverLetters.toLowerCase()) === 0
    );
}
function matchName (driverArr, nameSeek){
    return driverArr.filter(drvElement => drvElement.name === nameSeek
    );
}