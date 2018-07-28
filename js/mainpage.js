function validate(username,pswd)
                    {
                         var text1=document.getElementById("username");
                        var text2=document.getElementById("pswd");
                        var data=new String();
                                var temp=new String();
                        data="admin";
                        data=localStorage.getItem(data);
                        data=data.split("|");
                        if(text1.value==data[0] && text2.value==data[1])
                            {
                                alert("successful login");
                                document.cookie = text1.value+"|"+text2.value+"; path=/" ;
                                window.open("admin.htm");
                                return;
                            }
                                var i=0;
                                var data=new String();
                                temp="userid"+i;
                                data=localStorage.getItem(temp);
                                while(data!=null)
                                {
                                    data=data.split("|");
                                    if(text1.value==data[0]&&text2.value==data[1])
                                    {
                                        alert("Welcome "+data[0]);
                                        document.cookie = text1.value+"|"+text2.value+"; path=/" ;
                                        temp="add.htm?"+temp;
                                        window.open(temp);
                                        return;
                                    }
                                    i++;
                                    temp="userid"+i;
                                    data=localStorage.getItem(temp);
                                }
                                alert("Invalid username & password, please try again");
}