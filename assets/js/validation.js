document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('professorForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulário válido, enviando dados...');
        }
    });

    // Validação de campos individuais
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(input);
        });
    });

    // Formatação do telefone
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            e.target.value = value;
        }
    });
});

function validateForm() {
    const form = document.getElementById('professorForm');
    let isValid = true;

    // Validar campos obrigatórios
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    // Validar checkbox (pelo menos um selecionado)
    const checkboxes = form.querySelectorAll('input[type="checkbox"][name="areas"]');
    let checkboxValid = false;
    checkboxes.forEach(cb => {
        if (cb.checked) checkboxValid = true;
    });

    if (!checkboxValid) {
        const checkboxGroup = checkboxes[0].closest('.form-group');
        checkboxGroup.classList.add('error');
        checkboxGroup.querySelector('.error-message').textContent = 'Selecione pelo menos uma área de atuação';
        isValid = false;
    }

    return isValid;
}

function validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    let isValid = true;

    // Limpar erro anterior
    formGroup.classList.remove('error');
    errorElement.textContent = '';

    // Validar campo vazio
    if (field.required && !field.value.trim()) {
        formGroup.classList.add('error');
        errorElement.textContent = 'Este campo é obrigatório';
        isValid = false;
    }

    // Validar email
    if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            formGroup.classList.add('error');
            errorElement.textContent = 'Digite um email válido';
            isValid = false;
        }
    }

    // Validar telefone
    if (field.id === 'phone' && field.value) {
        const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
        if (!phoneRegex.test(field.value)) {
            formGroup.classList.add('error');
            errorElement.textContent = 'Digite um telefone válido: (99) 99999-9999';
            isValid = false;
        }
    }

    // Validar senha (mínimo 6 caracteres)
    if (field.type === 'password' && field.value) {
        if (field.value.length < 6) {
            formGroup.classList.add('error');
            errorElement.textContent = 'A senha deve ter no mínimo 6 caracteres';
            isValid = false;
        }
    }

    return isValid;
} 