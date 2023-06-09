function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout( function() {
            console.log('Hi, ' + name)
            resolve(name);
            reject('Error');
        }, 2000); 
    });
   
}

function interact(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('How are you? ', name);
            resolve();
        }, 1000);
    })
   
}

function bye(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('Bye, ', name);
            resolve();
        }, 1000);
    })
   
}

console.log('Procesing...');
hello('Nann', function j () {
    bye('Non', function() {
        console.log('Finishing... ');
    });
});