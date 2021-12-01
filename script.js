function printTable(from, to, step, func) {
  if (func === undefined) {
    return;
  }
  from = from;
  to = to;
  step = step || 1;
  document.write("<table border='1'>");
  for (var x = from; x <= to; x += step) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + func(x) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}
function quadratic(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}
let f;
let ex = prompt("input expression for function");
let functionStr = "f = function(x){return " + ex + ";}";
eval(functionStr);
let t1 = +prompt("Введите t1");
let t = +prompt("Введите t");
while(t < t1) {
  alert("Error");
  t1 = +prompt("Введите t1");
  t = +prompt("Введите t");
}
let k = +prompt("Введите k");
//  let ff = [quadratic, cube];
printTable(t1, t, k, f);