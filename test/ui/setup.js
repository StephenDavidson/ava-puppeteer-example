const { test } = require('ava');
const puppeteer = require('puppeteer');
const url = require('../../config.json')["production"]["url"];

global.test = test;

test.before(async () => {
  global.browser = await puppeteer.launch();
  global.page = await browser.newPage();
  await page.goto(url);
});

test.after.always(async () => {
  await page.close();
  await browser.close();
});