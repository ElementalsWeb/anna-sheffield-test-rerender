
import axios from 'axios';

const CONFIGURATIONS_API_ROUTE = `api/configurations`;
function dataURItoBlob(dataURI: string) {


    var byteString = atob(dataURI.split(",")[1]);

    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    var ab = new ArrayBuffer(byteString.length);

    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    var blob = new Blob([ab], { type: mimeString });
    return blob;
}

export const SavedConfiguration = async ({ ...props }) => {
    const { metadata, authToken, orgId, threekitUrl } = props;
    let message;
    if (!window.player.assetId) message = 'Requires Asset Id';
    if (!window.configurator.getAttributes()) message = 'Requires a configuration';
    if (!document.getElementById("player")) message = 'Not canvas configuration';
    if (message) return [undefined, { message }];

    let canvas = <HTMLCanvasElement>document.getElementById("player")
    const width: any = await Number(canvas.offsetWidth) > 500 ? Number(canvas.offsetWidth) * 0.75 : Number(canvas.offsetWidth);
    const height: any = await Number(canvas.offsetWidth) > 500 ? Number(canvas.offsetHeight) * 0.75 : Number(canvas.offsetHeight);
    const base64_small = await window.player.snapshotAsync({
        size: { width, height },
    });

    const blob_small = await dataURItoBlob(base64_small);

    const file_small = await new File([blob_small], "snapshot.png");

    const fd = await new FormData();
    await fd.append("files", file_small);
    await fd.append('productId', window.player.assetId);
    await fd.append('productVersion', "v1");
    await fd.append("orgId", orgId);
    await fd.append('variant', JSON.stringify(window.configurator.getConfiguration()));
    if (metadata && Object.keys(metadata)) await fd.append('metadata', JSON.stringify(metadata));

    let response = await fetch(
        `${threekitUrl}${CONFIGURATIONS_API_ROUTE}?bearer_token=${authToken}`,
        {
            method: "post",
            body: fd,
        }
    );
 
    return response.json();
};

export const getSavedConfiguration = async ({ ...props }) => {
    const { configurationId, authToken, threekitUrl } = props;


    let error;
    if (!configurationId) error = 'Requires Configuration ID';
    if (error) return [undefined, { message: error }];

    let response = await axios.get(`${threekitUrl}${CONFIGURATIONS_API_ROUTE}/${configurationId}?bearer_token=${authToken}`).then(response => response);

    return response['data'];
};



// const apiEndpoint = 'https://preview.threekit.com';
// const AUTH_TOKEN = "d56cf180-8322-4ab9-9907-a1588cbc540b";

// const fd = new FormData();
// fd.append("productId", window.player.assetId);
// fd.append("productVersion", "v1");
// fd.append("orgId", "46deed25-0f34-4f72-9ad5-7c91df246095");
// // fd.append("metadata", JSON.stringify(ObjectParams));
// fd.append("variant", JSON.stringify(window.configurator.getAttributes()));

// await fetch(
//     `${apiEndpoint}configurations?bearer_token=${AUTH_TOKEN}`,
//     {
//         method: "post",
//         body: fd,
//     }
// )