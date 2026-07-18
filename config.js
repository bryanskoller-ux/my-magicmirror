let config = {
    address: "0.0.0.0",
    port: 8080,
    basePath: "/",
    ipWhitelist: [],
    useHttps: false,
    language: "de",
    locale: "de-CH",
    timeFormat: 24,
    units: "metric",

    modules: [
        {
            module: "clock",
            position: "top_left",
            config: {
                timeFormat: 24,
                displaySeconds: false,
                showDate: true
            }
        },
        {
            module: "weather",
            position: "top_right",
            config: {
                weatherProvider: "openmeteo",
                type: "current",
                lat: 46.8066,
                lon: 9.8427,
                showWindDirection: false,
                showFeelsLike: true
            }
        },
        {
            module: "weather",
            position: "top_right",
            header: "Wettervorhersage",
            config: {
                weatherProvider: "openmeteo",
                type: "forecast",
                lat: 46.8066,
                lon: 9.8427,
                maxNumberOfDays: 3,
                fade: true
            }
        },
        {
            module: "MMM-SwissCommute",
            position: "bottom_left",
            header: "Abfahrten: Davos Dorf",
            config: {
                from: "Davos Dorf, Dischmastrasse",
                to: "Davos Platz, Schatzalpbahn",
                maximumEntries: 6,
                minWalkingTime: 0
            }
        }
    ]
};

if (typeof module !== "undefined") { module.exports = config; }
