// function serompe() {
//     return 3 + z;
// }

// serompe();

function serompe() {
    return 3 + z;
}

function seRompeAsync (cb) {
    setTimeout( function () {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error in the async function');
            cb(err);
        }
        
    }, ) 
}

try {
//serompe();
seRompeAsync( function (err) {
    console.log(err.message);
});
} catch(err) {
    console.error('Oh, we have a problem');
    console.error(err.message);
}