const Login_Slider = document.querySelector(".login");
const Register_Slider = document.querySelector(".Register");
console.log(Login_Slider,Register_Slider);

const Register_Container = document.querySelector(".register-container");
console.log(Register_Container);

Login_Slider.addEventListener("click",()=>{
    Register_Container.style.right = "-100%";
})

Register_Slider.addEventListener("click",()=>{
    Register_Container.style.right = "0%";
})
