let count = 0;
const value = document.getElementById("value")
const buttons = document.querySelectorAll(".btn")
buttons.forEach( function  (btn){
    btn.addEventListener("click", function (e){
       const styles = (e.currentTarget.classList)
       if(styles.contains("decrease")){
           count--;
       }
       else if (styles.contains("reset")){
        count = 0;
    }
    else{
        count++;
    }
    if (count > 0){
        value.style.color = "green";
    }
    else if (count === 0){
        value.style.color = "black";
    }
    else if (count < 0){
        value.style.color = "red";
    }
       value.textContent = count;
      
    })
})