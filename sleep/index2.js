
async function sleep(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("end")
        }, time)
    })
};


console.log("test1");
(async function(){
    let result = await sleep(2000);
    console.log(result)
})();
console.log("test2");