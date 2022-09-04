let num;

document.getElementById("sub").onclick=function(){
    num=document.getElementById("det").value;
    num=Number(num);

    if(num==0)
    {
        document.getElementById("ans").innerHTML="Enter a value above 'o' ";
    }
    else
    {
        if(document.getElementById("even").checked==true)
        {
            if((num%2)==0)
            {
                document.getElementById("ans").innerHTML="You'r answer is :"+" Yes";
                console.log("yes")
            }
            else
            {
                document.getElementById("ans").innerHTML="You'r answer is :"+"No";
    
            }
        }
        else if(document.getElementById("odd").checked)
        {
            if((num%2)==0)
            {
                document.getElementById("ans").innerHTML="You'r answer is :"+" No";
                console.log("No")
            }
            else
            {
                document.getElementById("ans").innerHTML="You'r answer is :"+"Yes";
    
            }
        }
        else if(document.getElementById("prime").checked)
        {
            let count=0;
            for(let i=0;i<=num;i++)
            {
                if(num%i==0)
                {
                    count++;
                }
            }
            if(count==2)
            {
                document.getElementById("ans").innerHTML="You'r answer is :"+"Yes";
            }
            else
            {
                document.getElementById("ans").innerHTML="You'r answer is :"+"No";
            }
        }
        else if(document.getElementById("cons").checked)
        {
            let count=0;
            for(let i=0;i<=num;i++)
            {
                if(num%i==0)
                {
                    count++;
                }
            }
            if(count==2)
            {
                document.getElementById("ans").innerHTML="You'r answer is :"+"No";
            }
            else
            {
                document.getElementById("ans").innerHTML="You'r answer is :"+"Yes";
            }
        }
        else {
            document.getElementById("ans").innerHTML="Please select one option to view Result";
        }
    }
    
}