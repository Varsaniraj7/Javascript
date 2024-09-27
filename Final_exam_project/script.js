let product_name = document.getElementById("product-name");
let product_description = document.getElementById("product-description");
let product_price = document.getElementById("product-price");
let product_category = document.getElementById("product-category");
let submit_button = document.getElementById("submit-button");
let editId = null;

submit_button.addEventListener("click", addData);

function addData(event) {
    event.preventDefault();

    if (!product_name.value || !product_description.value || !product_price.value || !product_category.value) {
        alert("Please fill all fields.");
        return;
    }

    let existingData = JSON.parse(localStorage.getItem("product")) || [];

    if (editId) {
        existingData = existingData.map((data) => {
            if (data.id == editId) {
                return {
                    id: data.id,  // same ID
                    product_name: product_name.value,
                    product_description: product_description.value,
                    product_price: product_price.value,
                    product_category: product_category.value
                };
            }
            return data;  // return the unchanged item
        });

        editId = null; // Reset editId after updating
        submit_button.value = "Submit"; // Reset button text
    } else {
        let obj = {
            id: Date.now(), // unique ID
            product_name: product_name.value,
            product_description: product_description.value,
            product_price: product_price.value,
            product_category: product_category.value
        };
        existingData.push(obj);
    }

    localStorage.setItem("product", JSON.stringify(existingData));
    clearInputs();
    getData();
}

function getData() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = ""; 

    let allData = JSON.parse(localStorage.getItem("product")) || [];

    allData.forEach((product) => {
        let row = tbody.insertRow(); // Insert Row
        let cell0 = row.insertCell(0); // Insert first column id
        let cell1 = row.insertCell(1); // Insert second column name
        let cell2 = row.insertCell(2); // Insert third column description
        let cell3 = row.insertCell(3); // Insert price
        let cell4 = row.insertCell(4); // Insert category
        let cell5 = row.insertCell(5); // Delete btn
        let cell6 = row.insertCell(6); // Edit btn

        cell0.innerText = product.id;
        cell1.innerText = product.product_name;
        cell2.innerText = product.product_description;
        cell3.innerText = product.product_price;
        cell4.innerText = product.product_category;

        cell5.innerHTML = `<button class="deleteBtn" data-id="${product.id}">Delete</button>`;
        cell6.innerHTML = `<button class="editBtn" data-id="${product.id}">Edit</button>`;
    });

    attachEventHandlers();
}

function attachEventHandlers() {
    


    
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let allData = JSON.parse(localStorage.getItem("product")) || [];
            let btnId = btn.getAttribute("data-id");

            let remainingData = allData.filter((data) => data.id != btnId);

            localStorage.setItem("product", JSON.stringify(remainingData));
            getData();
        });
    });





    let editBtns = document.querySelectorAll(".editBtn");
    editBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let allData = JSON.parse(localStorage.getItem("product")) || [];
            let btnId = btn.getAttribute("data-id");

            let singleData = allData.find((data) => data.id == btnId);

            product_name.value = singleData.product_name;
            product_description.value = singleData.product_description;
            product_price.value = singleData.product_price;
            product_category.value = singleData.product_category;

            editId = singleData.id; 
            submit_button.value = "Update";
        });
    });
}

function clearInputs() {
    product_name.value = "";
    product_description.value = "";
    product_price.value = "";
    product_category.value = "";
}



getData();
