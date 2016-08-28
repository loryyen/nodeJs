var url = require("url");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname === "/api/") {
        response.writeHead(200,{
            "Content-Type":"application/json; charset=utf-8"
        });
        response.write(JSON.stringify([
            [
                "images/image1.jpg",
                "台北電腦應用展開幕，參觀的民眾真的很多喔。"
            ],
            [
                "images/image2.jpg",
                "剛進大門口就好多人，擠的水洩不通。"
            ],
            [
                "images/image3.jpg",
                "大家趁電腦展撿便宜，詢問的人潮絡繹不絕。"
            ]
        ]));
        response.end();
    }



 if (pathname === "/api/tips/") {
        response.writeHead(200,{
            "Content-Type":"application/json; charset=utf-8"
        });
        var tips =  [
           "123",
           "234",
           "345"
        ];
        var tip=tips[~~(Math.random()*tips.length)];
        response.write(JSON.stringify(tip));
        response.end();
    }
};