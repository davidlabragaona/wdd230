const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value === "") {
        alert("The field is empty");
        input.focus();
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;
    const del = document.createElement("button");
    del.textContent = "❌";
    li.append(del);
    list.append(li);
    del.addEventListener("click", function () {
        list.removeChild(li);
        input.focus();
    });
    input.focus();
    input.value = "";
})