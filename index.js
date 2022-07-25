

   const Clock=() => {
    const date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    

    let session =  document.getElementById("d8");
  

    if(hh>= 12){
        
        session.innerText = "PM";
     }
     else  {
        session.innerText = "AM";
     }



      
     if(hh>=12)
     {
      hh=hh-12;
     }

     if(hh==0)
     {
      hh=12;
     }

    
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;


    
      
     document.getElementById("d5").innerText=`${hh} hours`;
     document.getElementById("d5").style.fontSize="30px";
     document.getElementById("d6").innerText=`${mm} mins`;
     document.getElementById("d6").style.fontSize="30px";
     document.getElementById("d7").innerText=`${ss} secs`;
     document.getElementById("d7").style.fontSize="30px";



     
   
    }
    setInterval(Clock,1000);


     function clickhere()
{
  const date = new Date();
  let hours = date.getHours();
  let wakeUpTime = document.getElementById("wakeup").value;
  let lunchTime =document.getElementById("lunch").value;
  let napTime =document.getElementById("nap").value;
  let sleepTime =document.getElementById("sleep").value;

  
  if(wakeUpTime == hours)
{
  document.getElementsByClassName("b")[0].innerText ="GOOD MORNING !! WAKE UP !!";
  document.getElementsByClassName("e")[0].innerText ="GRAB SOME HEALTHY BREAKFAST!!!";
  document.getElementById("f").src="component.png";
}

   if(lunchTime == hours)
{
    document.getElementsByClassName("b")[0].innerText ="GOOD AFTERNOON !! TAKE SOME SLEEP";
    document.getElementsByClassName("e")[0].innerText ="LET'S HAVE SOME LUNCH !!";
    document.getElementById("f").src="component1.jpg";
}
 if(napTime == hours)
{
    document.getElementsByClassName("b")[0].innerText ="GOOD EVENING !!";
    document.getElementsByClassName("e")[0].innerText ="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById("f").src="lunch_image.jpg";
}
if(sleepTime == hours)
{
    document.getElementsByClassName("b")[0].innerText ="GOOD NIGHT !!";
    document.getElementsByClassName("e")[0].innerText ="CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("f").src="Component2.jpg";
}


let selection=document.getElementById("c5");
selection.innerText= "Wake Up Time :" +" " + wakeup.options[wakeup.selectedIndex].text;
let selectionOne=document.getElementById("c6");
selectionOne.innerText=" Lunch Time : " + " " +lunch.options[lunch.selectedIndex].text;
let selectionTwo=document.getElementById("c7");
selectionTwo.innerText="Nap Time :" + " " + nap.options[nap.selectedIndex].text;
let selectionThree=document.getElementById("c8");
selectionThree.innerText="Night Time :" + " " + sleep.options[sleep.selectedIndex].text;

  
    

}
    



