function loadVideo() {
    // 유튜브 API로 오늘의 비디오 링크를 불러오고 설정하는 부분은 추후 구현 예정
    console.log('비디오 로드 기능 구현 예정');
}

function showTodayDate() {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // 날짜를 YYYY-MM-DD 형식으로 표시
    document.getElementById('todayDate').textContent = `오늘의 날짜: ${dateString}`;
    return dateString;
}

function toggleWatchedStatus() {
    const today = showTodayDate();
    const isChecked = document.getElementById('watchedCheckbox').checked;
    localStorage.setItem(`watched-${today}`, isChecked ? 'true' : 'false');
}

function checkWatchedStatus() {
    const today = showTodayDate();
    const watched = localStorage.getItem(`watched-${today}`) === 'true';
    document.getElementById('watchedCheckbox').checked = watched;
}

function saveComment() {
    const today = showTodayDate();
    const comment = document.getElementById('commentBox').value;
    localStorage.setItem(`comment-${today}`, comment);
}

function setupCommentAutoSave() {
    const commentBox = document.getElementById('commentBox');
    commentBox.addEventListener('input', function () {
        const today = showTodayDate();
        const comment = commentBox.value;
        localStorage.setItem(`comment-${today}`, comment);
    });
}

function loadComment() {
    const today = showTodayDate();
    const comment = localStorage.getItem(`comment-${today}`);
    if (comment) {
        document.getElementById('commentBox').value = comment;
    }
}

window.onload = function () {
    loadVideo(); // 비디오 로드
    showTodayDate(); // 오늘의 날짜 표시
    checkWatchedStatus(); // 시청 상태 확인
    loadComment(); // 댓글 불러오기
    setupCommentAutoSave(); // 코멘트 자동 저장 설정
};