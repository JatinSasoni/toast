const t_container =  document.querySelector(".toast-container");
const successMSG = `<i class="fa-solid fa-circle-check"></i>Successfull`;
const errorMSG = `<i class="fa-solid fa-circle-xmark"></i>There is some error! PLS FIX `;
const invalidMSG = `<i class="fa-solid fa-circle-exclamation"></i>Invalid Input`;
const getToast = (e)=>{

    if(e.target.className.includes("btn")){
        let toast = document.createElement('div');
        toast.classList.add("toast");
        if(e.target.className.includes("pending")){
            toast.classList.add("invalidToast");
            toast.innerHTML = `${invalidMSG}`;
        }else if(e.target.className.includes("success")){
            toast.classList.add("successToast");
            toast.innerHTML = `${successMSG}`;
        }else{
            toast.innerHTML = `${errorMSG}`;
            toast.classList.add("errorToast");
        }
        t_container.append(toast);

        setTimeout(() => {
            toast.remove();
        }, 5000);
    }

    

}


//event delegation for button
document.querySelector(".container").addEventListener('click',(e)=>getToast(e));