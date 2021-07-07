const selectElem=document.querySelector('select#select');
function manipulateData(data){
console.log(data);
for(let i=0;i<192;i++)
{
//console.log(data.Countries[i]);
const op=data.Countries[i];
const singleData=data.Countries[i].Country;
makeNewOptionBox(singleData);

selectElem.addEventListener("change",function(e){
    if(e.target.value==singleData){
    let NewConfrimed=op.NewConfirmed;
    let NewDeaths=op.NewDeaths;
    let NewRecovered=op.NewRecovered;
    let TotalDeaths=op.TotalDeaths;
    let TotalCases=op.TotalConfirmed;
    console.log(data);
    console.log("Newconfirmed=>"+NewConfrimed);
    console.log("new deaths=>"+NewDeaths);
    console.log("new recoverd=>"+NewRecovered);
    console.log("total cases=>"+TotalCases);
    console.log("total deaths=>"+TotalDeaths);
    let cardTemplate = `
				<div class="row justify-content-center">
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-blue">
						<h2 class="mb-2">New Cases</h2>
						<p>${NewConfrimed}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-green">
						<h2 class="mb-2">New Deaths</h2>
						<p>${NewDeaths}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-pink">
						<h2 class="mb-2">New Recovered</h2>
						<p>${NewRecovered}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-red">
						<h2 class="mb-2">Total Cases</h2>
						<p>${TotalCases}</p>
					</div>
					<div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-purple">
						<h2 class="mb-2">Total Deaths</h2>
						<p>${TotalDeaths}</p>
					</div>
          
          
				</div>
        <button  id="refresh" onClick="window.location.reload();">Refresh</button> 
				
				`;
        const wrapper = document.querySelector(".wrapper");
				wrapper.innerHTML = cardTemplate;
 
    }
});
}

}
function makeNewOptionBox(data)
{

  const title=data;
  if(typeof title!="undefined"){
    const optionBox=document.createElement('option');
    optionBox.innerHTML=title;
    selectElem.appendChild(optionBox);
  }
  }

const fetchedData=fetch('https://api.covid19api.com/summary')
.then(response => {return response.json()})
.then(data => {
    manipulateData(data);
});


