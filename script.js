document.getElementById('careerQuiz').addEventListener('submit', function(event) {
    event.preventDefault();

    const scores = {
        'Gestion de projet et leadership': 0,
        'Conception, développement et intégration d\'applications': 0,
        'Production, déploiement et maintenance de systèmes informatiques': 0,
        'Audit et conseil en systèmes d\'information': 0,
        'Science des données et intelligence artificielle': 0,
        'Compétences transversales et management': 0
    };

    const categoryMap = {
        'A': 'Gestion de projet et leadership',
        'B': 'Conception, développement et intégration d\'applications',
        'C': 'Production, déploiement et maintenance de systèmes informatiques',
        'D': 'Audit et conseil en systèmes d\'information',
        'E': 'Science des données et intelligence artificielle',
        'F': 'Compétences transversales et management'
    };

    const categoryDescriptions = {
        'Gestion de projet et leadership': 'Les professionnels de cette catégorie sont capables de diriger des projets informatiques et de motiver les membres de leur équipe pour atteindre les objectifs fixés.',
        'Conception, développement et intégration d\'applications': 'Les professionnels de cette catégorie sont impliqués dans la conception, le développement et l\'intégration d\'applications logicielles, en utilisant une variété de technologies et de langages de programmation.',
        'Production, déploiement et maintenance de systèmes informatiques': 'Les professionnels de cette catégorie sont responsables de la gestion, du déploiement et de la maintenance des systèmes informatiques, y compris les réseaux, les serveurs et les logiciels.',
        'Audit et conseil en systèmes d\'information': 'Les professionnels de cette catégorie fournissent des services d\'audit, de conseil et de gestion des risques pour améliorer les systèmes d\'information et assurer leur conformité aux normes et réglementations.',
        'Science des données et intelligence artificielle': 'Les professionnels de cette catégorie explorent et analysent les données pour extraire des informations significatives, développent des modèles d\'intelligence artificielle et mettent en œuvre des solutions basées sur l\'apprentissage automatique.',
        'Compétences transversales et management': 'Les professionnels de cette catégorie possèdent un ensemble de compétences transversales, telles que la communication, la gestion d\'équipe et le marketing, essentielles pour réussir dans le domaine de l\'informatique.'
    };

    const careers = {
        'Gestion de projet et leadership': [
            'Chef de projet informatique',
            'Chef de projet en transformation numérique',
            'Chef de projet en développement logiciel',
            'Directeur des systèmes d\'information (DSI)',
            'Consultant en systèmes d\'information',
            'Responsable d\'équipe informatique',
            'Scrum Master',
            'Product Owner'
        ],
        'Conception, développement et intégration d\'applications': [
            'Développement web et mobile',
            'Développeur front-end',
            'Développeur back-end',
            'Développeur full-stack',
            'Développement de logiciels et de systèmes complexes',
            'Ingénieur DevOps',
            'Architecte logiciel',
            'Ingénieur en assurance qualité',
            'Testeur logiciel',
            'Ingénieur en validation et vérification'
        ],
        'Production, déploiement et maintenance de systèmes informatiques': [
            'Gestion et maintenance des systèmes et réseaux',
            'Administrateur système et réseau',
            'Technicien de support et de maintenance informatique',
            'Ingénieur en sécurité informatique',
            'Consultant en sécurité informatique',
            'Ingénieur réseau',
            'Ingénieur système',
            'Ingénieur cloud'
        ],
        'Audit et conseil en systèmes d\'information': [
            'Consultant en sécurité informatique',
            'Auditeur en sécurité informatique',
            'Consultant en gouvernance des données',
            'Auditeur en gouvernance des données',
            'Consultant en transformation numérique',
            'Consultant en stratégie IT',
            'Consultant en management des SI',
            'Auditeur en management des SI'
        ],
        'Science des données et intelligence artificielle': [
            'Data scientist',
            'Data analyst',
            'Conception et développement de modèles d\'IA',
            'Ingénieur en apprentissage automatique (Machine Learning)',
            'Ingénierie des données',
            'Data engineer',
            'Ingénieur en traitement automatique du langage naturel (NLP)'
        ],
        'Compétences transversales et management': [
            'Chargé de communication et de négociation en informatique',
            'Responsable de la conformité et de la protection des données (DPO)',
            'Responsable de la sécurité des systèmes d\'information (RSSI)',
            'Chef de produit',
            'Responsable marketing digital',
            'Responsable e-commerce'
        ]
    };

    const formData = new FormData(this);
    for (let [key, value] of formData.entries()) {
        const categoryKey = key;
        if(categoryMap[categoryKey]) {
            const categoryName = categoryMap[categoryKey];
            const score = 6 - parseInt(value);
            scores[categoryName] += score;
            console.log('Catégorie:', categoryName, 'Score:', score);
        } else {
            console.error('Catégorie non définie pour la clé:', categoryKey);
        }
    }

    let highestScoreCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    alert(`La catégorie qui vous correspond le plus est: ${highestScoreCategory}\n\nDescription: ${categoryDescriptions[highestScoreCategory]}\n\nMétiers possibles: ${careers[highestScoreCategory].join(', ')}`);
});
