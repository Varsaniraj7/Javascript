try{
    const result = 10
    result = 11
    console.log(result)
}
catch(error){
    console.error(error.name, " ", error.message)
}