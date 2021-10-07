import "./x.css";
import x from "./x.js";
import "./y.scss";
import "./s.less";
import "./v.styl"
import sss from"./assets/1.jpg"
console.log(x)
console.log(sss)
const gg=document.querySelector(".app")
gg.innerHTML=`<img src="${sss}">`
const button =document.createElement("button")
button.innerText="懒加载"


button.onclick=()=>{
    console.log("你好")
    const promise =import("./lazy.js")
    promise.then((module)=>{
        const fn=module.default
        fn()
    },()=>{})
     
}

document.querySelector(".button").appendChild(button)