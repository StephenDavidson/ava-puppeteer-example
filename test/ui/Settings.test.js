require('./setup');

test('should display when clicking hamburger icon', async t => {
  await page.click('.js-badge-link-dismiss');
  await page.click('.header__button--menu');
  const navMenuHeadingText = await page.waitForSelector('.nav-menu__heading span', { visible: true });
  const valueHandle = await navMenuHeadingText.getProperty('innerHTML');
  t.is(await valueHandle.jsonValue(), 'Settings');
});

