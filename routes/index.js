/**
 * Created by Seokhwan on 2017. 10. 31..
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        "type": "만나서 반갑습니다"
    });
});

module.exports = router;
