function fun1() {
    console.log("fun 1");
}

function fun1b() {
    console.log("fun 1b");
}

exports.fun1 = fun1;
exports.fun1b = fun1b;
exports.fun1c = function() {
    console.log("fun 1c")
}

exports.fun1d = () => console.log("fun 1d")
