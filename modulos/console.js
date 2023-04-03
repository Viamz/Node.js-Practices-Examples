console.info('yeah2')
console.error('Error')
console.warn('Warning')

const table = [
    {
        a:1,
        b:'Z'
    },
    {
        a:2,
        b:'K'
    }
]
console.log(table)
console.table(table)

console.group('Conver')
console.log('Hello')
console.log('Nnnn')
console.log('cccccc')
console.log('ggggg')
console.log('Bye')
console.groupEnd('Conver');

function fn1(){
    console.group('Function 1');
    console.log('This is from fn 1');
    console.log('this too');
    fn2();
    console.log('We are back in the second one');
    console.groupEnd('Function 1');
}

function fn2() {
    console.group('Function ');
    console.log('This is from fn 2');
    console.log('This is from fn 2 as well');
    console.groupEnd('Function 2');
}

console.log('Starting');
fn1()

console.count('Times')
console.count('Times')
console.count('Times')
console.count('Times')
console.countReset('Times')
console.count('Times')
console.count('Times')