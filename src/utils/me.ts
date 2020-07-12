const myExperience = {
    profile: {
        description: 'Frontend Developer',
        name: 'Daniele Irsuti',
        bornDate: new Date(1990, 4, 12),
        nationality: 'Italiana',
    },
    skills: [
        {
            topic: 'Linguaggi',
            list: ['Javascript', 'Typescript', 'PHP'],
        },
        {
            topic: 'Frameworks',
            list: ['React Native', 'Express JS'],
        },
        {
            topic: 'Librerie',
            list: ['React JS', 'Redux', 'Tweenmax', 'jQuery'],
        },
        {
            topic: 'DBMS',
            list: ['Mongo DB', 'MsSql'],
        },
        {
            topic: 'Strumenti di sviluppo',
            list: ['Visual Studio Code', 'Webstorm'],
        },
        {
            topic: 'Versioning',
            list: ['Git', 'TFS'],
        },
    ],
    educations: [
        {
            description: 'Maximilian Schwarzmüller (Udemy)',
            title: 'React 16',
            year: 2018,
            certificate: 'http://bit.ly/2sjLacr',
        },
        {
            description: 'Maximilian Schwarzmüller (Udemy)',
            title: 'React Native',
            year: 2018,
            certificate: '',
        },
        {
            description: 'John Hopkins University',
            title: 'SPA con Angular JS',
            year: 2016,
            certificate: 'http://bit.ly/2TG2ILk',
        },
        {
            description: 'The Hong Kong University',
            title: 'Coursera course in “HTML, CSS and JavaScript”',
            year: 2016,
            certificate: 'http://bit.ly/2FoxnsP',
        },
        {
            description: 'ANFE (Bagheria, Palermo)',
            title: 'Corso professionale come programmatore web in linguaggio PHP',
            year: 2014,
            certificate: '',
        },
    ],
    experiences: [
        {
            from: { month: 2, year: 2020 },
            to: { month: 3, year: 2000 },
            companyName: 'Spindox',
            projectDescription:
                'Sviluppo e coordinamento del team di sviluppo di un’app in React JS e adattamento di nuove feature solo per applicazioni mobile e tablet in Cordova.',
            projectName: 'FCA Bank',
            technologies: [
                {
                    topic: 'Librerie usate',
                    list: ['React JS', 'Redux', 'Cordova', 'Styled components', 'Reselect', 'Antd'],
                },
                {
                    topic: 'Versioning',
                    list: ['Git', 'Azure DevOps'],
                },
            ],
            role: 'Frontend Developer',
        },
        {
            from: { month: 2, year: 2020 },
            to: { month: 2, year: 2020 },
            companyName: 'Spindox',
            projectDescription: 'Maintainance e coordinamento del team di sviluppo di applicazione in React Native.',
            projectName: 'Thank you APP',
            technologies: [
                {
                    topic: 'Frameworks',
                    list: ['React Native', 'Node JS', 'Express'],
                },
                {
                    topic: 'Librerie usate',
                    list: ['Redux', 'Firebase', 'Antd'],
                },
                {
                    topic: 'Versioning',
                    list: ['Git', 'Azure DevOps'],
                },
            ],
            role: 'Frontend e backend Developer',
        },
        {
            from: { month: 10, year: 2019 },
            to: { month: 2, year: 2020 },
            companyName: 'Spindox',
            projectDescription: 'Realizzazione e coordinamento del team di sviluppo di webapp in React JS.',
            projectName: 'My Ferrari',
            technologies: [
                {
                    topic: 'Frameworks',
                    list: ['Node JS', 'Express'],
                },
                {
                    topic: 'Librerie usate',
                    list: ['React JS', 'Redux', 'Cordova', 'Styled components', 'Reselect', 'Material UI'],
                },
                {
                    topic: 'Versioning',
                    list: ['Git', 'Azure DevOps'],
                },
            ],
            role: 'Frontend Developer',
        },
        {
            from: { month: 8, year: 2019 },
            to: { month: 10, year: 2019 },
            companyName: 'Reply (Germania)',
            projectDescription: 'Realizzazione di un chatbot ad uso interno nell’IT Center di BMW. ',
            projectName: 'WAKA Chatbot',
            technologies: [
                {
                    topic: 'Frameworks',
                    list: ['Bot Framework'],
                },
                {
                    topic: 'Linguaggi',
                    list: ['Typescript'],
                },
                {
                    topic: 'Database',
                    list: ['Cosmos'],
                },
                {
                    topic: 'Versioning',
                    list: ['Git', 'Azure DevOps'],
                },
            ],
            role: 'Javascript Developer',
        },
        {
            from: { month: 3, year: 2019 },
            to: { month: 8, year: 2019 },
            companyName: 'Reply (Germania)',
            projectDescription:
                'Realizzazione di una libreria di componenti per facilitare le attività di Natural Learning Processing in ambito automotive',
            projectName: 'BMW Es components',
            technologies: [
                {
                    topic: 'Librerie',
                    list: ['React JS', 'Bootstrap'],
                },
                {
                    topic: 'Database',
                    list: ['Elastic search'],
                },
                {
                    topic: 'Versioning',
                    list: ['Git', 'Azure DevOps'],
                },
            ],
            role: 'Frontend Developer',
        },
        {
            from: { month: 1, year: 2019 },
            to: { month: 3, year: 2019 },
            companyName: 'Aesys',
            projectDescription: `Realizzazione di una webapp interna per un servizio di ristorazione locale. Per il progetto è stato utilizzato React in combinazione a Redux e Firebase.
        `,
            projectName: 'PWA',
            technologies: [
                {
                    topic: 'Librerie',
                    list: ['React JS', 'Redux', 'Firebase'],
                },
                {
                    topic: 'Database',
                    list: ['Elastic search'],
                },
                {
                    topic: 'Versioning',
                    list: ['Git', 'Azure DevOps'],
                },
            ],
            role: 'Frontend Developer',
        },
        {
            from: { month: 6, year: 2018 },
            to: { month: 1, year: 2019 },
            companyName: 'ECRM Amilon',
            projectDescription: `Realizzazione della UI e parte delle web api consumate dalla webapp.
        Per il progetto si è optato per tecnologie prettamente SSR, per la ui è stato impiegato javascript vanilla e jquery`,
            projectName: 'PWA',
            technologies: [
                {
                    topic: 'Librerie',
                    list: ['jQuery', 'Bootstrap 4'],
                },
                {
                    topic: 'Database',
                    list: ['MSSQL'],
                },
                {
                    topic: 'Versioning',
                    list: ['TFS'],
                },
            ],
            role: 'Frontend Developer',
        },
        {
            from: { month: 1, year: 2017 },
            to: { month: 3, year: 2018 },
            companyName: 'Tim',
            projectDescription: `Servizi di consulenza per il Comando Generale della Guardia di Finanza (Ministero delle Economie e delle Finanze), all’interno di un team di sviluppo Business Intelligence gestito da Telecom Italia Mobile`,
            projectName: 'Geodas NET',
            technologies: [
                {
                    topic: 'Librerie',
                    list: ['jQuery', 'AmCharts', 'AmMaps'],
                },
                {
                    topic: 'Database',
                    list: ['MSSQL'],
                },
                {
                    topic: 'Versioning',
                    list: ['TFS'],
                },
            ],
            role: 'Frontend Developer',
        },
        {
            from: { month: 6, year: 2015 },
            to: { month: 1, year: 2016 },
            companyName: 'Ass. Culturale “Fatto da me”',
            projectDescription: `Sviluppo e manutenzione dell’ecommerce dell'associazione, SEO e advertising`,
            projectName: 'Seabag Original Underwater',
            technologies: [
                {
                    topic: 'Librerie',
                    list: ['jQuery', 'AmCharts', 'AmMaps'],
                },
                {
                    topic: 'Cms',
                    list: ['Wordpress', 'Prestashop'],
                },
                {
                    topic: 'Database',
                    list: ['MySQL'],
                },
                {
                    topic: 'Versioning',
                    list: ['Git'],
                },
            ],
            role: 'Frontend Developer',
        },
    ],
};

export default myExperience;

export type myExperienceType = typeof myExperience;
