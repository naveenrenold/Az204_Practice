var a = 10;
var list = "";
var names = ["Naveen", "Renold", "JJ"];
for (var i = 1; i < 4; i++) {
  list += `<tr>
<td>${i}</td>
<td>${names[i - 1]}</td>
</tr>`;
}

document.querySelector("#root").innerHTML = `
<div>
<table>
<tr>
<th>Id</th>
<th>Name</th>
</tr>
${list}
</table>
</div>
`;
