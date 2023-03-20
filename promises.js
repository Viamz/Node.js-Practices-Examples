function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout( function() {
            console.log('Hi, ' + name)
            resolve(name);
            reject('Error');
        }, 1000); 
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

console.log('Procesing request ...');

hello('Nann', function j () {
    bye('Non', function() {
        console.log('Finishing... ');
    });
});

//----Ejecution

console.log('Starting...');
hello('Anybody')
    .then(bye)
    .then(interact)
    .then((name) => {
        console.log('Done');
    })
    .catch(error => {
        console.error('Something went wrong. WARNING');
        console.error(error);
    })