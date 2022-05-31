// SPDX-License-Identifier: UNLICENSED

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "hardhat/console.sol";

pragma solidity ^0.8.1;

contract ThinAirToken is ERC20 {

    uint256 public initialSupply = 100000;
    uint8 public _decimal = 2;


    constructor() ERC20("ThinAir", "TAIR") {
        console.log("Mere entro", msg.sender, initialSupply);
        _mint(msg.sender, initialSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimal;
    }
    
}