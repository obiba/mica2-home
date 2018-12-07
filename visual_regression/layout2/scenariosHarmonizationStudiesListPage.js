
function clickOnStudy(study){
  return "div[test-ref='study']:nth-child(" + study + ") > div:nth-child(2) > a";
}

function counClick(study, countLabel){
  return "div[test-ref='study']:nth-child(" + study + ") > div:nth-child(2) > div > div > a[test-ref='" + countLabel + "']";
}

var pagePath = "/mica/study/harmonization-study#/search?query=study(in(Mica_study.className,HarmonizationStudy),sort(name))";


var scenarios = [
  {
  "label": "Harmonization Studies List Page ",
  "path": pagePath,
  "delay": 'searchLoad'
  },
  {
    "label": "Harmonization Studies List Page go to advenced search page",
    "path": pagePath,
    "clickSelector": ".list-search-widget > div:nth-child(2) > small > a",
    "delay": 'searchLoad'
  },
  {
    "label": "Harmonization Studies List Page click on sort button",
    "path": pagePath,
    "clickSelector": 'button#SortOrder',
    "delay": 'delayOnPage'
  },
  {
    "label": "Harmonization Studies List Page got to chpt-project detail page",
    "path": pagePath,
    "clickSelector": clickOnStudy(1),
    "delay" : 'searchLoad'
  },
  {
    "label": "Harmonization Studies List Page got to cptp-hs detail page",
    "path": pagePath,
    "clickSelector": clickOnStudy(2),
    "delay" : 'searchLoad'
  },
  {
    "label": "Harmonization Studies List Page -CPTP Harmonization Study- click on Variables count",
    "path": pagePath,
    "clickSelector": counClick('2', 'dataSchemaVariableCount'),
    "delay" : 'searchLoad'
  },
  {
    "label": "Harmonization Studies List Page -CPTP Harmonization Study- click on Dataset count",
    "path": pagePath,
    "clickSelector": counClick('2', 'datasetCount'),
    "delay" : 'searchLoad'
  },
  {
    "label": "Harmonization Studies List Page -CPTP Harmonization Study- click on Network count",
    "path": pagePath,
    "clickSelector": counClick('2', 'networkCount'),
    "delay" : 'searchLoad'
  },
  {
    "label": "Harmonization Studies List Page input text search cptp",
    "path": pagePath,
    "inputText": {
      "selector" : "entity-search-typeahead input[type=\"search\"]",
      "text": "cptp"
    },
    "delay" : 'searchLoad'
  }
];

module.exports = scenarios;
