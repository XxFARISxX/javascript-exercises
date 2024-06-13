const leapYears = function(years) {
    
   let division = [years % 4, years % 400, years % 100];
   if ((division[2] !== 0) && (division[0] === 0) || (division[1] === 0)) {
    return true
   } else {return false};
};

// Do not edit below this line
module.exports = leapYears;
