# Product Dashboard – SAPUI5

A small product dashboard built with SAPUI5 as part of my SAP Fiori development learning journey.

It connects to the public Northwind OData API and lets you browse products, search through them, and click into a detail view for more info.

## What it does

- Loads the first 20 products from the Northwind OData V4 service
- Shows KPI tiles for total products and average price
- Search bar filters the table by product name (client-side)
- Click any row to open a detail page with full product info
- Back button returns you to the list

## Tech used

- SAPUI5 (sap.m controls)
- OData V4 (Northwind public API)
- JSONModel for data binding
- SAPUI5 Router for navigation
- VS Code + UI5 Tooling (local dev server)

## How to run it

1. Clone the repo
2. Make sure you have the UI5 CLI installed (`npm install -g @ui5/cli`)
3. Run `ui5 serve` in the project folder
4. Open `http://localhost:5500`

## Project structure
webapp/
├── controller/
│ ├── App.controller.js
│ ├── Products.controller.js
│ └── Detail.controller.js
├── view/
│ ├── App.view.xml
│ ├── Products.view.xml
│ └── Detail.view.xml
├── Component.js
└── manifest.json