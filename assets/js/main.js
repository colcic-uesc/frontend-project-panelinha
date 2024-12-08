document.addEventListener('DOMContentLoaded', function() {
    // Verificar se estamos na página de listagem
    const cardGrid = document.querySelector('.card-grid');
    if (cardGrid) {
        loadProfessors();
    }
});

async function loadProfessors() {
    try {
        const professors = await API.get('/professors');
        const cardGrid = document.querySelector('.card-grid');
        const template = document.getElementById('card-template');

        cardGrid.innerHTML = '';

        professors.forEach(professor => {
            const card = template.content.cloneNode(true);
            
            card.querySelector('.card-title').textContent = professor.name;
            card.querySelector('.card-email').textContent = professor.email;
            card.querySelector('.card-department').textContent = professor.department;

            // Adicionar eventos aos botões
            card.querySelector('.btn-view').addEventListener('click', () => viewProfessor(professor.id));
            card.querySelector('.btn-edit').addEventListener('click', () => editProfessor(professor.id));
            card.querySelector('.btn-delete').addEventListener('click', () => deleteProfessor(professor.id));

            cardGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao carregar professores:', error);
    }
}

function viewProfessor(id) {
    // Implementar visualização detalhada
    console.log('Visualizar professor:', id);
}

function editProfessor(id) {
    window.location.href = `professor-form.html?id=${id}`;
}

async function deleteProfessor(id) {
    if (confirm('Tem certeza que deseja excluir este professor?')) {
        try {
            await API.delete(`/professors/${id}`);
            loadProfessors(); // Recarregar lista
        } catch (error) {
            console.error('Erro ao excluir professor:', error);
        }
    }
} 