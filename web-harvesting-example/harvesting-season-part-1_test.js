Feature('harvesting-season-part-1');

Scenario('test something', async ({ I }) => {

    I.say('starting the harvesting on Facebook')
    I.amOnPage('https://www.facebook.com/festivalmigente/events/?ref=page_internal')
    I.wait(5)
    I.click('Accept All')
    const htmlFromPostElement = await I.grabHTMLFrom('div')
    I.say(htmlFromPostElement)
    // I.click('')
    I.say('Enjoy The Fruits')
});
