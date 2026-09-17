const http = require("http");

const PORT = process.env.PORT || 8080;
const VERSION = process.env.APP_VERSION || "1.0.0";

const server = http.createServer((req, res) => {

    // Health Check Endpoint
    if (req.url === "/health") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            status: "healthy",
            version: VERSION
        }));

        return;
    }

    // Main Application
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>GitHub → ECR → ECS</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f4f6f8;
                    text-align: center;
                    padding: 60px;
                }

                .container {
                    max-width: 700px;
                    margin: auto;
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    font-size: 36px;
                    margin-bottom: 10px;
                }

                h2 {
                    font-weight: normal;
                    color: #555;
                }

                .pipeline {
                    margin: 30px 0;
                    font-size: 24px;
                    font-weight: bold;
                }

                .status {
                    display: inline-block;
                    padding: 10px 20px;
                    background: #28a745;
                    color: white;
                    border-radius: 20px;
                    font-weight: bold;
                }

                .info {
                    margin-top: 25px;
                    font-size: 18px;
                    color: #444;
                }
            </style>
        </head>

        <body>
            <div class="container">

                <h1>GitHub → ECR → ECS</h1>

                <h2>CI/CD Deployment Pipeline</h2>

                <div class="pipeline">
                    GitHub → ECR → ECS
                </div>

                <div class="status">
                    Application Running
                </div>

                <div class="info">
                    <p><strong>Application Version:</strong> ${VERSION}</p>
                    <p><strong>Port:</strong> ${PORT}</p>
                    <p><strong>Status:</strong> Healthy</p>
                </div>

            </div>
        </body>
        </html>
    `);
});

// Start Server
server.listen(PORT, "0.0.0.0", () => {
    console.log(`GitHub → ECR → ECS application running on port ${PORT}`);
});

