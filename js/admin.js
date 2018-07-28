var glob=new String();       
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


function load()
       {         
            alert("checking Session");
            var str=new String;
            str=document.cookie;
            str=str.split(';');
            str=str[0];
            str=str.split('|'); 
            var data=new String();
            data=localStorage.getItem("admin");
            data=data.split("|");
            if(str[0]==data[0]&&str[1]==data[1]) {
                alert("Welcome " + str[0]);
            } else {
                alert("pls Login");
                window.open("mainpage.htm","_self")
            }
            var i=0,t;
           var data=new String();
            temp="userid"+i;
            data=localStorage.getItem(temp);
            while(data!=null)
            {
                data=data.split("|");
                data=data[0];
                t=document.getElementById("dealers").options[i+1];
                t.text=data;
                t.style.display='block';
                i++;
                temp="userid"+i;
                data=localStorage.getItem(temp);
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
    s=document.getElementById("dealers").value;
    s=document.getElementById("dealers").options[s].text;
    var d=document.getElementById("K1").value;
    s=s+d;
    s=localStorage.getItem(s);
    if(s==null)
    {    alert("Data not found!");
        return;
    }
    s=s.split("|");
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

function adddet()
{
    var id=document.getElementById("K3").value;
    var name=document.getElementById("K2").value;
    glob=id+"|"+name;
    var i=0;
    var data=new String();
    var temp=new String();
    temp="namdel"+i;
    data=localStorage.getItem(temp);
    while(data!=null)
    {
        data=data.split("|");
        data=data[0];
        if(data==id)
            {
                alert("Dealer Id already Exists!");
                return;
            }
        i++;
        temp="namdel"+i;
        data=localStorage.getItem(temp);
    }
    localStorage.setItem(temp,glob);
    temp=temp+"k";
    localStorage.setItem(temp,"0");
    data=localStorage.getItem(temp);
    alert("Dealer Id added");

}

       function logout()
       {
           alert("Logged out! Redirecting to main page...");
           document.cookie = "AA|AA; path=/" ;
           window.open("mainpage.htm","_self");
       }