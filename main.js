// ดึง element จาก DOM
const passwordInput = document.getElementById("passwordInput");
const strengthText = document.getElementById("strengthText");
const checkButton = document.querySelector(".check-btn");
const toggleButton = document.getElementById("togglePassword");

// ฟังก์ชันเช็คความแข็งแรงของรหัสผ่าน
function checkPasswordStrength() {
  const password = passwordInput.value;
  let score = 0;

  // เงื่อนไขเพิ่มคะแนน
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;

  // ล้าง class เดิมก่อน
  strengthText.className = "strength-indicator";

  // กำหนดผลลัพธ์ และใส่ class สี
  let result = "";
  if (score <= 1) {
    result = "Weak";
    strengthText.classList.add("weak");
  } else if (score <= 3) {
    result = "Medium";
    strengthText.classList.add("medium");
  } else if (score === 4) {
    result = "Strong";
    strengthText.classList.add("strong");
  } else {
    result = "Very Strong";
    strengthText.classList.add("very-strong");
  }

  // แสดงข้อความผลลัพธ์
  strengthText.textContent = `Password Strength: ${result}`;
}

// ฟังก์ชันโชว์/ซ่อนรหัสผ่าน
function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.classList.remove("bxs-show");
    toggleButton.classList.add("bxs-hide");
  } else {
    passwordInput.type = "password";
    toggleButton.classList.remove("bxs-hide");
    toggleButton.classList.add("bxs-show");
  }
}

// Event Listener
checkButton.addEventListener("click", checkPasswordStrength);
toggleButton.addEventListener("click", togglePasswordVisibility);

