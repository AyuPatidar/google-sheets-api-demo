const express = require("express");
const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
// Path to your service-account.json file
const keyPath = path.join(__dirname, "service-account.json");
const credentials = JSON.parse(fs.readFileSync(keyPath));

// Initialize Google Sheets API client
const auth = new google.auth.GoogleAuth({
	credentials: credentials,
	scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Define your spreadsheet ID (replace with your actual Spreadsheet ID)
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID";

app.post("/write-to-sheet", async (req, res) => {
	try {
		const { data } = req.body;

		// Read from sheet
		const readResponse = await sheets.spreadsheets.values.get({
			spreadsheetId: SPREADSHEET_ID,
			range: "Sheet1!A:A", // Range to get all values in column A
		});

		// Find the next empty cell in column A
		const rows = readResponse.data.values;
		const nextRow = rows ? rows.length + 1 : 1;

		const range = `Sheet1!A${nextRow}`;

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

const port = 5000;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
