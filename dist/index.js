class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "22213123", "", "Hello", 123456);
let blockchanin = [genesisBlock];
console.log(blockchanin);
//# sourceMappingURL=index.js.map