let name = document.getElementById("name");
let pass = document.getElementById("pass");
const element = document.getElementById("admin");
const lpg = document.getElementById("LogPg");
var count =0;
function GETLOG()
{
    if(name.value === "admin" && pass.value === "admin")
    {
        element.scrollIntoView(false);
        
        name.value ="";
        pass.value ="";
        // alert("HI admon");
    }
    else if(count >= 3)
    {
        alert("🔴🔴🔴\nThis activity sent to admin.\n ")
        // element.scrollIntoView(false);
    }
    else
    {
        count += 1;
        name.value="";
        pass.value="";
        alert("wrong Password OR userName.")
    }
    // console.log(name)
}
function LOGPG()
{
    lpg.scrollIntoView(false);
}
