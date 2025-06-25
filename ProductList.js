    const productInput = document.createElement("input");
    productInput.placeholder = "Product";
    const quantityInput = document.createElement("input");
    quantityInput.placeholder = "Quantity";
    quantityInput.type = "number";
    const priceInput = document.createElement("input");
    priceInput.placeholder = "Price";
    priceInput.type = "number";

    // Create Add button
    const addButton = document.createElement("button");
    addButton.textContent = "Add";

    // Append inputs and button
    document.body.appendChild(productInput);
    document.body.appendChild(quantityInput);
    document.body.appendChild(priceInput);
    document.body.appendChild(addButton);

    // Create list container
    const list = document.createElement("ul");
    document.body.appendChild(list);

    // Add button logic
    addButton.addEventListener("click", () => {
      const product = productInput.value.trim();
      const quantity = quantityInput.value.trim();
      const price = priceInput.value.trim();

      if (!product || !quantity || !price) {
        alert("Please fill all fields.");
        return;
      }
      const item = document.createElement("li");
      item.textContent = `Product: ${product}, Quantity: ${quantity}, Price: $${parseFloat(price).toFixed(2)}`;

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click",function(){
        list.remove();
    })
      item.appendChild(deleteBtn);
      list.appendChild(item);

      // Clear inputs
      productInput.value = "";
      quantityInput.value = "";
      priceInput.value = "";
    });
 