// Code your solution in this file!

function distanceFromHqInBlocks(location, hq = '42') {
    let distance;
    if (location > hq) {
        distance = location - hq;
    } else if (location < hq) {
        distance = hq - location;
    } else if (location === hq) {
        distance = 0;
    }
    return distance;
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

// console.log(distanceFromHqInFeet('30'));

function distanceTravelledInFeet(start, end) {
    return distanceFromHqInBlocks(start, end) * 264;
}

// console.log(distanceTravelledInFeet(47, 22));

function calculatesFarePrice(start, destination) {
    let fare;
    let tooFar;
    let myDist = distanceTravelledInFeet(start, destination);
    if (myDist <= 400) {
        fare = 0;
    } else if (myDist > 400 && myDist <= 2000) {
        fare = ((myDist - 400) / 100) * 2;
    } else if (myDist > 2000 && myDist <= 2500) {
        fare = 25;
    } else if (myDist > 2500) {
        return 'cannot travel that far';
        tooFar = true;
    }
    return fare;
}

console.log(calculatesFarePrice(24, 43));