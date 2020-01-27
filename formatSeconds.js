function numberArray(num) {
    //console.log("the number being used", num)
    let amount;
    let secondsArray = [];
    let secondsInWeek = 604800
    let secondsInDay = 86400
    let secondsInHour = 3600
    if (num > secondsInWeek){
      //console.log("num for weeks", num)
      amount = Math.round(num / secondsInWeek)
      //console.log("amount for weeks", amount)
      remainder = (num % secondsInWeek)
      //console.log("remainder for weeks", remainder)
      num = remainder
      secondsArray.push(amount)
      //console.log("array for weeks", secondsArray)
    }
    if (num > secondsInDay){
      amount = Math.round(num / secondsInDay)
      remainder = (num % secondsInDay) 
      num = remainder
      secondsArray.push(amount) 
    } 
    else if (secondsArray.length > 0) 
    {
      secondsArray.push(0)
    }
    if (num > secondsInHour){
      amount = Math.round(num / secondsInHour)
      remainder = (num % secondsInHour) 
      num = remainder
      secondsArray.push(amount) 
    }
    else if (secondsArray.length > 0)
    {secondsArray.push(0)}
  
    if (num >= 60){ 
      //console.log("array at beginning of while", secondsArray)
      //console.log("num is", num)
      amount = Math.round(num /60)
      //console.log("amount", amount)
      remainder = num % 60 
      //console.log("remainder =", remainder)
      secondsArray.push(amount)
      //console.log("updated", secondsArray)
      num = remainder
      //console.log("new num",num)
    }
  
    secondsArray.push(num)
    //console.log("array of numbers", secondsArray)
    return secondsArray
  }
    function unitCreator(secondsArray){
      timeFrames = ["s", "m", "h","d","w"]
      lengthArray = secondsArray.length
      emptyString = ""
      for (let i = 0; i < lengthArray; i ++){
        emptyString = emptyString + secondsArray[i] + timeFrames[lengthArray - (i+1)] + " "
  
  
      }
  
      console.log(emptyString)
    }
    
    
    function formatSeconds(num){
    return unitCreator(numberArray(num))}
    // This is your job. :)
  
    // Remember, if the code is stumping you, take a step back and
    // make sure you can do it by hand.
  
  
  if (require.main === module) {
    console.log('Running sanity checks for formatSeconds:');
  
    /*
    Add your own test cases here! These four aren't enough.
  
    Notice that we're looking at "edge cases": the boundary where the
    parts "flip over", and also the values on either side of that boundary.
  
    This is where the code is most likely to go wrong.
    */
  
    console.log(formatSeconds(0) === '0s fo');
    //console.log(formatSeconds(10815) === '0s');
    console.log(formatSeconds(12345) === '0s');
    console.log(formatSeconds(1210459) === '2w 0h 14m 19s ');
    console.log(formatSeconds(1) === '1s');
    console.log(formatSeconds(604859) === "1w 0d 0h 0m 59s");
  
    console.log(formatSeconds(55) === '55s');
    console.log(formatSeconds(60) === '1m 0s');
    console.log(formatSeconds(65) === '1m 5s');
  
    console.log(formatSeconds(3600) === '1h 0m 0s');
    console.log(formatSeconds(3615) === '1h 0m 15s');
  }
  
  module.exports = formatSeconds;