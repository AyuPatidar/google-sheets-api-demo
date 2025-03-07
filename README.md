# Google Spreadsheets Api Demo

This demo app demonstrates how to integrate the Google Sheets API into your application to perform insert operations on a spreadsheet without requiring client-side authentication and authorization. The focus of this implementation is to enable server-to-server communication, allowing insert operations to be executed without the user's awareness.

## 🔗 Links

[Documentation - Google Sheets API](https://developers.google.com/sheets/api/guides/concepts)

[Google Sheets](https://docs.google.com/spreadsheets/u/0/)

Create a sheet. Copy the spreadsheet id, it will be needed later. To know about spreadsheet id refer to the docs attached.

[Google Cloud Console](https://console.cloud.google.com)

This project requires a google developer account. Head out to the above link to create one, if you do not have one.

## Tech Stack

**Client:** HTML5, JavaScript

**Server:** Node, Express

## Secret file

To run this project, you will need to add `service-account.json` inside the server directory. This will be downloaded from the google cloud console.

## Setting up project "Spreadsheet" in Google Cloud Console

### Step 1 - Project creation
1. Log in to your account on google cloud console.
2. Click on the "Select a project" dropdown in the top navigation bar (next to the Google Cloud logo).
3. In the "Select a project" window, click the "New Project" button at the top right.
4. Fill in the project name and click "Create".

### Step 2 - Enable Google Sheets API
1. In the left-hand menu, click on "APIs & Services" > "Library".
2. In the API Library page, search for "Google Sheets API" using the search bar at the top.
3. From the search results, click on "Google Sheets API".
4. On the Google Sheets API page, click the "Enable" button to enable the API for your project.

### Step 3 - Create a service account
1. In the left-hand menu, Go to IAM & Admin > Service Accounts.
2. Click on + CREATE SERVICE ACCOUNT at the top.
3. Fill in the details and click "Create".
4. In the Role dropdown of Grant this service account access to project, select the role Editor and click "Continue".
5. Click Done to finish the service account creation process.

### Step 4 - Download service-account.json file
1. On the Service Accounts page, find the service account you just created.
3. Click on the three vertical dots next to your service account and select Manage Keys.
4. In the Keys section, click Add Key > Create new key.
5. Select JSON as the key type and click "Create".
6. The JSON file will be automatically downloaded to your computer. Rename it to "service-account.json".
7. Share your google sheet with the service account email and provide the editor role for this account.

## Run locally

### Step 1 - Clone the project on your desktop.

```bash
  git clone https://github.com/AyuPatidar/google-sheets-api-demo.git
```

### Step 2 - Move the downloaded "service-account.json" file inside the server directory.

### Step 3 - Fill the spreadsheet id in your server.js file.

### Step 4 - Run the server

```bash
  cd server
  npm i
  node server.js
```

### Step 3 - HTML File

Copy the absolute path and paste it in your browser tab.

After completing the following steps, you will observe that your spreadsheet is populated with the data sent by the HTML file to your server. The server then transfers this data to the Google Sheets API, which subsequently populates the data in your Google Sheet.
