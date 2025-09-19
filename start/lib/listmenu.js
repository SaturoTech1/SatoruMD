const chalk = require('chalk')
const fs = require('fs')

global.groupmenu = (prefix, hituet) => {
return`
`
}

// ANIME MENU
global.animemenu = (prefix) => {
return `
`
}

// OWNER MENU
global.ownermenu = (prefix) => {
return `
`
}

// DOWNLOAD SLAUGHTER MENU
global.downloadmenu = (prefix) => {
return `
`
}

// STICKER TORTURE MENU
global.stickermenu = (prefix) => {
return `
`
}

// EPHOTO FX MENU
global.ephotomenu = (prefix) => {
return `
`}

global.funmenu = (prefix) => {
return`
`}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
