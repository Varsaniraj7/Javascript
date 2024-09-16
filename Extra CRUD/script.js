let data = [
    { id: 1, name: "sami", email: "sami@gmail.com" },
    { id: 2, name: "khan", email: "khan@gmail.com" }
]


function readAll() {
    localStorage.setItem("object", JSON.stringify(data))
    let tabledata = document.querySelector(".data_table")

    let object = JSON.parse(localStorage.getItem("object"))

    let elements = ""

    object.map((record) => {
        elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
            <button class="edit" onclick=edit(${record.id})>Edit</button>
            <button class="delete" onclick={delet(${record.id})}>Delete</button>
        </td>
        </tr>`
    })
    tabledata.innerHTML = elements
}


function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}


function add() {
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;

    let newObj = { id: 3, name: name, email: email }
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}


function edit(id) {
    document.querySelector(".update_form").style.display = "block"

    let obj = data.find(rec => rec.id === id);

    document.querySelector(".id").value = obj.id;
    document.querySelector(".uname").value = obj.name;
    document.querySelector(".uemail").value = obj.email;
}


function update(){
    let id = parseInt(document.querySelector(".id").value);
    let name = document.querySelector(".uname").value;
    let email = document.querySelector(".uemail").value;

    let index = data.findIndex(rec => rec.id === id)
    data[index]  = {id,name,email}

    document.querySelector(".update_form").style.display = "none"

    readAll();
}

function delet(id){
    data = data.filter(rec => rec.id !== id);
    readAll();
}
