let step = 1;
const section = document.getElementById('survey-section');
const form = document.getElementById('survey-form');

form.addEventListener('click', function(event) {
    if (event.target.classList.contains('next-btn')) {
        if (validateInput()) {
            nextStep();
        }
    } else if (event.target.classList.contains('prev-btn')) {
        prevStep();
    }
});

function validateInput() {
    const input = section.querySelector('input');
    if (input.value.trim() === '') {
        return false;
    }
    return true;
}

function nextStep() {
    if (step === 1) {
        section.innerHTML = `
            <h2>이메일 주소 입력</h2>
            <input type="email" id="email" name="email" required><br><br>
            <button class="next-btn">다음</button>
            <button class="prev-btn">이전</button>
        `;
        document.getElementById('progress').value = 2;
        step++;
    } else if (step === 2) {
        section.innerHTML = `
            <h2>전화번호 입력</h2>
            <input type="tel" id="phone" name="phone" required><br><br>
            <button type="submit" class="submit-btn">제출</button>
            <button class="prev-btn">이전</button>
        `;
        document.getElementById('progress').value = 3;
        step++;
    }
}

function prevStep() {
    if (step === 2) {
        section.innerHTML = `
            <h2>이름 입력</h2>
            <input type="text" id="name" name="name" required><br><br>
            <button class="next-btn">다음</button>
        `;
        document.getElementById('progress').value = 1;
        step--;
    } else if (step === 3) {
        section.innerHTML = `
            <h2>이메일 주소 입력</h2>
            <input type="email" id="email" name="email" required><br><br>
            <button class="next-btn">다음</button>
            <button class="prev-btn">이전</button>
        `;
        document.getElementById('progress').value = 2;
        step--;
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    submitForm();
});

function submitForm() {
    const formData = new FormData(form);
    console.log('Form submitted with data:');
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
}