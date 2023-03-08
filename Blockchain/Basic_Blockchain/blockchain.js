const SHA_256 = require('crypto-js/sha256');

class Block{
    constructor( index, previousBlockHash='', data){
    this.index=index;
    this.previousBlockHash=previousBlockHash;
    this.data = data;

    this.nonce = 0;
    
    // Call GenerateHash method
    this.hash=this.generateHash();
    }

    generateHash(){
        return SHA_256(this.index + this.previousBlockHash + JSON.stringify(this.data) + this.nonce).toString();
      }



    miningBlock(difficulty){
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.generateHash();
        }

        console.log("Block mining " +this.hash);
    }
  
    }


class newBlockchain{
    constructor(){
    this.blockchain = [this.createGenesisBlock()];
    this.difficulty = 1;
    }
    //First block of blockchain
    createGenesisBlock(){
    // 0 is index, "" is previous hash of the block
    return new Block(0,"",{bit:3});
    }

    getNewestBlock(){
    return this.blockchain[this.blockchain.length-1];
    }
    //Add block and regenerate hash method
    addBlock(Block){
        Block.previousBlockHash = this.getNewestBlock().hash;
        Block.hash = Block.generateHash();
        this.blockchain.push(Block);
    }
    
    
    blockchainValid(){
            //loop checking if it's valid
            for(let i= 1; i < this.blockchain.length; i++){
                const currentBlock = this.blockchain[i];
                const previousBlock = this.blockchain[i - 1];
    
                if(currentBlock.hash !== currentBlock.generateHash()){
                    return ' "No, block is not valid" ';
                }
    
                if(currentBlock.previousBlockHash !== previousBlock.hash){
                    return ' "No, block is not valid" ';
                }
            }
            return ' "Yes, block is valid" ';
        }
    
    addMineBlock(Block){
            Block.previousBlockHash = this.getNewestBlock().hash;
            Block.miningBlock(this.difficulty);
            this.blockchain.push(Block);
    }
    }

    
//Declare variable to call newBlockchain class
let showBlockchain = new newBlockchain();
showBlockchain.addBlock(new Block(1, "", {bit: 1}));
showBlockchain.addBlock(new Block(2, "", {bit: 2}));
//Before modifying data
console.log('Is blockchain valid or not? ' + showBlockchain.blockchainValid());

/**
 * Modifying codes below
 */
showBlockchain.blockchain[1].data = {bit:2};
showBlockchain.blockchain[1].hash = showBlockchain.blockchain[1].generateHash();
//After modifying data
console.log('Is blockchain valid or not? ' + showBlockchain.blockchainValid());



console.log("Mining block 1 ...");
showBlockchain.addMineBlock(new Block(1, "", {bit: 1}));
console.log("Mining block 2 ...");
showBlockchain.addMineBlock(new Block(2, "", {bit: 2}));







