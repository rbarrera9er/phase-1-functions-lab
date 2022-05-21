function distanceFromHqInBlocks(someValue) {
const hq = 42
console.log(hq - someValue)
if (someValue > hq){
    return someValue - hq
}
if (hq > someValue){
    return hq - someValue
}
  }
  function distanceFromHqInFeet(someValue) {
   return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(start, destination) {
    console.log (start - destination) * 264
if (start > destination){
    return (start - destination) * 264
}
if (destination > start){
    return (destination - start) * 264
}
  }
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance < 2500){
        return 25;
    }
    else if (distance > 2500){
        return 'cannot travel that far'
    }
  }
  
