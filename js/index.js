var a = Number(prompt('write the number for "a"'));
var b = Number(prompt('write the number for "b"'));
var c = Number(prompt('write the number for "c"'));

function quadraticEquation(a, b, c) {
    var x1, x2;
    var d = Math.pow(b,2) - 4*a*c;  
    if (d > 0) {
        var x1 = (-b + Math.sqrt(d))/(2*a);
        var x2 = -b - Math.sqrt(d)/(2*a);
    }
       return x1 + 'x1', x2 + 'x2';
    
    if (d === 0) {
        var x1 = -b/(2*a);
        var x2 = -b/(2*a);
        return 'x1=' + x1 , 'x2=' + x2;
    }
    
    else (d<0) {
        return 'Solution does not exist'
    } 
    
}
    document.write(quadraticEquation(a, b, c));