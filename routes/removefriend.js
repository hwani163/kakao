/**
 * Created by Seokhwan on 2017. 10. 31..
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    let userKey = req.param('user_key');
    console.log(userKey);
;    res.send({
        "user_key" : userKey,
        "type": "만나서 반갑습니다"
    });
});

module.exports = router;
