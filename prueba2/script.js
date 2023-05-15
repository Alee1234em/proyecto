const form = document.getElementById("form")
const btn = document.querySelector(".btn-login")
function login(user,password){
    if (user == "ale" && password == "1234"){
        window.location="index2.html"
    }else{
        alert("Usuario no encontrado")
    }
}
console.log("drtgyjiko")
btn.addEventListener("click",e=>{
    e.preventDefault()
    let user = document.getElementById("nombre")
    let password = document.getElementById("pass");


    login(user.value,password.value)
})
