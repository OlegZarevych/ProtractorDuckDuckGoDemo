var DuckSearchPage = function(){}

DuckSearchPage.prototype = Object.create({}, {
searchInput: { get: function() { return element(by.id('search_form_input_homepage'))} },
searchBtn: {get: function() {return element(by.id('search_button_homepage'))}, }

})

module.exports = DuckSearchPage