// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const block = 42;
    return Math.abs(street - block);
  }
  
function distanceFromHqInFeet(street) {
    const feet = 264;
    const distance = distanceFromHqInBlocks(street);
    return Math.abs( feet * distance);
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination) * 264);

}

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (distanceInFeet <= 400) {
    fare = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    fare = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    fare = 25;
    } else if (distanceInFeet > 2500) {
    fare = 'cannot travel that far';
    }
    return fare;
    }


































































/*function calculatesFarePrice(startStreet, endStreet){
    let fare = 0;
    let distance = distanceTravelledInFeet(startStreet, endStreet);

    if (distance <= 400 ){
        fare = 0;
    }
    else if(distance > 400 && distance <= 2000){
        fare = 2;
    }
    else if(distance > 2000 && distance <= 2500){
        fare= 25;
    }else if(distance >2500){
        return 'cannot travel that far';
    }
    return fare;
}
console.log(calculatesFarePrice(43,44));
console.log(calculatesFarePrice(34,32));
console.log(calculatesFarePrice(50,58));
console.log(calculatesFarePrice(34,24));*/