document.addEventListener('DOMContentLoaded', function() {
    // 캔버스 요소 가져오기
    const canvas = document.getElementById('myAreaChart');
    
    // 혹시라도 캔버스가 없는 페이지에서 에러가 나는 것을 방지
    if (!canvas) return; 

    const ctx = canvas.getContext('2d');

    const myAreaChart = new Chart(ctx, {
        type: 'line', 
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Monthly",
                data: [0, 10, 5, 2, 20, 30, 44],
                backgroundColor: "rgba(78, 115, 223, 0.9)", // 그래프 아래 채워지는 색상
                borderColor: "rgba(78, 115, 223, 1)",     // 선 색상
                pointBackgroundColor: "rgba(78, 115, 223, 1)", // 꼭짓점 색상
                pointBorderColor: "#fff",                 // 꼭짓점 테두리 (흰색)
                pointBorderWidth: 2,                      
                pointRadius: 4,                           
                fill: true,                               // 선 아래 영역 채우기
                tension: 0.4                              // 선을 부드러운 곡선으로 만들기
            }]
        },
        options: {
            maintainAspectRatio: false, 
            scales: {
                x: {
                    grid: {
                        display: true, 
                        color: "#e3e6f0"
                    }
                },
                y: {
                    min: 0,
                    max: 45,
                    ticks: {
                        stepSize: 5 
                    },
                    grid: {
                        color: "#e3e6f0", 
                        borderDash: [2, 2] 
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'center',
                    labels: {
                        boxWidth: 25,
                        usePointStyle: false,
                    }
                }
            }
        }
    });
});