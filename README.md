# Project-One

<b>Minimum Viable Product (MVP)</b>
We are building a user-friendly hiking trail application where you will be able to view trails in major cities. The user will be able to select the city, then a list of trails will populate. The user will be able to click into those trails to read a bit more about it and other users who have walked the trails. The user will be able to create and delete trails.

<b>User Stories</b>
Home Page
1.	The user will be able to view a description of the application and what it will provide.
2.  The user will be able to click on a register link that will take them to the register page to create a new account.
3.  The user will be able to click on a login link that will take them to the login page to sign into their account.
4.  The user will be able to click on a profile link that will take them to their profile page.
5.  If the user is already logged in, there will be a logout link to sign out of their account.
6.	The user will be able to click a link in the navigation bar that will allow them to go to the cities page where there will be a picture and small description of the city.
7.	If the user already knows what city they want to direct to, there will be a drop-down menu so they can choose which city’s page to go directly to.

Register Page
1.  The user will be required to input an email, username, and password to register a new account.
2.  If the username or email has already been used to create an account, an error will be shown so that the user knows they must use a different one.
3.  If the username and email are unique, and the password has been entered, the user will be able to click on the submit button to create a new account. This will take them to the login page so they can sign in to their newly created account.
4.  There will also be a link at the bottom of the form that the user can click to take them to the login page if they already have an account.
5.  The user will be able to click the home button at any time to take them to the home page and cancel creating an account.

Login Page
1.  The user will be required to input their username and password into the form to login to their account.
2.  If the user puts in the correct username and password, they can click the submit button to log into their account. They will be redirected to the home page once logged in.
3.  If the username or password is incorrect, an error will be shown to let the user know that the information they submitted is incorrect and they must try again.
4.  If the user does not have an account, they can click on the sign up now button at the bottom of the form to get redirected to the register page.
5.  The user will be able to click the home button at any time to take them to the home page and cancel logging in.

Profile Page
// TODO

All Cities Page
1.	The user will be able to use the navigation bar to go back to the home page if they choose.
2.	There will be a picture of each city with the city's name for each city that Trail Legs has created.
3.	The user will be able to click on any city on that page to go to the city page and view the trails that have been created for that specific city.

City Page
1.	The user will be able to use the navigation bar to go back to the home page or back to the all cities page.
2.	All of the trails that have been created for the specific city’s page that the user is on will be displayed with the name and location.
3.	If the user clicks on a trail, it will bring them to the trail page if they are logged into their account. If they are not logged in, it will bring them to the login page.
4.	The user will also be able to click on the create trail button which will take them to a create page to add a new trail to that city. If the user is not logged in and try to create a new trail, it will take them to the login page.

Trail Page
1.	The user will be able to use the navigation bar to go back to the home page, back to the certain city they were in’s page, or the all cities page.
2.	The trail page will display a photo, the trail name, location, and city. It will also display a description of the trail that includes difficulty, length of the trail, and other details.
3.	If the user that created the trail is logged into their account, they will be able to click on an edit trail button which will take them to the edit trail page.
4.	If the user that created the trail is logged into their account, they will also be able to click on a delete trail button which will remove the trail from that city’s page.
5.  If the user that is logged in did not create the trail they are viewing, the edit and delete buttons will not be available.

Create Trail Page
1.	If the user decides not to create a new trail, they can use the navigation bar to go back to the home page or the city page. They could also click the cancel button at the bottom of the form.
2.	The user will be able to fill out the form that will include trail name, location, difficulty, description and photo. This form will only allow the city that they clicked create trail from.
3.	Once the user fills out the form, they will hit the submit button to send the data and it will bring the user into the newly created trail’s page.
4.  All of the fields are required so the user will receive an error if they omit one.

Edit Trail Page
1.	If the user decides not to edit the trail, they can use the navigation bar to go back to the home page or the city page. They could also click the cancel button at the bottom of the form.
2.	The user will fill out the form that includes the trail name, location, description, and photo. This form will only allow the city that they are editing the form from.
3.	Once the user fills out the form, they will hit the submit button to send the data and it will send the user back to the trail page.


