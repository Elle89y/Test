$(document).ready(function () {
    renderCurrentTime()
	setInterval("renderCurrentTime()", 1000);
    //setInterval("renderCurrentTime()"); - 실시간 아님
    //setInterval("renderCurrentTime()", 1000); - 실시간, 1000ms단위로 바뀜 (1초)
    renderQuote();
});

//현재 시간
function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,5);
    //let datetime = data['datetime'].substr(11,5); - 분까지만 나오는것
    //let datetime = data['datetime'].substr(11,8); - 초까지 나옴
    //let datatime = Date().substring(25,15) - 세계시간
    $('#time').text(datetime);
});
}

// 명언
function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}
