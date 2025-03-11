document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendBtn");
    if (sendButton) {
        sendButton.addEventListener("click", validateAndSend);
    }

    const contactButton = document.getElementById("contactMeBtn");
    if (contactButton) {
        contactButton.addEventListener("click", function () {
            window.location.href = "contact.html";
        });
    }
});
function validateAndSend() {
    // Lấy giá trị từ form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Lấy phần tử hiển thị lỗi
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Reset thông báo lỗi trước khi kiểm tra
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Kiểm tra tên
    if (!name) {
        nameError.textContent = "Vui lòng nhập tên.";
        isValid = false;
    } else if (name.length < 2) {
        nameError.textContent = "Tên phải có ít nhất 2 ký tự.";
        isValid = false;
    }

    // Kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = "Vui lòng nhập email.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Email không hợp lệ.";
        isValid = false;
    }

    // Kiểm tra tin nhắn
    if (!message) {
        messageError.textContent = "Vui lòng nhập tin nhắn.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Tin nhắn phải có ít nhất 10 ký tự.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }
    alert("Gửi thành công!");
        document.getElementById("contactFormInputs").reset();


    // Nếu hợp lệ, quay về index.html ngay lập tức
    window.location.href = "index.html";
}



