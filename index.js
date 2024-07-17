const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Using reduce() to sum up all the batteries
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
    return accumulator + currentBatch;
  }, 0); // Initial value of accumulator is set to 0
  
  console.log(totalBatteries); // Output: 31