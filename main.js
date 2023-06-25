let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');
let pitchValue = document.getElementById('pitchValue');
let volumeValue = document.getElementById('volumeValue');
let rateValue = document.getElementById('rateValue');
let textarea = document.querySelector('textarea');

// Lấy danh sách các giọng đọc và gán giọng đầu tiên cho speech
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Chọn giọng đọc từ dropdown
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

// Cập nhật giá trị pitch
document.getElementById('pitch').addEventListener('input', () => {
    speech.pitch = parseFloat(pitch.value);
    pitchValue.textContent = pitch.value;
});

// Cập nhật giá trị volume
document.getElementById('volume').addEventListener('input', () => {
    speech.volume = parseFloat(volume.value);
    volumeValue.textContent = volume.value;
});

// Cập nhật giá trị rate
document.getElementById('rate').addEventListener('input', () => {
    speech.rate = parseFloat(rate.value);
    rateValue.textContent = rate.value;
});

// Xử lý sự kiện khi nhấn nút Speak
document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});

// Dừng nếu người dùng blur ra khỏi ô textarea
textarea.addEventListener('blur', () => {
    window.speechSynthesis.cancel();
});