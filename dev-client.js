const hotClient = require('webpack-hot-middleware/client?noInfo=true&timeout=10000&reload=true');
// 订阅事件，当 event.action === 'reload' 时执行页面刷新
hotClient.subscribe((event) => {
    if (event.action === 'reload') {
        console.log('刷新~');
        window.location.reload();
    }
});
