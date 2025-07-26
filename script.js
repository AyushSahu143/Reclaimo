document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("itemForm");
  const complaintsList = document.getElementById("complaints-list");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Collect form data
    const type = document.getElementById("type").value;
    const itemName = document.getElementById("itemName").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const contact = document.getElementById("contact").value;
    const imageInput = document.getElementById("image");

    // Create new complaint card
    const card = document.createElement("div");
    card.classList.add("complaint-card");

    // Add image preview if available
    if (imageInput.files.length > 0) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(imageInput.files[0]);
      img.alt = "Uploaded Item";
      img.style.width = "100%";
      img.style.maxWidth = "200px";
      img.style.marginBottom = "10px";
      card.appendChild(img);
    } 

    // Add text info
    card.innerHTML += ` 
    <br>
      <strong>Type:</strong> ${type.charAt(0).toUpperCase() + type.slice(1)}<br>
      <strong>Item:</strong> ${itemName}<br>
      <strong>Description:</strong> ${description}<br>
      <strong>Location:</strong> ${location}<br>
      <strong>Date:</strong> ${date}<br>
      <strong>Contact:</strong> ${contact}<br>
      <hr>
    `;

    // Show the new complaint
    complaintsList.prepend(card);

    // Show confirmation
    confirmationMessage.style.display = "block";
    setTimeout(() => {
      confirmationMessage.style.display = "none";
    }, 3000);

    // Reset form
    form.reset();
  });
});