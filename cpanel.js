const fs = require('fs');
const SETTINGS_PATH = './setting.json';
const chalk = require('chalk');
const { version } = require("./package.json")



//~~~~~~~~~ cpanel settings config ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https" //Your domain, don't give it a sloping line ( /) behind the domain
global.apikey = "ptla" //ptla 
global.capikey = "ptlc" //ptlc key


// Always read fresh from disk — prevents stale cache issues
function loadSettings() {
    try {
        if (fs.existsSync(SETTINGS_PATH)) {
            return JSON.parse(fs.readFileSync(SETTINGS_PATH, 'utf8') || '{}');
        }
        fs.writeFileSync(SETTINGS_PATH, JSON.stringify({}, null, 2));
        return {};
    } catch (e) {
        console.error('Failed to load settings.json', e);
        return {};
    }
}

function saveSettings(settings) {
    fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settings, null, 2));
}

/**
 * Get a setting for a user, group, or bot.
 * @param {string} jid - User JID, group JID, or 'bot' for global bot settings
 * @param {string} key - Setting key
 * @param {*} defaultValue - Default value if key doesn't exist
 */
function getSetting(jid, key, defaultValue = false) {
    const settings = loadSettings();
    if (!settings[jid]) return defaultValue;
    return settings[jid][key] !== undefined ? settings[jid][key] : defaultValue;
}

/**
 * Set a setting for a user, group, or bot.
 * @param {string} jid - User JID, group JID, or 'bot' for global bot settings
 * @param {string} key - Setting key
 * @param {*} value - Value to save
 */
function setSetting(jid, key, value) {
    const settings = loadSettings();
    if (!settings[jid]) settings[jid] = {};
    settings[jid][key] = value;
    saveSettings(settings);
}

module.exports = { getSetting, setSetting };

