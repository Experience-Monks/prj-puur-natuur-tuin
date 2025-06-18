Convert Spreadsheet to Localised JSON Files
-------
1. Create a google sheet, each page will be parsed as an object: [Find a template here](https://docs.google.com/spreadsheets/d/192qZmlAErNh_1CHwipgq7why2IAjcdo3WU7H0bVw7e8/edit?usp=sharing).
2. The first column represents the `label` or `key`, and any other column after that represents a locale (eg. `en-gb`) which contains the translation value for that key
3. Make sure there is no existing `credentials.json` or `token.json` in this folder
4. In this folder (same level as this README) run `yarn`
5. Go to [Google Cloud Dashboard](https://console.cloud.google.com/home/dashboard) and click the arrow on the top left next to "Select a project" and click "NEW PROJECT" in the modal
6. Enter a generic name ie "Google Sheet Parser" since you can use this for future projects as well, organization and location should be predefined
7. After creating the project make sure it's selected (its name should be reflected in the top left next to drop down arrow you clicked earlier)
8. Go to [Credentials](https://console.cloud.google.com/apis/credentials)
9. Click [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent/). Select "Internal" as the type, click "Create"
10. Fill out the name and use your own email address for the required field and for Developer contact information, skip anything else and click save and continue until you get sent back to the dashboard. In some cases an error occurs without explanation, just empty the form and refill the fields and try again.
11. Got back to the Credentials page
12. Next, click "+ Create Credentials" on the top
13. Select "OAuth client ID" from the dropdown
14. Select "Desktop App" from the dropdown and give it a name and continue, you'll see modal saying "OAuth client created"
15. On the [Credentials](https://console.cloud.google.com/apis/credentials) you'll now see the credentials you just created, click the download icon on the very right
16. Place the json file in this folder (same level as this README) and name it `credentials.json`
17. Update the `SHEET_ID` variable in the translation.js to match your google spreadsheet ID.
18. Update the `OUTPUT_PATH` variable to match the folder you want the locale jsons to end up in.
19. Check and set the `SPLIT_TABS_INTO_FILES` variable. `false` means it will generate only 1 general.json per locale. `true` will break up the object into separate json's based on keys.
20. Run `node translation.js` in this folder through the command line
21. Authorize the app by following the link displayed when running `node translation.js` the first time. Run through the steps and it will create a `token.json` in this folder
22. If the authorization url returns a 400 error follow steps 22 through 25
23. Open the `credentials.json` file and replace `urn:ietf:wg:oauth:2.0:oob` with `http://localhost:1/`. If you can't find that value, it should be in the `redirect_uris`
24. Run `node translation` again to get the authorization url, but open the console before clicking allow
25. When clicking allow the console will show a url with an error (or the whole page itself breaks and shows the error including the url). In either case; in the url you'll notice a `code` parameter, copy the value of this parameter (The part between `code=` and `&scope`)
26. Go back to your terminal and paste the code
27. Enjoy the output (phew)
