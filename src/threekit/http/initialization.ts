
export const launch = async (configParams: any) => {
    const { threekitUrl, playerEl, callbackFunc } = configParams;
    await createThreekitScriptEl(threekitUrl);
    if (!playerEl.current) return false;
    return await new Promise(async (resolve: any) => {
        if (window.configurator) resolve();
        await callbackFunc()
        await initThreekit(configParams);
        resolve();
    });
}

function createThreekitScriptEl(threekitEnv: string) {
    const existingScript = document.getElementById("threekit");

    if (!existingScript) {
        return new Promise((resolve: any) => {
            const script = document.createElement('script');
            script.src = `${threekitEnv}app/js/threekit-player.js`;
            script.id = 'threekit';
            document.body.appendChild(script);
            script.onload = (res) => {
                resolve()
            };
        });
    }
}


async function initThreekit({ ...props }) {

    const { assetId, authToken, playerEl } = props
    return await new Promise(async (resolve) => {
        const api = await window.threekitPlayer({
            el: playerEl.current,
            authToken: authToken,
            assetId: assetId,

        });
        const configurator = await api.getConfigurator();
        window.configurator = configurator;
        window.player = api;

        resolve({ api, configurator });
    });
}

