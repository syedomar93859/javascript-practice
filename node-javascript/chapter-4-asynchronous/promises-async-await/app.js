async function fetchData(){
    try{
        let data = await Promise.reject("Error occurred!");
        console.log(data)
    }catch(error){
        console.log(error);
    }
}
fetchData()