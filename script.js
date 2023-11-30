let restcountries=new XMLHttpRequest();
restcountries.open("GET","https://restcountries.com/v2/all");
restcountries.send();
restcountries.onload=function()
{
    let result=restcountries.response;
    let result2=JSON.parse(result);
    for(var key in result2)
    {
        console.log(result2[key].flag);
    }
    
}