const express = require("express");
const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
const port = 5000;

// Body parser middleware to handle incoming JSON data
app.use(cors());
// Path to your service account JSON file
const keyPath = path.join(__dirname, "service-account.json");
const credentials = JSON.parse(fs.readFileSync(keyPath));

// Initialize Google Sheets API client
const auth = new google.auth.GoogleAuth({
	credentials: credentials,
	scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Define your spreadsheet ID (replace with your actual Spreadsheet ID)
const SPREADSHEET_ID = "1YyTZqlSAiR1VMbIkQYAs5jRYoEe00m0qzh_m9DCS02M";

// Endpoint to accept JSON data from the client
app.post("/write-to-sheet", async (req, res) => {
	try {
		const { data } = req.body; // The JSON data to be written
		console.log("Done");

		// The range where you want to write the data, e.g., Sheet1!A1
		const range = "Sheet1!A6";

		// Write to the sheet
		const response = await sheets.spreadsheets.values.update({
			spreadsheetId: SPREADSHEET_ID,
			range: range,
			valueInputOption: "RAW",
			requestBody: {
				values: data,
			},
		});
		res.status(200).send({ message: "Data written successfully!", response });
	} catch (error) {
		res.status(500).send({ message: "Error writing to sheet", error });
	}
});

// Start server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
