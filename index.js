let checkUser = localStorage.getItem("user");
if (checkUser !== null) {
    document.querySelector(".item-logout").style.display = "block";
    document.querySelector(".item-login").style.display = "none";
    document.querySelector(".item-signup").style.display = "none";
} else {
    document.querySelector(".item-logout").style.display = "none";
    document.querySelector(".item-login").style.display = "block";
    document.querySelector(".item-signup").style.display = "block";
}

document.querySelector(".item-logout").addEventListener("click", function (e) {
    localStorage.removeItem("user");
    window.location.href = "/index.html";
});
if (localStorage.getItem("user")) {
    document
        .querySelector(".item-logout")
        .insertAdjacentHTML(
            "beforebegin",
            `<li style="color: #c1c1c1; font-size: 12px; line-height: 1;height: fit-content">${localStorage.getItem(
                "user"
            )}</li>`
        );
}
