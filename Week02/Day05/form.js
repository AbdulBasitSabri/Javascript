      const form = document.getElementById("masterForm");
      const fullName = document.getElementById("fullName");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const togglePassword = document.getElementById("togglePassword");
      const fileInput = document.getElementById("fileInput");
      const fileLabel = document.getElementById("fileLabel");
      const successBanner = document.getElementById("successBanner");

      togglePassword.addEventListener("click", () => {
        if (password.type === "password") {
          password.type = "text";
          togglePassword.textContent = "HIDE";
        } else {
          password.type = "password";
          togglePassword.textContent = "SHOW";
        }
      });

      fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
          fileLabel.textContent = ` ${fileInput.files[0].name}`;
        } else {
          fileLabel.textContent = "Click to upload image";
        }
      });

      function showError(inputElement, errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
        inputElement.style.borderColor = "#e74c3c";
      }

      function hideError(inputElement, errorElement) {
        errorElement.style.display = "none";
        inputElement.style.borderColor = "#ddd";
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        if (fullName.value.trim() === "") {
          showError(
            fullName,
            document.getElementById("nameError"),
            "Full name cannot be empty!",
          );
          isValid = false;
        } else {
          hideError(fullName, document.getElementById("nameError"));
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
          showError(
            email,
            document.getElementById("emailError"),
            "Please enter a valid email format!",
          );
          isValid = false;
        } else {
          hideError(email, document.getElementById("emailError"));
        }

        if (password.value.length < 6) {
          showError(
            password,
            document.getElementById("passwordError"),
            "Password must be at least 6 characters long!",
          );
          isValid = false;
        } else {
          hideError(password, document.getElementById("passwordError"));
        }

        if (fileInput.files.length === 0) {
          document.getElementById("fileError").style.display = "block";
          isValid = false;
        } else {
          document.getElementById("fileError").style.display = "none";
        }

        if (isValid) {
          const formData = new FormData(form);
          const plainObject = Object.fromEntries(formData.entries());
          console.log(plainObject);

          successBanner.style.display = "block";
          form.reset();
          fileLabel.textContent = "Click to upload image";
        }
      });
