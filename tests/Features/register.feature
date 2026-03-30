Feature: To Validate and verify the login Functionallity of the faceBook Application

Background:
Given The user should be in faceBook Page

@regression
Scenario: Valid-register To validate the Registration Functionallity


When  The user has to click the create new account button
And The user has to fill the firstname,lastname and other details
And The user has to click the submit button
Then The user should be get successfully Registered

@retest @regression
Scenario: InValid-register To validate the Registration Functionallity


When  The user has to click the create new account button
And The user has to fill the firstname,lastname and other details
And The user has to click the submit button
Then The user should be get successfully Registered







