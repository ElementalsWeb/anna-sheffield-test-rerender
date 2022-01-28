import path from "path";
import express from "express";
// import fs from "fs";
// import cors from "cors";
// import fetch from "node-fetch"; 
// import shopify from "shopify-buy";
// import getPriceRings from "./api/index.js";
// (global as any).fetch = fetch;
var app = express();
var __dirname = path.resolve();
var PORT = process.env.PORT || 3001;
if (process.env.NODE_ENV === "development") {
    PORT = process.env.DEV_PORT_API;
}
// // Middlewares
// app.use(cors());
// app.use("/", async (req, res, next) => {
//   // console.log('werwer');
//   const queryParams: any = req.query;
//   if (
//     queryParams["update_pricing"] &&
//     queryParams["update_pricing"] === "true"
//   ) {
//     const client: any = shopify.buildClient(
//       {
//         domain: "annasheffield.myshopify.com",
//         storefrontAccessToken: "6ce2afdc8e2e91cf7c8c3ebcffb3c629",
//       },
//     ); 
//     let priceRings: any = await getPriceRings(client); 
//     const filePath: any = path.resolve(__dirname, "dist", "file", "price.json");
//     const dataWriteFile: any = JSON.stringify(priceRings);
//     try {
//       fs.writeFileSync(filePath, dataWriteFile);
//       return res.json({ 'status': 'ok' });
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   next();
// });
// app.get("/getPrices", async function (req, res, next) {
//   const filePath: any = path.resolve(__dirname, "dist", "file", "price.json");
//   const data: any = await fs.readFileSync(filePath, {
//     encoding: "utf8",
//     flag: "r",
//   });
//   return res.json(JSON.parse(data));
// });
// ROUTES
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "build")));
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT, function () {
    return console.log("Listening on " + PORT);
});
