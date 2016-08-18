var env = process.env.NODE_ENV || 'development';

module.exports = {
  "development": {
    "secret": "59acb3e12f32c45ac506c1803d48bbf8c8c469202bcd6361b74b7bab578b12ca64211f8ccf968e7cb1c0004b594c6331ee37b740de521a9eb4c93cfb146aa21e798d1ad85c477ee6feb5a03532f933b287fc8a2f578c3e3f18b66c56d9dd09c71bb3ca4a900b38c03b72305aa81b39a40c778f11bec6f1d6c7b9f53176bb279b5a9b03733561137a5056148306201c8d2cd9be19026dee6668a00de0503bc4b9abd78d17b27e27769737693c355f16f2b1683078a8ebc4b597d92f22702be252845f47820b116eb591346e7926b0eeedd955661740899be7c65e51dc31b6e54a7014d6e6cab0e1594137587627daea3f9f541f1521182ba949d9fa3483a9a1cf"
  },
  "test": {
    "secret": "f25f7e24c035d616750852ad06146accbc9d750be84195d21fdf2141195496de74ab499cb817602d8b2035324305f19256e993d9d8c91b37882a6997ceb329b28e57e9d54b920697609b59803fad28f7e6b31f68bd31baeb53dbedf958e17d960da50a462e538dc795ae25770789d464e47ca245cd11e06b0cee3189cb8bf838026eb78c54dd83c17b5035e6bec515bedd203b44718895be32447e12c2f7d5e922fb421c4ab8d7590a718a6a1596876fc3c0db7d406530435e9b89de11bdcc2f6915f97b225f79daceb38be32f0e61995bdc2982c65af5c54249c5afa0021a411f26f50b3901e85e74d9c08049b2588fbde6e8943e5b57005dc1330ee5246a0e"
  },
  "production": {
    "secret": process.env.SECRET
  }
}[env]
