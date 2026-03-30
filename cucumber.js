

module.exports={
default:{
    paths:[
        "tests/Features/*.feature"
    ],
   require:[
    "tests/Stepdefinition/*.js",
    "tests/Hooks/*.js"
   ],
   format:[
    "progress",
    "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html",
      "junit:reports/cucumber-report.xml"
   ]

}

};