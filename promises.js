function h(name) {
    return new Promise(function (resolve, reject) {
        setTimeout( function() {
            console.log('Hi, ' + name)
            //resolve(name);
            reject('CRITICAL ERROR *.*');
        }, 2000); 
    });
   
}

function bye(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('Bye, ', nombre);
            resolve();
        }, 1000);
    })
   
}

console.log('Procesing...');
h('Nann', function j () {
    bye('Non', function() {
        console.log('Finishing... ');
    });
});

//----Ejecucion
console.log('Starting...');
h('Viamz')
    .then(bye)
    .then((name) => {
        console.log('Done');
    })
    .catch(error => {
        console.error('Something went wrong. WARNING');
        console.error(error);
    })