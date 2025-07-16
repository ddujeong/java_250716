let heading = document.querySelector('#heading')
    heading.onclick = function() {
        heading.style.color = "red";
        alert("빨간 텍스트로 변경 완료")
        // 클릭시 알림창 -> 빨간텍스트로 변경
    };
    // 세미콜론 붙여주는게 좋음?
