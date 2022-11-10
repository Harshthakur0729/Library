function Insert() {
    var a = document.getElementById('txtName').value;
    var b = document.getElementById('txtEmail').value;
    var c = document.getElementById('txtAddress').value;


    var table = ` 
    <tr>
    <th>${a}</th>
    <th>${b}</th>
    <th>${c}</th>
</tr>`;
    document.getElementById('table').innerHTML += table;
    clearForm();
}

function clearForm() {
    var a = document.getElementById('txtName').value = "";
    var b = document.getElementById('txtEmail').value = "";
    var c = document.getElementById('txtAddress').value = "";

}
