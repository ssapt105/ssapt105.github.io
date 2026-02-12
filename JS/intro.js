window.addEventListener('DOMContentLoaded', () => {
    // 1. 인트로 HTML 생성 (프로그레스 바 추가)
    const introHTML = `
        <div class="intro">
            <div class="intro-content">
                <p>Project. 상현</p>
                <div class="progress-container">
                    <div class="progress-bar"></div>
                </div>
            </div>
        </div>
    `;

    // 2. HTML 삽입
    document.body.insertAdjacentHTML('afterbegin', introHTML);

    // 3. 타이머 로직 (3초 대기 후 사라짐)
    // CSS 애니메이션 시간(3s)과 맞춰야 자연스럽습니다.
    setTimeout(() => {
        const intro = document.querySelector('.intro');
        if (intro) {
            intro.classList.add('hidden'); // 서서히 투명해짐
            setTimeout(() => {
                intro.style.display = 'none'; // 아예 제거
            }, 1000); // CSS transition 시간과 동일 (1초)
        }
    }, 3500); // 3초(바 채우기) + 0.5초(잠시 멈춤 여유)
});

