const dns = require("dns");
const LRU = require("lru-cache");

class DNSResolver{
    constructor(options){
        this.cache = new LRU(options?.cacheOptions);
    }

    async resolve(domain){
        if(this.cache.get(domain)) return this.cache.get(domain)
        return new Promise((resolve, reject)=>{
            dns.resolve4(domain, (err, address, family)=>{
                if (err) reject(err);
                this.cache.set(domain, `ip: ${address} family: ${family||'ipv4'}`)
                resolve(`ip: ${address} family: ${family||'ipv4'}`);
            })
        })
    }
}

const test = new DNSResolver({cacheOptions: {
    max: 100,
    maxAge : 1000 * 60 * 60 // 1 hour
 }}
 );

console.time("simple DNSResolver");
test.resolve("youtube.com").then(data=>{
    console.log(data)
})
console.timeEnd("simple DNSResolver")

setTimeout(()=>{
    console.time("cached DNSResolver");
    test.resolve("youtube.com").then(data=>{
        console.log(data)
    })
    console.timeEnd("cached DNSResolver")
}, 1000)
