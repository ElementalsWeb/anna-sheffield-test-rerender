//@ts-ignore
const path = require('path');
// @ts-ignore
const express = require("express");
// @ts-ignore
const fs = require("fs");
// @ts-ignore
const cors = require("cors");
// @ts-ignore
let fetch: any = require("fetch");
// @ts-ignore
const shopify = require("shopify");
// @ts-ignore
const getPriceRings = require("./api/index.js");

// @ts-ignore
(global as any).fetch = fetch;

// @ts-ignore
const app = express();
//@ts-ignore
const __dirname = path.resolve();
let PORT: any = process.env.PORT || 3001;

if (process.env.NODE_ENV === "development") {
  PORT = process.env.DEV_PORT_API;
}
// // Middlewares
app.use(cors());
// @ts-ignore
app.use("/", async (req, res, next) => {
  // console.log('werwer');
  // @ts-ignore
  const queryParams: any = req.query;

  if (
    queryParams["update_pricing"] &&
    queryParams["update_pricing"] === "true"
  ) {
    // @ts-ignore
    const client: any = shopify.buildClient(
      {
        domain: "annasheffield.myshopify.com",
        storefrontAccessToken: "6ce2afdc8e2e91cf7c8c3ebcffb3c629",
      },
    );
    // @ts-ignore
    let priceRings: any = await getPriceRings(client);
    const filePath: any = path.resolve(__dirname, "dist", "file", "price.json");
    const dataWriteFile: any = JSON.stringify(priceRings);

    try {
      fs.writeFileSync(filePath, dataWriteFile);
      // @ts-ignore
      return res.json({ 'status': 'ok' });
      // @ts-ignore
    } catch (error) {
      // @ts-ignore
      console.error(error);
    }
  }
  next();
});
// @ts-ignore
app.get("/getPrices", async function (req, res, next) {
  const filePath: any = path.resolve(__dirname, "dist", "file", "price.json");
  // @ts-ignore
  const data: any = await fs.readFileSync(filePath, {
    encoding: "utf8",
    flag: "r",
  });
  // @ts-ignore
  return res.json(JSON.parse(data));
});

// ROUTES
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req: any, res: any) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT, function () {
  return console.log("Listening on " + PORT);
});
