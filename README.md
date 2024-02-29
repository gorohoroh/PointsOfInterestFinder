## About Points of Interest Finder

Points of Interest Finder is a sample React application that demonstrates using the [Points of Interest API](https://developers.amadeus.com/self-service/category/destination-experiences/api-doc/points-of-interest) by [Amadeus](https://developers.amadeus.com/).

## How to launch Points of Interest Finder

1. Make sure you have Node installed on your system. If you don't already have a Node installation, please [download and install the latest Node LTS release](https://nodejs.org/en).
2. Clone this repository and open your local copy in a code editor.
3. Inside the `src` directory, create a new file called `credentials.json` and paste in the following code:
   ```json
   {
     "amadeus": {
       "key": "YOUR_API_KEY",
       "secret": "YOUR_API_SECRET"
     }
   }
   ```
4. Register with [Amadeus for Developers](https://developers.amadeus.com/) to get access to Amadeus for Developers Self-Service APIs.
5. In your [Amadeus for Developers self-service workspace](https://developers.amadeus.com/my-apps), create a new app.
6. Get your Amadeus app's actual API key and API secret and paste them into `credentials.json` instead of `YOUR_API KEY` and `YOUR_API_SECRET`.
7. At the root of the project, install dependencies by running `npm install`.
8. Start the application by running `npm start`. The application will open at `http://localhost:3000/` in your default browser.
