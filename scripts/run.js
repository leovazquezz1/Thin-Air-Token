const main = async () => {
    const contractFactory = await hre.ethers.getContractFactory("ThinAirToken")
    const contract = await contractFactory.deploy()
    await contract.deployed()

    console.log("Contract deployed to:", contract.address);

    let totalSupply = await contract.totalSupply()

    console.log("totalSupply", totalSupply);

    let balance = await contract.balanceOf('0x6e256B8C8C22F30A097fd9DB5E06dB1EBCaD625D')

    console.log("Balance:", balance);

    let decimals = await contract.decimals();

    console.log("decimals", decimals);

}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()