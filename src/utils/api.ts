//@ts-ignore
import Client from "shopify-buy";
import { listEngagementRing, listRingBands } from "./listRing";
import axios from "axios";


export const getPriceRings = async () => {
    let productsPrice: any = {};
    let listsRingRing: any = [];
    let listsRingEngagement: any = [];

    listRingBands.forEach(rings => {
        listsRingRing.push(btoa(`gid://shopify/Product/${rings['id']}`))
    })

    listEngagementRing.forEach(rings => {
        listsRingEngagement.push(btoa(`gid://shopify/Product/${rings['id']}`))
    })

    const client = await Client.buildClient({
        domain: "annasheffield.myshopify.com",
        storefrontAccessToken: "6ce2afdc8e2e91cf7c8c3ebcffb3c629",
    });

    const getPrice = async (arrayRingId: any) => {
        let productsPrice: any = await client.product
            .fetchMultiple(arrayRingId)
            .then((products: any) => {
                let tempObject: any = {}
                console.log(products);

                products.forEach((product: any) => {

                    if (!product) return;
                    let id = product.id;
                    let variants = product.variants;
                    let idProduct = atob(id).replace("gid://shopify/Product/", "");

                    let prices: any = {};
                    variants.forEach((item: any) => {
                        let title = item.title;
                        let priceV2 = item.priceV2.amount;
                        prices[title] = priceV2;

                    });


                    tempObject[idProduct] = prices;
                });

                return tempObject
            });


        return productsPrice
    }

    productsPrice = {
        ...productsPrice,
        ...await getPrice(listsRingRing)
    }

    productsPrice = {
        ...productsPrice,
        ...await getPrice(listsRingEngagement)
    }
    // debugger
    return productsPrice
}

let urlApi: string = String(process.env.REACT_APP_PROD_API_URL)

if (process.env.NODE_ENV === "development") {
    urlApi = String(process.env.REACT_APP_DEV_API_URL);
}

export const getAllPriceProduct = () => {
    console.log(urlApi + `getPrices`);

    return axios
        .get(urlApi + `getPrices`)
        .then((response) => response.data)
        .then((data) => {
            return data;

        })
};