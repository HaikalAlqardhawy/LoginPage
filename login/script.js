document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginForm = document.querySelector('.container form');
    const registerForm = document.querySelector('.register form');
    const registerBtn = document.getElementById('registerbtn');
    const loginBtn = document.getElementById('loginbtn');
    const container = document.querySelector('.container');
    const registerContainer = document.querySelector('.register');
    
    // Form toggle functionality
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        container.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
            container.style.display = 'none';
            registerContainer.style.display = 'block';
            registerContainer.style.animation = 'fadeIn 0.5s forwards';
        }, 500);
    });
    
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        registerContainer.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
            registerContainer.style.display = 'none';
            container.style.display = 'block';
            container.style.animation = 'fadeIn 0.5s forwards';
        }, 500);
    });
    
    // Check URL for messages
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    const success = urlParams.get('success');
    
    if (error) {
        showMessage(error, 'error');
    }
    
    if (success) {
        showMessage(success, 'success');
    }
    
    // Form submission animations
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            const btn = this.querySelector('.btn');
            btn.innerHTML = '<span class="spinner"></span> Processing...';
            btn.disabled = true;
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            const btn = this.querySelector('.btn');
            btn.innerHTML = '<span class="spinner"></span> Creating Account...';
            btn.disabled = true;
        });
    }
    
    // Floating animation for containers
    const containers = document.querySelectorAll('.container, .register');
    containers.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translate(-50%, -50%) scale(1.02)';
            box.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.6)';
        });
        
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'translate(-50%, -50%) scale(1)';
            box.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
        });
    });
    
    // Input focus effects
    const inputs = document.querySelectorAll('.inputbox input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('.underline').style.transform = 'scaleX(1)';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.querySelector('.underline').style.transform = 'scaleX(0)';
            }
        });
    });
    
    // Show message function
    function showMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = text;
        
        const activeForm = container.style.display !== 'none' ? container : registerContainer;
        activeForm.insertBefore(messageDiv, activeForm.firstChild);
        
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => {
                messageDiv.remove();
            }, 500);
        }, 5000);
    }
    
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -45%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: translate(-50%, -50%); }
            to { opacity: 0; transform: translate(-50%, -55%); }
        }
        .spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
            margin-right: 8px;
            vertical-align: middle;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});
