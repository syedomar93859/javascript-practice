async function fetchData(){
    return "Data fetched successfully!";
}

fetchData()
    .then(result=> console.log(result))
    .catch(error => console.log(error));