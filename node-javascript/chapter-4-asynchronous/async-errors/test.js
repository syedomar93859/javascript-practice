async function fetchDataWithCatch(){
    try{
        let data = await Promise.reject("Oops, something went wrong!");
        console.log(data);
    }catch (error){
        console.log(error);
    }
}

fetchDataWithCatch();