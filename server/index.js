const express = require('express');
const mixin = require('./tool/mixin');

const router = express.Router();

router.get('/bounce', (req, res) => {
    mixin(res).render('activity/bounce', {});
});

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
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
            'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1951003289,542468002&fm=173&s=CAA22FC30E8400DEECB9611803001012&w=550&h=413&img.JPEG',
        ]
    });
});

const posts = [
    { title: '公告1', addDate: '2017-10-06 12:00', id: 1, content: 'dddddd' },
    { title: '公告2', addDate: '2017-10-06 12:00', id: 2, content: 'dddddd2' },
    { title: 'dsfdsfdsfds', addDate: '2017-10-06 13:00', id: 3, content: 'dddddd3' },
    { title: 'bsfdfdv34444', addDate: '2017-10-06 14:00', id: 4, content: 'dddddd4' },
    { title: '1243434343', addDate: '2017-10-06 12:10', id: 5, content: 'dddddd5' },
    { title: '678444444444', addDate: '2017-10-06 12:20', id: 6, content: 'dddddd6' },
    { title: 'ggghd35hddffff', addDate: '2017-10-06 12:10', id: 7, content: 'dddddd7' },
    { title: 'dfgdvbbnmmmbbbbb', addDate: '2017-10-06 12:40', id: 8, content: 'dddddd8' },
    { title: '345423ddssccc', addDate: '2017-10-06 12:00', id: 9, content: 'dddddd9' },
    { title: '099945jdkdkdkd', addDate: '2017-10-06 12:30', id: 10, content: 'dddddd10' }
];

router.get('/posts', (req, res) => {
    const text = req.query.text;
    const list = posts.filter((item) => {
        return item.title.indexOf(text) !== -1;
    });

    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        list
    });
});

router.get('/post/:id', (req, res) => {
    const pId = req.params.id;
    const result = posts.filter(({id}) => {
        return id == pId;
    });

    res.header("Access-Control-Allow-Origin", "*");
    res.json({
        result: result[0]
    });

});

module.exports = router;
