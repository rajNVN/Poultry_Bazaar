var v1=0,v2=0;
function mobile( ){
      var n = document.getElementById('F3').value;
     var i = /^[0]?[789]\d{9}$/;

     if(i.test(n)){
         v1=1;
        return;
    }

    else{
        alert("please enter valid mobile number");
        v1=0;
        document.getElementById('F3').focus();
    }

}
function email( ){
      var n = document.getElementById('F2').value;
     var i = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     if(i.test(n)){
         v2=1;
        return;
    }

    else{
        alert("please enter valid mailId");
        v2=0;
        document.getElementById('F2').focus();
    }

}

function record()
{
    if(v1==1&&v2==1)
        {
            rcd();
        }
    else{
        alert("satisfy the fields correctly");
    }
}

function rcd()
    {
        var t1=document.getElementById("F1").value;
        var t2=document.getElementById("F2").value;
        var t3=document.getElementById("F3").value;
        var t4=document.getElementById("F4").value;
        var t5=document.getElementById("F5").value;
        var t6=document.getElementById("F6").value;        
        var k=new String();
        var i=0;
        var data=new String();
        var data1=new String();
        var temp=new String();
        temp="namdel"+i;
        data=localStorage.getItem(temp);
        while(data!=null)
        {
            data=data.split("|");
            if(data[0]==t4)
                {
                    k=temp+"k";
                    k=localStorage.getItem(k);
                    if(k=='1')
                        {
                            alert("Dealer Id already Registered!");
                            return;
                        }
                    if(data[1]!=t1)
                        {
                            alert("Dealers Id found. But Name not matched");
                            return;                            
                        }
                    k=temp+"k";
                    localStorage.setItem(k,"1");
                    adduser();
                    adduserid();
                    return;
                }
            i++;
            temp="namdel"+i;
            data=localStorage.getItem(temp);
        }
        alert("Dealer Id not found!");
        return;
    }
     function adduser()
{
        
        var t1=document.getElementById("F1").value;
        var t2=document.getElementById("F2").value;
        var t3=document.getElementById("F3").value;
        var t4=document.getElementById("F4").value;
        var t5=document.getElementById("F5").value;
        var t6=document.getElementById("F6").value;
        var i=0;
        var temp=new String();
        var data=new String();
        temp="user"+i;
        data=localStorage.getItem(temp);
        while(data!=null)
        {
            i++;
            temp="user"+i;
            data=localStorage.getItem(temp);
        }
        temp="user"+i;
        data=t1+"|"+t2+"|"+t3+"|"+t4+"|"+t5+"|"+t6;
        localStorage.setItem(temp,data);
        data=localStorage.getItem(temp);
        alert("Details recorded.");
}
function adduserid()
{
        var t1=document.getElementById("F1").value;
        var t2=document.getElementById("F2").value;
        var t3=document.getElementById("F3").value;
        var t4=document.getElementById("F4").value;
        var t5=document.getElementById("F5").value;
        var t6=document.getElementById("F6").value;
        i=0;    
        temp="userid"+i;
        data=localStorage.getItem(temp);
        while(data!=null)
        {
            i++;
            temp="userid"+i;
            data=localStorage.getItem(temp);
        }
        temp="userid"+i;
        data=t5+"|"+t6;
        localStorage.setItem(temp,data);
        data=localStorage.getItem(temp);
        data=data.split("|");
        alert("Note down ur details:\n UserId="+data[0]+"\n Password="+data[1]);
        window.open("mainpage.htm","_self");
}
function copy()
{
     var n = document.getElementById('F2').value;
     var i = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     if(i.test(n)){
         v2=1;
         var t=document.getElementById("F2").value;
        document.getElementById("F5").value=t;  
        return;
    }

    else{
        alert("please enter valid mailId");
        v2=0;
        document.getElementById('F2').focus();
    }
    
}