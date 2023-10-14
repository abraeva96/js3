var a = +prompt("1-sonni kiriting");
var b = +prompt("2-sonni kiriting");
var c = +prompt("3-sonni kiriting");




if (a > b && a < c || a < b && a > c) {
    alert("O'rta qiymat " + a)
} else if (b > a && b < c || b < a && b > c) {
    alert("O'rta qiymat " + b)
} else {
    alert("O'rta qiymat " + c)
}