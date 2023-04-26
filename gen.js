var run1=0;
var run2=0;
var prun =0 ;
var prun1 =0;
var prun2 =0;
var wicket1=0;
var wicket2=0;
var over1 =0;
var over2 =0;
var count =0;
var i =0;
var team = 2;
var strk;
var strk1;
const ids= ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22'];
var op1 = document.getElementById(ids[0]);
var op2 = document.getElementById(ids[1]);
var runt1 = document.getElementById('team1run')
var runt2 = document.getElementById('team2run')
var wk1 = document.getElementById('wicket1');
var wk2 = document.getElementById('wicket2');
var balls1=document.getElementById('over1');
var balls2=document.getElementById('over2');
strk = op1;
strk1 = run1;


function teamChange()
{
    if(team == 1)
    {
        team =2;
    }
    else
    {
        team =1;
    }
}
function changeply()
{
    if(op1 == strk)
    {
        i = i +2;
        op1 = document.getElementById(ids[i]);
    }
    else if(op2 == strk)
    {
        i = i + 1;
        op2 = document.getElementById(ids[i]);
    }
}
function one()
{
    count = count + 1;
    // prun = prun +1;
    strk.innerHTML = strk1;

    strk1 = run1;
    run1 = run2;
    run2 = strk1;

    strk = op1;
    op1 = op2;
    op2 = strk;


    if(team == 1)
    {
        run1 = run1 + 1;
        runt1.innerHTML = run1;
    }
    else
    {
        run2 = run2 +1;
        runt2.innerHTML = run2;
    }

}
function two()
{
    count = count + 2;
    strk.innerHTML = count; 
    
    if(team == 1)
    {
        run1 = run1 + 2;
        runt1.innerHTML = run1;
    }
    else
    {
        run2 = run2 +2;
        runt2.innerHTML = run2;
    }

}
function four()
{
    count = count + 4;
    strk.innerHTML = count
    
    if(team == 1)
    {
        run1 = run1 + 4;
        runt1.innerHTML = run1;
    }
    else
    {
        run2 = run2 +4;
        runt2.innerHTML = run2;
    }
}
function six()
{
    count = count + 6;
    strk.innerHTML = count
    
    if(team == 1)
    {
        run1 = run1 + 6;
        runt1.innerHTML = run1;
    }
    else
    {
        run2 = run2 +6;
        op1.innerHTML = run2;
    }
}
function wicket()
{
    if(team == 1)
    {
        wicket1 = wicket1 +1;
        wk1.innerHTML = wicket1;
        changeply();
    }
    else
    {
        wicket2 = wicket2 +1;
        wk2.innerHTML = wicket2;
        changeply();
    }
}

function whide()
{
    if(team == 1)
    {
        run1 = run1 + 1;
        runt1.innerHTML = run1;
    }
    else
    {
        run2 = run2 + 1;
        runt2.innerHTML = run2;
    }
}
var ball=0; 
var ov =0;
function over()
{  
if(team == 1)
{  
         ball = ball + 1;
        if(ball < 6)
        {   
            over1 = over1 + 0.1;
            balls1.innerHTML = ov+over1;    
        }
        else if(ball > 6)
        {
            ov = ov +1;
            balls1.innerHTML = ov;
            ball=0;
            over1=0;
        }
        
        // over1 = 0;
    }
    else
    {
        ball = ball + 1;
       if(ball < 6)
       {   
           over2 = over2 + 0.1;
           balls2.innerHTML = ov+over2;    
       }
       else if(ball > 6)
       {
           ov = ov +1;
           balls2.innerHTML = ov;
           ball=0;
           over2=0;
       }
       
    }

}