// Copyright (c) 2018-2019, Brandon Lehmann, The TurtleCoin Developers
//
// Please see the included LICENSE file for more information.

'use strict'

module.exports.ElectroneumD = require('./lib/electroneumd-rpc.js')
module.exports.ElectroneumService = require('./lib/service-rpc.js')
module.exports.WalletAPI = require('./lib/walletapi-rpc.js')

// These exports will be deprecated in a future version.
// Continue to use them at your own risk.
module.exports.Walletd = require('./lib/service-rpc.js')
module.exports.Service = require('./lib/service-rpc.js')
module.exports.Client = require('./lib/electroneumd-rpc.js')
