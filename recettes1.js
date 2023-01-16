async function getSelect(){
    let selectedCategory = this.value;
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    const data = await response.json();
    console.log(data)
    
    for(let i = 0; i < data.meals.length; i++){
        document.querySelector("#la-catégorie").innerHTML += '<option value="Region">${data.meals[i].strCategory}</option>';
     }
    }
getSelect();

async function getRegion() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list%22");
    const data = await response.json();
    console.log(data)
   for(let i = 0; i < data.meals.length; i++) {
       document.querySelector("#la-région").innerHTML += '<option value="Category">${data.meals[i].strArea}</option>';
     }
}
 getRegion();