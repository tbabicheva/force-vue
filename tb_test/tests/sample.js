module.exports = {

  PageLoadTest : function (browser) {
    browser
      .windowMaximize()
      .url('http://www.alexckramer.com/force-vue/#/')
      .waitForElementVisible('.mdl-layout__title', 3000)
      .assert.containsText('.mdl-layout__title', 'Force Vue');
  },

  OpenHomePageTest : function (browser) {
    browser
      .click('.mdl-navigation__link')
      .assert.containsText('.mdl-tabs__tab', 'PERSON');
  },

  RandomPersonNameNotEmpty : function (browser) {
    browser
      .click('.mdl-button__ripple-container')
      .pause(2000)
      .expect.element('#personDataName').to.have.value.not.equals('');
    },

  RandomPersonHeightNotEmpty : function (browser) {
    browser
      .expect.element('#personDataHeight').to.have.value.not.equals('');
    },

  SelectPlanet : function (browser) {
    browser
      .click('.mdl-tabs__tab')
      .waitForElementVisible('.mdl-tabs__tab > option:nth-child(2)',3000)
      .click('.mdl-tabs__tab > option:nth-child(2)')
      .assert.containsText('.mdl-button', 'RANDOM PLANET');
    },

  RandomPlanetNameNotEmpty : function (browser) {
    browser
      .click('.mdl-button__ripple-container')
      .pause(2000)
      .expect.element('#planetName').to.have.value.not.equals('');
      },

  RandomPlanetRotationPeriodNotEmpty : function (browser) {
    browser
      .expect.element('#planetRotation').to.have.value.not.equals('');
    },

  SelectStarship : function (browser) {
    browser
      .click('.mdl-tabs__tab')
      .waitForElementVisible('.mdl-tabs__tab > option:nth-child(3)',3000)
      .click('.mdl-tabs__tab > option:nth-child(3)')
      .assert.containsText('.mdl-button', 'RANDOM STARSHIP');
    },

  RandomStarshipNameNotEmpty : function (browser) {
    browser
      .click('.mdl-button__ripple-container')
      .pause(2000)
      .expect.element('#starshipName').to.have.value.not.equals('');
    },

  AboutMenu : function (browser) {
    browser
      .click('div.mdl-layout__header-row:nth-child(3) > nav:nth-child(1) > a:nth-child(2)')
      .waitForElementVisible('.mdl-card__title-text',3000)
      .assert.containsText('.mdl-card__title-text', 'About');
    },

   ContactMenu : function (browser) {
      browser
        .click('div.mdl-layout__header-row:nth-child(3) > nav:nth-child(1) > a:nth-child(3)')
        .waitForElementVisible('.mdl-card__title-text',3000)
        .assert.containsText('.mdl-card__title-text', 'Contact');
      },

    SendEmail :  function (browser) {
       browser
        .setValue('#contactInfoName', 'Tanya')
        .setValue('#contactInfoEmail', 'babicheva1205@gmail.com')
        .setValue('#contactInfoNote', 'test note')
        .click('.mdl-button__ripple-container')
        .end();
         },
};
