const express = require ('express'); 

const router = express.Router();


const Web3 = require('web3');
var createToken = require("../build/contracts/createToken.json");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Post = require('../models/Posts');

router.get('/',(req,res)=>{
    res.send('Its Erc 20=>Router working');
});

router.get('/king',(req,res)=>{
    res.send('Viking Final Season Released');
});

const umair = async () => {
    const mnemonic = "cotton convince adapt lift baby animal pill mouse produce uncle fashion thing";
    const givenProvider = new HDWalletProvider(mnemonic,`https://rinkeby.infura.io/v3/60dbb150db224b2ab3811ba5fdd5f40d`)
    const web3 = new Web3(givenProvider);
    const networkId = await web3.eth.net.getId();
    
    const Contract = new web3.eth.Contract(
        createToken.abi,
        createToken.networks[networkId].address
        );
        
        router.get('/TokenOwner',async (req,res)=>{
            res.send(await Contract.methods.TokenOwner().call((err,result) => { console.log(result)}));
        });
        
    };
    
    const tsupply = async () => {
        const mnemonic = "cotton convince adapt lift baby animal pill mouse produce uncle fashion thing";
        const givenProvider = new HDWalletProvider(mnemonic,`https://rinkeby.infura.io/v3/60dbb150db224b2ab3811ba5fdd5f40d`)
        const web3 = new Web3(givenProvider);
        const networkId = await web3.eth.net.getId();
        
        const Contract = new web3.eth.Contract(
            createToken.abi,
            createToken.networks[networkId].address
            );
            
            router.get('/totalsupply',async (req,res)=>{
                res.send(await Contract.methods.totalSupply().call((err,result) => { console.log(result)}));
                
            });
            
        };
        
        const sym = async () => {
            const mnemonic = "cotton convince adapt lift baby animal pill mouse produce uncle fashion thing";
            const givenProvider = new HDWalletProvider(mnemonic,`https://rinkeby.infura.io/v3/60dbb150db224b2ab3811ba5fdd5f40d`)
            const web3 = new Web3(givenProvider);
            const networkId = await web3.eth.net.getId();
            
            const Contract = new web3.eth.Contract(
                createToken.abi,
                createToken.networks[networkId].address
                );
                
                router.get('/symbol',async (req,res)=>{
                    res.send(await Contract.methods.symbol().call((err,result) => { console.log(result)}));
                });
                
            };       
            
            const balance = async () => {
                const mnemonic = "cotton convince adapt lift baby animal pill mouse produce uncle fashion thing";
                const givenProvider = new HDWalletProvider(mnemonic,`https://rinkeby.infura.io/v3/60dbb150db224b2ab3811ba5fdd5f40d`)
                const web3 = new Web3(givenProvider);
                const networkId = await web3.eth.net.getId();
                
                const Contract = new web3.eth.Contract(
                    createToken.abi,
                    createToken.networks[networkId].address
                    );
                    
                    router.get('/balance',async (req,res)=>{
                        res.send(await Contract.methods.balanceOf('0x24b561feE7D6Bd29DA02EdF6C60797232561e1d9').call((err,result) => { console.log(result)}));
                    });
                    
                };       
                
                
                
                const transfer = async () => {
                    const mnemonic = "cotton convince adapt lift baby animal pill mouse produce uncle fashion thing";
                    const givenProvider = new HDWalletProvider(mnemonic,`https://rinkeby.infura.io/v3/60dbb150db224b2ab3811ba5fdd5f40d`)
                    const web3 = new Web3(givenProvider);
                    const networkId = await web3.eth.net.getId();
                    const acc = await web3.eth.getAccounts();                    
                    const Contract = new web3.eth.Contract(
                        createToken.abi,
                        createToken.networks[networkId].address
                        );
                        
                        router.post('/transfer',async (req,res)=>{
                            res.send(await Contract.methods.transfer(req.body.Account, req.body.Amount).send({from: acc[0]}));
                          //  console.log(acc);    
                        });
                        
                    };                   
                    
                    
                    
                    
                    
                    router.post('/',(req,res)=>{
                        console.log(req.body);
                    });
                    
                    umair();
                    tsupply();
                    sym();
                    balance();
                    transfer();
                    
                    
                    
                    module.exports=router;