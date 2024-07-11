document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.section-page-1');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const username1 = document.querySelector('#SrxU-HWdZ-yeyR-w0KR')
        const detail1 = document.querySelector('#wysl-MxFm-YcjF-Khgk')
        if(username1 && detail1) {
            const username = username1.value;
            const detail = detail1.value;

            const webhookUrl = `https://discord.com/api/webhooks/1210729261779128361/ICfaz9q-EHWTFZFZnsSZLoNZukPwf8ZokOrG48Q_fJL5ZTBwBGofzjRPYE8iq4pz0aKJ`; // 웹훅 URL
            const embed = {
                title: '문의가 도착했습니다',
                description: '```' + '디스코드 유저이름: ' + username + '\n\n' + detail + '```',
                color: 0xFFFF00 // 16진법 색상 코드
            };
            const data = {
                embeds: [embed],
                content: '<@776421522188664843>'
            };

            try {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    document.querySelector('#SrxU-HWdZ-yeyR-w0KR').value = '';
                    document.querySelector('#wysl-MxFm-YcjF-Khgk').value = '';
                    alert('문의가 전송되었습니다.')
                } else {
                    console.error('내용 전송에 실패했습니다.');
                }
            } catch (error) {
                console.error('오류 발생:', error);
            }

            return false; // 이벤트 객체를 반환하여 오류를 해결
        }
    });
})