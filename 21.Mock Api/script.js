const API_URL = " http://localhost:8000";
let cards = document.querySelector("#cards");
let addBtn = document.querySelector(".btn-dark");

async function getAllInfo() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    cards.innerHTML = " ";
    data.forEach((item) => {
      const card = document.createElement("div");
      const div = document.createElement("div");
      const iconEdit = document.createElement("i");
      const iconRemove = document.createElement("i");

      div.classList.add("m-2");
      card.classList.add("card", "col-5", "p-2", "edit");
      iconEdit.classList.add("fa-solid", "fa-pen", "delete");
      iconRemove.classList.add("fa-solid", "fa-trash-can");

      card.innerHTML = `
    <div>
        <h4>${item.shipAddress?.city}</h4>
        <span>${item.shipAddress?.country}</span>
    </div>
    `;
      card.append(div);
      div.append(iconEdit, iconRemove);
      cards.append(card);

      iconRemove.addEventListener("click", () => {
        console.log(item.id);
        delete item.id;
      });
    });
  } catch (error) {
    console.log(error);
  }
}
getAllInfo();

async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  getAllInfo();
}

addBtn.addEventListener("click", () => {
  window.location.href = "adduser.html";
});
