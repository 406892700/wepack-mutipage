const express = require('express');
const mixin = require('./tool/mixin');

const router = express.Router();

router.get('/double12', (req, res) => {
    mixin(res).render('activity/double12', {});
});

router.get('/banner', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        list: [
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
        ]
    });
});

module.exports = router;
