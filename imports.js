// var f1 = require('./inc/functions1');
// var f2 = require('./inc/functions2');


// module.exports = {...f1, ...f2};

module.exports = {
    ...require('./inc/functions1'),
    ...require('./inc/functions2')
}