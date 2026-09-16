const http = require("http");

const PORT = process.env.PORT || 8080;
const VERSION = process.env.APP_VERSION || "1.0.0";

const server = http.createServer((req, res) => {

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

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>AWS ECS CI/CD Demo</title>
        </head>
        <body>
            <h1>AWS ECS CI/CD Demo</h1>
            <h2>GitHub → CodePipeline → CodeBuild → ECR → ECS</h2>
            <p>Application Version: ${VERSION}</p>
            <p>Status: Running</p>
        </body>
        </html>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});
