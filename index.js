// just a configured version of yogurtsyums' qbot

const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.sendStatus(200)
})

let listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port:' + listener.address().port)
})

const Discord = require('discord.js')
const client = new Discord.Client()
const roblox = require('noblox.js')
const chalk = require('chalk')
const figlet = require('figlet')
require('dotenv').config()
const fs = require('fs')

roblox.setCookie(process.env.cookie).catch(async err => {
  console.log(chalk.red('Issue with logging in: ' + err))
})

let commandlist = []

let OneShout = true
let shout

// picking this up later
