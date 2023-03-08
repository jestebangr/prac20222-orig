const $ = sel => document.querySelector(sel)
document.addEventListener("DOMContentLoaded", () => {
    let dbResponse = 
    fetch("/api")
    .then(resp => resp.json())
    .then( json => {
        dbResponse = `<ul class='p-4'><li><span class='text-white pr-2'>👤</span>${json?.user} </li><li><span class='text-white'>📅 </span> ${json?.now}</li></ul>`
        $("#response").innerHTML = dbResponse
        $('#success_response').classList.remove('hidden')

    }).catch( (e) => {
        console.log(e)
        $('#error_response').classList.remove('hidden')
    })
    
})
