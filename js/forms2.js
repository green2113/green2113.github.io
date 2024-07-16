document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('#wysl-MxFm-YcjF-Khgk');
    text.placeholder = '문의를 한 후 최대 3일이 소요 될 수 있습니다. 문의 답변은 디스코드 개인DM으로 가니\n서버 - 개인정보 보호 설정( Privacy Settings ) - 다이렉트 메세지( Direct Messages )를 활성화 해주세요.'

    const form = document.querySelector('#SfYs-EisI-xGoA-hUdf');
    form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = document.querySelector('#SrxU-HWdZ-yeyR-w0KR').value;
    const detail = document.querySelector('#wysl-MxFm-YcjF-Khgk').value;

    const webhookUrl = 'https://discord.com/api/webhooks/1210729261779128361/ICfaz9q-EHWTFZFZnsSZLoNZukPwf8ZokOrG48Q_fJL5ZTBwBGofzjRPYE8iq4pz0aKJ'; // 웹훅 URL
    const embed = {
        title: '문의가 도착했습니다',
        description: '```' + '이메일: ' + username + '\n\n' + detail + '```',
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
            alert('문의가 성공적으로 전송되었습니다.')
        } else {
            console.error('내용 전송에 실패했습니다.');
        }
    } catch (error) {
        console.error('오류 발생:', error);
    }

    return false; // 이벤트 객체를 반환하여 오류를 해결
    });
})
