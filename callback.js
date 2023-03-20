function h(name, miCallback) {
    setTimeout( function() {
        console.log('Hi, ' + name)
        miCallback();
    }, 1000);
}

function bye(nombre, anCallback) {
    setTimeout(function () {
        console.log('Bye, ', nombre);
        anCallback();
    }, 1000);
}

console.log('Procesing...');
h('Nann', function j () {
    bye('Non', function() {
        console.log('Finishing... ');
    });
});