const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")


//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https" //Your domain, don't give it a sloping line ( /) behind the domain
global.apikey = "ptla" //ptla 
global.capikey = "ptlc" //ptlc key

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});