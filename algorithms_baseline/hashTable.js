const crc32 = require("crc-32");

class HashTable{
    constructor(obj){
        this.size = obj.size;
        this.table = [];
    }

    set(key, value){
        if(typeof key !== "string") throw new Error("key must be a string");
        let index = Math.abs(crc32.str(key)) % this.size;
        if(this.table[index] === undefined){
            this.table[index] = [key, value] 
        } else {
            for(let i = 0; this.table[i] !== undefined; i++){
                this.table[index] = [key, value]
            }
        }
    }

    get(key){
        let index = Math.abs(crc32.str(key)) % this.size;
        if(this.table[index][0] === key){
            return this.table[index][1]
        } else {
            for(let i = 0; this.table[i][0] !== key; i++){
                return this.table[i][1]
            }
        }
        
    }

}


const table = new HashTable({size:30});

table.set("ket", "tet");
console.log(table.get("ket"));
table.set("let", "tett");
console.log(table.get("let"));