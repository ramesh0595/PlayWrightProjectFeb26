

module.exports={
default:{
   
   require:[
    "tests/Stepdefinition/*.js",
    "tests/Hooks/*.js"
   ],
   format:[
    "progress",
    "json:reports/cucumber-report.json"
      
   ]

}

};