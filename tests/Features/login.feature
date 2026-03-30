Feature: To Validate and verify the login Functionallity of the faceBook Application

Background:
Given The user should be in faceBook Page

@smoke @regression
Scenario: Login-Valid To validate the login Functionallity with Invalid Credentials


When  The user has to fill the userName "ramesh@gmail.com" and Password "1234567"
And The user has to click the login button
Then  The user should navigate the invalid Page

@sanity @regression
Scenario: Login Invalid To validate the login Functionallity with Invalid Credentials


When  The user has to fill the userName "mano@gmail.com" and Password "523452"
And The user has to click the login button
Then  The user should navigate the invalid Page






