const questions = {
  quiz: [
    {
      id: 1,
      question:
        "Laquelle de ces méthodes n'est pas une méthode traditionnelle ?",
      proposed_answer: ["SCRUM", "Méthode en V"],
      answer_index: 0,
      difficulty: 1,
    },
    {
      id: 2,
      question: "Le pair programming signifie :",
      proposed_answer: [
        "Les deux développeurs codent la même fonctionnalité",
        "L'un développe et l'autre assiste et réalise des tests.",
      ],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 3,
      question: "SCRUM est une méthode de travail.",
      proposed_answer: ["Vrai", "Faux"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 4,
      question:
        "SCRUM favorise les interruptions perpétuelles afin d'obtenir un meilleur résultat final du travail.",
      proposed_answer: ["Vrai", "Faux"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 5,
      question: "Trouver l'un des piliers de SCRUM",
      proposed_answer: ["Vrai", "Faux"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 6,
      question: "Lequel de ces rôles SCRUM existe ?",
      proposed_answer: ["SCRUM master", "SCRUM owner"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 7,
      question: "Comment appelle-t-on les acteurs externes d'un projet ?",
      proposed_answer: [
        "Les parties prenantes",
        "Les influences",
        "Les stars",
        "Les influenceurs",
      ],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 8,
      question: "L'incrément de produit est un artefact SCRUM.",
      proposed_answer: ["Vrai", "Faux"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 9,
      question: "Que signifie SCRUM?",
      proposed_answer: ["Agile", "Mêlée", "Embêtant", "Rugby"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 10,
      question: "Quel est l'un des rôles de SCRUM ?",
      proposed_answer: [
        "Product owner",
        "Producteur",
        "Product vaiselle",
        "Owner product",
      ],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 11,
      question:
        "Dans le pair programming, quels sont les rôles du Driver et du Partner ?",
      proposed_answer: [
        "Le Driver conduit et le Partner joue le rôle de copilote.",
        "Le Driver code et le Partner détecte les erreurs en effectuant des tests ou en suggérant d'autres façons de coder.",
        "Le Driver code selon les ordres du Partner",
        "Le Driver est le chef de l'équipe de développement et le Partner est le développeur qui exécute le plan créé par le conducteur.",
      ],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 12,
      question: "TDD, Test Driven Development concerne (à revoir)",
      proposed_answer: [
        "La création de tests unitaires est maintenue tout au long du projet",
        "la création de test de fonctionnalitées",
      ],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 13,
      question: "SCRUM est une méthode  traditionnelle",
      proposed_answer: ["Vrai", "Faux"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 14,
      question:
        "les parties prenantes sont les personnes qui explique et font appliquer Scrum et les principes de l'Agilité.",
      proposed_answer: ["Vrai", "Faux"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 15,
      question: "qui définie le product backlog , l’affinage ?",
      proposed_answer: [
        "le Product Owner",
        "le Chef de projet",
        "le Scrum Master",
        "les parties prenantes",
      ],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 16,
      question:
        "Le scrum master explique et fait appliquer Scrum et les principes de l'Agilité",
      proposed_answer: ["Vrai", "Faux"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 17,
      question:
        "l’équipe de développement ne s’organise pas tout seule , elle a besoin d’un chef de projet pour organiser le travail à faire",
      proposed_answer: ["Vrai", "Faux"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 18,
      question:
        "L'expression initiale des besoins et l'identification des fonctionnalités se font par l'intermédiaire :",
      proposed_answer: [
        "du backlog product",
        "du sprint backlog",
        "a la livraison du produit final",
      ],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 19,
      question:
        "Une Story est un élément de fonction, visible d'un utilisateur",
      proposed_answer: ["Vrai", "Faux"],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 20,
      question: "Une Epic peut être développée en 1 sprint.",
      proposed_answer: ["Vrai", "Faux"],
      answer_index: 1,
      difficulty: 1,
    },
  ],
  intruder: [
    {
      id: 1,
      question: "Le manifeste agile favorise :",
      proposed_answer: [
        "Des solutions opérationnelles",
        "La collaboration avec les clients",
        "La réponse au changement",
        "Les processus et les outils",
        "Les individus et leurs interactions",
      ],
      answer_index: 3,
      difficulty: 1,
    },
    {
      id: 2,
      question: "les piliers de SCRUM :",
      proposed_answer: [
        "Inspection",
        "Interruption",
        "Adaptation",
        "Transparence",
      ],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 3,
      question: "les rôles de scrum :",
      proposed_answer: [
        "Product Owner",
        "Chef de projet",
        "Scrum Master",
        "Équipe Développement",
      ],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 4,
      question: "les artefacts de scrum",
      proposed_answer: [
        "Backlog Produit",
        "Backlog du Sprint",
        "Incrément",
        "Adaptation",
      ],
      answer_index: 3,
      difficulty: 1,
    },
    {
      id: 5,
      question: "Les valeurs de l'équipe Scrum",
      proposed_answer: [
        "Respect",
        "Engagement",
        "Ouverture",
        "Focus",
        "Courage",
        "Efficience",
      ],
      answer_index: 5,
      difficulty: 1,
    },
    {
      id: 6,
      question: "le Backlog Product est :",
      proposed_answer: ["Unique", "Ordonné", "Publique", "fixe", "Vivant"],
      answer_index: 3,
      difficulty: 1,
    },
    {
      id: 7,
      question: "visible des partie prenantes :",
      proposed_answer: [
        "User Story - US",
        "Correction de Bug",
        "Remboursement de dette technique",
      ],
      answer_index: 2,
      difficulty: 1,
    },
    {
      id: 8,
      question: "moyens d’estimation d’une Story :",
      proposed_answer: [
        "Points relatifs",
        "Réunion avec les parties prenantes",
        "T-shirt sizing",
        "Suite de Fibonacci",
        "Planning Poker",
      ],
      answer_index: 1,
      difficulty: 1,
    },
    {
      id: 9,
      question: "les différents scrum board possible :",
      proposed_answer: [
        "Tableau visuel affiché au mur pour l’équipe",
        "des cartes ou des Post-it (Kanban)",
        "Des colonnes représentant les états",
        "Modèle de kano ",
      ],
      answer_index: 3,
      difficulty: 1,
    },
    {
      id: 10,
      question: "Les évenement d’un sprint",
      proposed_answer: [
        "Backlog product",
        "Planification de sprint",
        "Mêlées quotidiennes",
        "Revue de sprint",
        "Rétrospective de sprint",
      ],
      answer_index: 0,
      difficulty: 1,
    },
  ],
};
