function test() {
//selection if  true
 if((document.f1.c1[0].checked==true) &&(document.f1.c1[1].checked==false) &&  (document.f1.c1[2].checked==false))
   {  alert("answer is correct");
    return false;}
    
    
    
    //selection if  false
    if((document.f1.c1[0].checked==false) &&(document.f1.c1[1].checked==true) &&  (document.f1.c1[2].checked==false))
   {  alert("answer is incorrect");
    return false;}
    
    
    
    //selection if  false
    if((document.f1.c1[0].checked==false) &&(document.f1.c1[1].checked==false) &&  (document.f1.c1[2].checked==true))
   {  alert("answer is incorrect");
    return false;}
    
    
    
    
    
    //selection
 if((document.f1.c1[0].checked==false) &&(document.f1.c1[1].checked==false) && (document.f1.c1[2].checked==false))
 {alert("please choose one");
    return false;}

}




