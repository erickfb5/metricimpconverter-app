# **[Metric/Imperial Converter App](https://metricimpconverter-app.onrender.com)**

 This is a Metric/Imperial Converter web application that allows users to convert various units of measurement. The application is built using [Node.js](https://nodejs.org/en/about) and [Express.js](https://expressjs.com) on the server-side, with client-side functionality implemented in HTML, CSS, and JavaScript. It provides a simple interface for users to input a value and unit they want to convert and then receive the converted value and unit in response.

## Table of Contents

- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Conversion of units including gallons, liters, miles, kilometers, pounds, and kilograms.
- Support for fractional values and whole numbers in input.
- Real-time unit conversion.
- A user-friendly web interface for easy input and output.

## File Structure
The application's file structure includes the following **key** files and directories:

- ```/.server.js```: The main server file that sets up the Express.js server, defines routes, and starts the server.
- ```/controllers/convertHandler.js```: Contains the server-side logic for unit conversion.
- ```/views/index.html```: The HTML file for the user interface of the converter app.
- ```/routes/api.js```: Defines the API routes for handling unit conversion requests.
- ```/routes/testing.js```: Provides endpoints for testing purposes.
- ```/tests/1_unit-tests.js```: Contains unit tests for the application's functionality.
- ```/tests/2_functional-tests.js```: Contains functional tests for the application's API.
- ```/test-runner.js```: A utility for running and reporting test results.
- ```/package.json```: Contains project metadata and dependencies.

## Installation
To run the [Metric/Imperial Converter App](https://metricimpconverter-app.onrender.com) locally, follow these steps:
1. Clone this repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/metric-imperial-converter-app.git
2. Navigate to the project directory:
   ```bash
   cd metric-imperial-converter-app
3. Install the required dependencies:
   ```bash
   npm install
4. Rename the `.env.example` file to `.env` and update the required environment variables.   
5. Start the server:
   ```bash
   npm start
## Usage
Once the server is running, you can use the [Metric/Imperial Converter App](https://metricimpconverter-app.onrender.com) by opening your web browser and navigating to http://localhost:3000. You must follow the example usage provided on the web page to input values and units for conversion. The converted result will be displayed on the page.

## Technologies Used
The [Metric/Imperial Converter App](https://metricimpconverter-app.onrender.com) is built using the following technologies:

- [Node.js](https://nodejs.org/en/about)
- [Express.js](https://expressjs.com)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Dependencies
 The project relies on the following npm packages for its functionality:

- **```body-parser```**: Middleware for parsing request bodies.
- **```chai```**: Testing library for assertions.
- **```chai-http```**: Extension for making HTTP requests in tests.
- **```cors```**: Middleware for enabling Cross-Origin Resource Sharing.
- **```dotenv```**: Loads environment variables from a .env file.
- **```express```**: Web application framework for Node.js.
- **```mocha```**: Testing framework for running unit and integration tests.

## Testing
The application includes a comprehensive testing suite with _unit_ and _functional_ tests:

- **Unit Tests**: These tests validate individual components and functions of the application, ensuring correctness in parsing and conversions. The unit tests are defined in tests/1_unit-tests.js.
- **Functional Tests**: These tests check the overall functionality of the API by making HTTP requests to various endpoints and verifying the responses. The functional tests are defined in ```tests/2_functional-tests.js```.

To run the tests, you can use the following command: **```npm test```**

## Contributing
If you would like to contribute to this project, please follow these guidelines:

- Fork the repository on GitHub.
- Make your changes and commit them to your fork.
- Create a pull request from your fork to this repository. 

# License
This project is licensed under the **[MIT License](https://spdx.org/licenses/MIT.html)**.