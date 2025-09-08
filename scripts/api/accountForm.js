document.addEventListener("DOMContentLoaded", function () {
        const loginTab = document.getElementById("login-tab");
        const registerTab = document.getElementById("register-tab");
        const loginForm = document.getElementById("login-form");
        const registerForm = document.getElementById("register-form");

        function showLogin() {
          registerForm.classList.remove("active");
          loginForm.classList.add("active");
          loginTab.classList.add("active");
          registerTab.classList.remove("active");
        }

        function showRegister() {
          loginForm.classList.remove("active");
          registerForm.classList.add("active");
          registerTab.classList.add("active");
          loginTab.classList.remove("active");
        }

        loginTab.addEventListener("click", showLogin);
        registerTab.addEventListener("click", showRegister);

        // Mostrar/ocultar contraseña (básico)
        document.querySelectorAll(".show-pass").forEach((btn) => {
          btn.addEventListener("click", () => {
            const row = btn.closest(".password-row");
            const input = row.querySelector("input");
            input.type = input.type === "password" ? "text" : "password";
            btn.querySelector("i").classList.toggle("fa-eye-slash");
          });
        });
      });

      // Asume que ya tienes listeners para tabs. Si usas el código previo, añade estas líneas.
      document.addEventListener("DOMContentLoaded", function () {
        const authPanel = document.querySelector(".auth-panel");
        const loginTab = document.getElementById("login-tab");
        const registerTab = document.getElementById("register-tab");
        const loginForm = document.getElementById("login-form");
        const registerForm = document.getElementById("register-form");

        function showAndReset(formToShow, firstInputSelector) {
          // mostrar/ocultar se mantiene como en tu código
          formToShow.classList.add("active");
          // scroll al inicio del panel y enfocar primer campo
          if (authPanel) authPanel.scrollTop = 0;
          const first = formToShow.querySelector(firstInputSelector);
          if (first) first.focus({ preventScroll: true });
        }

        loginTab?.addEventListener("click", () => {
          showAndReset(loginForm, 'input[type="email"], input');
          registerForm?.classList.remove("active");
          loginForm?.classList.add("active");
        });

        registerTab?.addEventListener("click", () => {
          showAndReset(registerForm, 'input[type="text"], input');
          loginForm?.classList.remove("active");
          registerForm?.classList.add("active");
        });
      });

      document.addEventListener('DOMContentLoaded', () => {
        // REGISTRO
        const registerForm = document.getElementById('register-form');
        if (registerForm) {
          registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const [name, secondName, phone, email, pass] = [
              registerForm.querySelector('input[placeholder="Tu nombre"]').value.trim(),
              registerForm.querySelector('input[placeholder="Tus apellidos"]').value.trim(),
              registerForm.querySelector('input[placeholder="Tu número de teléfono"]').value.trim(),
              registerForm.querySelector('input[type="email"]').value.trim(),
              registerForm.querySelector('input[type="password"]').value
            ];

            try {
              const res = await fetch('https://molino32.com/api/accountForm.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'register', name, secondName, phone, email, pass }),
                credentials: 'include'
              });
              const data = await res.json();

              if (data.success) {
                alert('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');
                document.getElementById('login-tab').click();
                registerForm.reset();
              } else {
                alert(data.error || 'Error al crear cuenta');
              }
            } catch (err) {
              alert('Error de conexión. Intenta más tarde.');
            }
          });
        }

        // LOGIN
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
          loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = loginForm.querySelector('input[type="email"]').value.trim();
            const pass = loginForm.querySelector('input[type="password"]').value;

            try {
              const res = await fetch('https://molino32.com/api/accountForm.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'login', email, pass }),
                credentials: 'include'
              });
              const data = await res.json();

              if (data.success) {
                alert('¡Bienvenido, ' + data.user.name + '!');
                // Aquí puedes redirigir o guardar info en localStorage/sessionStorage si lo deseas
                loginForm.reset();
              } else {
                alert(data.error || 'Error al iniciar sesión');
              }
            } catch (err) {
              alert('Error de conexión. Intenta más tarde.');
            }
          });
        }
      });