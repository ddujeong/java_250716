// 회원 가입 양식 유효성 체크
function checkJoin() {
    if(document.joinForm.memberId.value == "") {
        // 빈칸으로 입력했을때 true
        alert("아이디는 필수 입력사항입니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberId.focus();
        // focus() 마우스 커서가 해당 폼으로 이동
        return false;
    };
    if(document.joinForm.memberId.value.length < 4 ) {
        // lenght < 글자수 제한
        alert("아이디는 4글자 이상이어야 합니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberId.focus();
        return false;
    }

    var idcheck = /^[ㄱ-ㅎ|가-힣]+$/;
    // 한글 입력만 가능하게 하는 정규표현식 선언?

    if(!idcheck.test(document.joinForm.memberId.value)) {
        alert("아이디는 한글은 입력 불가능 합니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberId.focus();
        return false;
    }

    if(document.joinForm.memberId.value.length > 16 ) {
        alert("아이디는 16글자 이하여야 합니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberId.focus();
        return false;
        // reteun false 작성해야 DB로 안넘어감
    }
    
  
    if(document.joinForm.memberPw.value == "") {
        alert("비밀번호는 필수 입력사항입니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberPw.focus();
        return false;
    };
    if(document.joinForm.memberName.value == "") {
        alert("회원이름은 필수 입력사항입니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberName.focus();
        return false;
    };
    
    if(document.joinForm.memberEmail.value == "") {
        alert("이메일은 필수 입력사항입니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberEmail.focus();
        return false;
    };
    if(document.joinForm.memberInfo.value.length <= 10 ) {
        alert("자기소개는 11글자 이상이어야합니다. 확인 후 다시 입력하세요.");
        document.joinForm.memberInfo.focus();
        return false;
    };
    return true;
}