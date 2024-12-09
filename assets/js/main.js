document.addEventListener('DOMContentLoaded', function() {
    const pathname = window.location.pathname;

    if (pathname.includes('professor-list.html')) {
        loadItems('professors');
    } else if (pathname.includes('student-list.html')) {
        loadItems('students');
    } else if (pathname.includes('project-list.html')) {
        loadItems('projects');
    } else if (pathname.includes('skill-list.html')) {
        loadItems('skills');
    }
});

function loadItems(type) {
    const cardGrid = document.querySelector('.card-grid');
    const template = document.getElementById('card-template');
    const data = getMockData(type);

    cardGrid.innerHTML = '';

    data.forEach(item => {
        const card = template.content.cloneNode(true);

        card.querySelector('.card-title').textContent = item.name;
        card.querySelector('.card-email').textContent = item.email || '';
        card.querySelector('.card-info').textContent = item.department || item.role || item.project || '';

        // Adicionar eventos aos botões
        card.querySelector('.btn-view').addEventListener('click', () => viewItem(type, item.id));
        card.querySelector('.btn-edit').addEventListener('click', () => editItem(type, item.id));
        card.querySelector('.btn-delete').addEventListener('click', () => deleteItem(type, item.id));

        cardGrid.appendChild(card);
    });
}

function getMockData(type) {
    const mockData = {
        professors: [
            { id: 1, name: 'Professor Hélder Almeida Conceição', email: 'helder.almeida@universidade.com', department: 'Computação' },
            { id: 2, name: 'Professora Marta Magda Dornelles', email: 'marta.magda@universidade.com', department: 'Computação' },
        ],
        students: [
            { id: 1, name: 'Estudante Douglas Almeida', email: 'douglas.almeida@universidade.com', role: 'Graduação' },
            { id: 2, name: 'Estudante João Pedro', email: 'joao.pedro@universidade.com', role: 'Mestrado' },
            { id: 3, name: 'Estudante Gabriela Zerbone', email: 'gabi.zerbs@universidade.com', role: 'Graduação' },
            { id: 4, name: 'Estudante Mychael Antônio', email: 'mychael.lol@universidade.com', role: 'Graduação' },
        ],
        projects: [
            { id: 1, name: 'Projeto ABC', email: '', project: 'Descrição do projeto ABC' },
            { id: 2, name: 'Projeto XYZ', email: '', project: 'Descrição do projeto XYZ' },
        ],
        skills: [
            { id: 1, name: 'Python', email: '', role: 'Linguagem de Programação' },
            { id: 2, name: 'Comunicação', email: '', role: 'Soft Skill' },
        ]
    };
    return mockData[type] || [];
}

function viewItem(type, id) {
    console.log(`Visualizar ${type.slice(0, -1)} com ID: ${id}`);
}

function editItem(type, id) {
    window.location.href = `${type.slice(0, -1)}-form.html?id=${id}`;
}

async function deleteItem(type, id) {
    if (confirm(`Tem certeza que deseja excluir este ${type.slice(0, -1)}?`)) {
        console.log(`${type.slice(0, -1)} com ID ${id} excluído (simulação)`);
        loadItems(type);
    }
}