let string ="";

let btns = document.querySelectorAll(".btn");
Array.from(btns).forEach((btn)=>{
    btn.addEventListener("click", function(e){
        if(e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'Del'){
            string = string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})