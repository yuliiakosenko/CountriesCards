<h1>Country Details App</h1>
This is an Ionic Angular application that provides detailed information about countries, including weather, currency conversion, random facts, and recent news. The app fetches data from various APIs and displays it in a user-friendly interface.
<br><br>
To run this project locally, follow these steps:

Clone the repository:
<pre><code>
git clone https://github.com/your-repository.git
cd your-repository  </code></pre>

Install the dependencies:

<pre><code>
npm install </code></pre>

Install Ionic CLI (if not already installed):
<pre><code>
npm install -g @ionic/cli </code></pre>


Start the development server:

<pre><code>
ionic serve </code></pre>


Usage
Once the development server is running, you can access the app in your browser at http://localhost:8100.

Navigate to the home page to see a list of countries.
Click on a country to view detailed information about it, including weather, currency conversion, random facts, and news.
<h2>Features</h2>
<b>Country List: </b> Displays a list of countries fetched from the Rest Countries API.<br>
<b>Country Details: </b> Provides detailed information about a selected country, including:
Country name, capital, languages, population, and flag.
Current weather information.
Currency conversion from the country's currency to EUR.
A random fact about the country.
Recent news related to the country.<br>
<b>Navigation:</b> Allows users to navigate between the home page and country details page.


<h2>Project Structure</h2>
The project follows the standard Angular project structure. Below are some key directories and files:

src/app: Contains the Angular components, services, and routing module.

home: Contains the home page component.
country-details: Contains the country details page component.
services: Contains the data and HTTP service files.
src/assets: Contains static assets like images and styles.

src/environments: Contains environment-specific configuration files.

src/index.html: The main HTML file.

src/main.ts: The main entry point of the application.

<h2>APIs Used</h2>
The app uses the following APIs to fetch data:

Rest Countries API: Provides country data (https://restcountries.com/v3.1/all)
Visual Crossing Weather API: Provides weather data (https://weather.visualcrossing.com/)
ExchangeRate API: Provides currency conversion rates (https://v6.exchangerate-api.com/)
Useless Facts API: Provides random facts (https://uselessfacts.jsph.pl/)
Currents API: Provides news data (https://api.currentsapi.services/)

<h2>Testing</h2>
The project includes unit tests for the main components and services. To run the tests, use the following command:


npm test

<h2>License</h2>
This project is licensed under the MIT License. See the LICENSE file for details.
