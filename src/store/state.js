let state = {
    web3: {
        isInjected: false,
        web3Instance: null,
        networkId: null,
        coinbase: null,
        balance: null,
        error: null
    },
    contractInstance: null,
    hero: {
    	name: null,
    	position: null,
        created: null
    }
}
export default state