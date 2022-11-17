$(document).ready(function () {
    renderCurrentTime()
	setInterval("renderCurrentTime()", 1000);
    //setInterval("renderCurrentTime()"); - 실시간 아님
    //setInterval("renderCurrentTime()", 1000); - 실시간, 1000ms단위로 바뀜 (1초)
    renderQuote();
    renderRandomImage();
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
   
    // 랜덤 사진 꾸미기
    function renderRandomImage() {
      let imageList = [];
      // 이미지 개수를 변경하려면 i=5의 값을 이미지 개수만큼 바꿔주세요!
      for (i = 0; i < 8; i++) {
        imageList.push(i);
      }
      let imageListLength = imageList.length;
      let randomImage = Math.floor(Math.random() * (imageListLength))+1
      randomImage = `images/${randomImage}.jpg`
      $(document.body).css("background-image", `url(${randomImage})`);
    }
