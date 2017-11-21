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
        "message": {
            "text": "귀하의 차량이 성공적으로 등록되었습니다. 축하합니다!",
            "photo": {
                "url": "https://photo.src",
                "width": 640,
                "height": 480
            },
            "message_button": {
                "label": "주유 쿠폰받기",
                "url": "https://coupon/url"
            }
        },
        "keyboard": {
            "type": "buttons",
            "buttons": [
                "처음으로",
                "다시 등록하기",
                "취소하기"
            ]
        }
    });
});

module.exports = router;
