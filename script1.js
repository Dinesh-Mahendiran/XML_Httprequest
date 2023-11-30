var result=new XMLHttpRequest();
result.open("GET","https://restcountries.com/v2/all");
result.send();
result.onload=function()
{
    let res1=result.response;
    let res2=JSON.parse(res1);
    for(var key in res2)
    {
        console.log(res2[key].name,res2[key].region,res2[key].subregion,res2[key].population);
    }
}