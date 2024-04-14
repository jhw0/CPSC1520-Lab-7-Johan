//async function appInit()
//{
//    const res = await fetch('https://661c4d0fe7b95ad7fa6a1bf6.mockapi.io/api/config/albums');
//    const payload = await res.json();
//}



async function appInit() {
    try {
        const response = await fetch('https://661c4d0fe7b95ad7fa6a1bf6.mockapi.io/api/config/albums');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const albums = await response.json();
        console.log(albums);
    }
    catch (e) {
        console.error('Fetch failed:', e);
    }
}

appInit();