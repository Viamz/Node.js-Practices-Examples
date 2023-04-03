// function serompe() {
//     return 3 + z;
// }

// serompe();

function serompe() {
    return 3 + z;
}

try {
serompe();
} catch(err) {
    console.error('Oh, we have a problem');
    console.error(err.message);
}