import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const a=document.querySelector(".feedback-form"),s="feedback-form-state";a.addEventListener("input",l=>{e[l.target.name]=l.target.value,localStorage.setItem(s,JSON.stringify(e))});window.addEventListener("load",()=>{const l=localStorage.getItem(s);l&&(e=JSON.parse(l),a.elements.email.value=e.email,a.elements.message.value=e.message)});a.addEventListener("submit",l=>{if(l.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),e={email:"",message:""},a.reset()});const t=document.querySelector(".feedback-form");t.style.width="500px";t.style.height="500px";t.style.display="flex";t.style.flexDirection="column";t.style.flexWrap="wrap";t.style.gap="20px";t.style.alignItems="center";t.style.justifyContent="center";const n=document.querySelector(".body_style");n.style.display="flex";n.style.alignItems="center";n.style.justifyContent="center";
//# sourceMappingURL=2-form.js.map
