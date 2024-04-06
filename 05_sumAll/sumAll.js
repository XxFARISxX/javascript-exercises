const sumAll = function(...args) {

    let Sum = 0;

    if ((args[0] || args[1]) < 0) {
        return "ERROR"

    } else if (typeof (args[0] && args[1]) === "number") {

        if (args[0] < args[1]) {

            for (let i = args[0]; i <= args[1]; i++) {
                Sum += i;
            }

            return Sum;
        } else if (args[0] > args[1]) {

            for (let i = args[0]; i >= args[1]; i--) {
                Sum += i
            }
            
            return Sum;
        }

    } else {return "ERROR"}

}

// Do not edit below this line
module.exports = sumAll;
