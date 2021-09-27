//c1d49c75136f61330ead13e882cb8d2a
//'http://apilayer.net/api/validate?access_key=' + access_key + '&number=' + phone_number

document.getElementById('button').addEventListener('click', function(e){

var el = document.getElementById("countryList");
var txt = el.options[el.selectedIndex].getAttribute("value");
let phoneNumber=document.getElementById('phoneNumber');
let access_key ='c1d49c75136f61330ead13e882cb8d2a';
let phone_number =`${txt}${phoneNumber.value}`;
let apiurl='http://apilayer.net/api/validate?access_key=' + access_key + '&number=' + phone_number

async function fetchapi(){
    try{
        let response = await fetch(apiurl);
        if(response.status===200){
            let data=response.json();
            console.log(data)
            data.then(data => {
                if(data.valid===true){
                    document.getElementById('validation').innerHTML=`<span class="badge badge-success">${data.valid}</span>`;
                }else{
                    document.getElementById('validation').innerHTML=`<span class="badge badge-danger">${data.valid}</span>`;
                }
                document.getElementById('number').innerHTML=data.international_format;
                document.getElementById('country').innerHTML=data.country_name;
                document.getElementById('carrier').innerHTML=data.carrier;
                document.getElementById('lineType').innerHTML=data.line_type;
                document.getElementById('location').innerHTML=data.location;
                document.getElementById('Prefixs').innerHTML=data.country_prefix
            })
        }else{
            throw new Error("Failed to fetch")
        }
    }catch(error){
        console.log(error.message);
    }
}
fetchapi();


})


