function valid()
{
var testName =/^([a-z]|[A-Z]| )*$/;
var num = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var validatechar= /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.pdf|\.html)$/i;

var form = document.data;


if(document.data.name.value=="")
{
    alert("please enter name")
    document.data.name.focus();
    return false;
}
else
if(!testName.test(document.data.name.value))
{
    alert("please enter name in correct format")
    document.data.name.value="";
    document.data.name.focus();
    return false;
}
else
if(document.data.pswd.value=="")
{
    alert("please enter password");
    document.data.pswd.focus();
    return false;
}
else
if(document.data.pswd.value.length<6)
    {
        alert("please take password more than 6 digit");
        document.data.pswd.value==""
        document.data.pswd.focus();
        return false;
    }
else
if(!num.test(document.data.pswd.value)
)
{
    alert("please enter atleast one numeric value, one lowercase,one upercase,one special symbol");
    document.data.pswd.value="";
    document.data.pswd.focus()
    return false;
}
else
if(document.data.email.value=="")
{
    alert("please enter email");
    document.data.email.focus();
    return false;
}
else
if(!validatechar.test(document.data.email.value))
{
    alert("please write e-mail in proper format i.e. username@domainname");
    document.data.email.value="";
    document.data.email.focus();
    return false;

}
else
if(!document.data.gender[0].checked && !document.data.gender[1].checked)
{
    alert("please choose gender")
    document.data.gender[0].checked=true;
    return false
}
else
if(document.data.qul[0].checked==false&&document.data.qul[1].checked==false && document.data.qul[2].checked==false)
{
    alert("please choose Qualification");
    document.data.qul[0].checked=true;
    return false;
}
else
if(document.data.city.value=="select")
{
    alert("please choose city name");
    document.data.city.focus();
    return false;
}
else
if(document.data.Address.value=="")
{
    alert("please enter address");
    return false;
}
else
if(document.data.pic.value=="")
{
    alert("please select your pic");
    document.data.pic.focus();
    return false;

}
else
if(!allowedExtensions.exec(document.data.pic.value))
{ 
    alert("this file type not allowed.");
    document.data.pic.value="";
    document.data.pic.focus();
    return false;
}
else
{
    var cn = confirm("ARE YOU SURE TO SUBMIT THE FORM?");
    if(cn==true)
    {
        alert("submitted successfully!!!!");
        return true;

    }
    else
    return false;
}
}

