require('./setup');

test('searches for "Apples"', async t => {
  await page.type('#search_form_input_homepage', 'Apple Wiki');
  await page.click('#search_button_homepage');
  const searchResult = await page.waitForSelector('.result__a');
  const valueHandle = await searchResult.getProperty('innerHTML');
  t.true((await valueHandle.jsonValue()).includes('Apple'));
});

test('page title should contain "DuckDuckGo"', async t => {
  t.true((await page.title()).includes('DuckDuckGo'));
});

