const removeFromArray = function(input, ...args) {

    return input.filter(function(goodVal) {
        return !args.includes(goodVal);
    });

};

// Do not edit below this line
module.exports = removeFromArray;
