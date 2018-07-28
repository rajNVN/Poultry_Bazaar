function load()
       {         
            alert("checking session");
            var str=new String;
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
            } else {
                alert("pls login");
                window.open("mainpage.htm","_self");
                }
}



function viewdet()
       {
            var t1=document.getElementById("f1");
            var t2=document.getElementById("f2");
            var t3=document.getElementById("f3");
            var t4=document.getElementById("f4");
            var t5=document.getElementById("f5");
            var t6=document.getElementById("f6");
            var t7=document.getElementById("f7");
            var t8=document.getElementById("f8");
            var t9=document.getElementById("f9");
            var t10=document.getElementById("f10");
            var dv1=document.getElementById("d1");
            var dv2=document.getElementById("d2");
            var dv3=document.getElementById("d3");
            var dv4=document.getElementById("d4");
           
            var s=new String();
            s=window.location.search;
            s=s.split("?");
            s=s[1];
            var d=document.getElementById("K1").value;
            s=localStorage.getItem(s);
            s=s.split("|");
            s=s[0];
            s=s+d;
            s=localStorage.getItem(s);
            if(s==null)
            {    alert("data not found!");
                return;
            }
            s=s.split("|");
            alert("Data Found...");
            t1.value=s[0];
            t2.value=s[1];
            t3.value=s[2];
            t4.value=s[3];
            t5.value=s[4];
            t6.value=s[5];
            t7.value=s[6];
            t8.value=s[7];
            t9.value=s[8];
            t10.value=s[9];
            dv1.style.display='block';
            dv2 .style.display='block';
            dv3 .style.display='block';
            dv4.style.display='block';
           

       }
       function logout()
       {
           alert("Logged out! Redirecting to main page...");
           document.cookie = "AA|AA; path=/" ;
           window.open("mainpage.htm","_self");
       }
       function openadd()
       {
            var data=new String();
            data=(window.location.search);
            data="add.htm"+data;
            window.open(data,"_self");
       }