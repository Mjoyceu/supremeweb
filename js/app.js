const Submit = document.querySelector("#sub")
Submit.addEventListener('click', ()=>{
    if (confirm("is this your Final Answer")){
        let q1 =document.forms['form2']['lit'].value
        let q2 =document.forms['form2']['ok'].value
        let q3 =document.forms['form2']['yept'].value
        let q4=document.forms['form2']['be'].value
        let q5 =document.forms["form2"]['it'].value
        
        let away = []
        if (q1==35){
        away.push("1")
        }
        if (q2=="at"){
        away.push("1")
        }
        if (q3=="loop"){
        away.push("1")
        }
        if (q4==5){
        away.push("1")
        }
        if (q5=="p"){
        away.push("1")
        }
      hit = document.querySelector("#at")
       hit.innerHTML=("you got " + away.length + " out of 5 correctly")
    }
   

})