var glob;
function load()
       {         
            alert("checking Session");
            var str=new String();
            str=document.cookie;
            str=str.split(';');
            str=str[0];
            str=str.split('|');
            var data=new String();
            data=(window.location.search);
            data=data.split("?");
            data=data[1];
            data=localStorage.getItem(data);
            data=data.split("|");
            if(str[0]==data[0]&&str[1]==data[1]) {
                alert("Welcome " + str[0]);
                glob=str[0];
            } else {
                alert("pls Login!");
                window.open("mainpage.htm","_self")
            }
}

       function validate1(f1,f2,f3)
       {
           var t1=document.getElementById("f1").value;
       t1=parseFloat(t1);
       var t2=document.getElementById("f2").value;
       t2=parseFloat(t2);
       var t3=document.getElementById("f3").value;
       t3=parseFloat(t3);
           var n=document.getElementById("div1");
           var m=document.getElementById("div2");
           n.style.display='block';
           m.style.display='block';
           var v=t2*0.35;
           document.getElementById("f4").value=v;
           v=t1-v;
        var c=t1*t3;
          c=c/v;
           c=c;
           document.getElementById("f5").value=c;
       }
       
       function validate2(f6,f7,f8)
       {
           var t6=document.getElementById("f6").value;
       t6=parseFloat(t6);
       var t7=document.getElementById("f7").value;
       t7=parseFloat(t7);
       var t8=document.getElementById("f8").value;
       t8=parseFloat(t8);
           var n=document.getElementById("div3")
           n.style.display='block';
            var n=document.getElementById("div4")
           n.style.display='block';
           var v=t6*t7-t8;
           document.getElementById("f9").value=v;
           v=v-(parseFloat(document.getElementById("f1").value)*parseFloat(document.getElementById("f3").value));
           document.getElementById("f10").value=v;
       }
       
     function record(f1,f2,f3,f4,f5,f6,f7,f8,f9,f10)
       {
           var t1=document.getElementById("f1").value;
           var t2=document.getElementById("f2").value;
           var t3=document.getElementById("f3").value;
           var t4=document.getElementById("f4").value;
           var t5=document.getElementById("f5").value;
           var t6=document.getElementById("f6").value;
           var t7=document.getElementById("f7").value;
           var t8=document.getElementById("f8").value;
           var t9=document.getElementById("f9").value;
           var t10=document.getElementById("f10").value;
           var s=new String;
           s=t1+"|"+t2+"|"+t3+"|"+t4+"|"+t5+"|"+t6+"|"+t7+"|"+t8+"|"+t9+"|"+t10;
           var today=new Date();
           today=today.getDate();
           glob=glob+today;
           localStorage.setItem(glob,s);
           var j=localStorage.getItem(glob);
           alert("Data Recorded");
       }
       function logout()
       {
           alert("Logged out! Redirecting to Main page...");
           document.cookie = "AA|AA; path=/" ;
           window.open("mainpage.htm","_self");
       }
       function openadd()
       {
            var data=new String();
            data=(window.location.search);
            data="view.htm"+data;
            window.open(data,"_self");
       }