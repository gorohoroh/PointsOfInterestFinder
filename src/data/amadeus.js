import credentials from "../credentials.json"

export const getPointsOfInterestBySquare = async (square) => {
    console.log("hello from getPointsOfInterestBySquare")
    const baseUrl = "https://test.api.amadeus.com/v1";

    const tokenRequest = await fetch(`${baseUrl}/security/oauth2/token`,
        {
            method: "POST",
            body: `grant_type=client_credentials&client_id=${credentials.amadeus.key}&client_secret=${credentials.amadeus.secret}`,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        });
    const tokenResponse = await tokenRequest.json();
    const token = tokenResponse.access_token;

    const safetyLocationsRequest = await fetch(`${baseUrl}/reference-data/locations/pois/by-square?north=${square.north}&west=${square.west}&south=${square.south}&east=${square.east}`,
        {
            headers: {"Authorization": `Bearer ${token}`}
        })
    const safetyLocationsResponse = await safetyLocationsRequest.json()
    return safetyLocationsResponse.data;
};
