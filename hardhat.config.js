require("@nomiclabs/hardhat-waffle")

const private = require("./privatekey.js")

module.exports = {
    solidity: "0.8.4",
    networks: {
        rinkeby: {
            // url: `https://eth-rinkeby.alchemyapi.io/v2/${private.alchemy}`,
            url: `https://eth-rinkeby.alchemyapi.io/v2/${private.privateAlchemy}`,
            accounts: [private.privateKey]
        },
    },
};