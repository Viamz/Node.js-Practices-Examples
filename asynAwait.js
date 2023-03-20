async function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout( function() {
            console.log('Hi, ' + name)
            resolve(name);
        }, 2000); 
    });
   
}

async function interact (name) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla bla');
            resolve('Error');
        }, 1000);
    })
   
}

async function bye(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('Bye, ', name);
            resolve();
        }, 1000);
    })
   
}

async function main() {
    let name = await hello('Viamz');
    await interact();
    await interact();
    await interact();
    await interact();
    await bye(name);
    console.log('Finish');
}

console.log('Starting process');
main();

