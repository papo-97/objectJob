
let cityFacts =function(city){
    const { name:N,population: P,continent:C}=city;
    let facts = '${N} has a population of ${P} and is situated in ${C}'
return facts;
}


 const city ={
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
    };
    
 console.log(cityFacts(city));