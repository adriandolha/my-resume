const resume = {
    personalDetails: {
        name: 'Adrian Dolha',
        jobTitle: 'Senior Software Engineer',
        description: `Accomplished and energetic Senior Architect with a solid history of achievement in Enterprise Software.
        Motivated leader with strong organizational and prioritization abilities.
        Seeking to leverage his technical and professional expertise in the latest technologies such as serverless,
        cloud native microservices and event driven architectures.`,
        picture: window.location.origin + '/img/me.jpeg',
        contact: {
            email: 'adrian.dolha1@gmail.com',
            phone: '+40743389452',
            location: 'Cluj-Napoca, Romania',
            github: { link: 'https://github.com/adriandolha', placeholder: 'github.com/in/adriandolha' },
            linkedin: { link: 'https://www.linkedin.com/in/adrian-dolha-562578b8/', placeholder: 'linkedin.com/in/adrian-dolha-562578b8' },
        }
    },
    skillsTitle: 'Skills',
    skills: {
        backend: {
            name: 'Backend',
            level: 5, items: [
                ['Python',
                    'Flask',
                    'Django',
                    'Airflow',
                    'Pandas',
                    'Tabula',
                    'Seaborn'],
                ['Java',
                    'Spring',
                    'Spring Boot',
                    'Spring JPA',
                    'Spring WebFlow',
                    'Spring Web MVC'],
                ['SQL Server', 'Oracle', 'Postgres', 'DynamoDb', 'Redis', 'RabbitMQ']
            ]
        },
        cloud: {
            name: 'Cloud',
            level: 5, items: [
                ['AWS', 'Lambda', 'API Gateway', 'DynamoDB', 'RDS', 'Cognito', 'S3', 'SNS', 'SQS', 'CloudFront', 'Route53',
                'ECS', 'EKS', 'Parameter Store', 'Secrets Manager'],
                ['Azure',  'AKS', 'Azure Functions', 'Azure API Management', 'Azure Event Hub', 'Azure Blob Storage',
                'Azure Key Vault', 'Azure Cosmos DB']
            ]
        },
        devops: {
            name: 'Devops',
            level: 4, items: [
                ['Jenkins',
                    'Terraform',
                    'Tekton',
                    'ArgoCD',
                    'AWS SAM',
                    'AWS CodePipeline',
                    'AWS CodeBuild',
                    'Kubernetes',
                    'Docker',
                    'Github Actions']
            ]
        },
        frontend: {
            name: 'Frontend',
            level: 3, items: [
                ['React',
                    'Material UI',
                    'Bootstrap'],
                ['Javascript',
                    'HTML',
                    'CSS'],
                ['Knockout']
            ]
        }
    },
    achievementsTitle: 'Achievements',
    achievements: [{
        title: 'AWS Certified Solutions Architect – Associate',
        name: 'aws_saa',
        badge: window.location.origin + '/img/aws_saa.png',
        from: '09/2021',
        to: '09/2024'
    }],
    languagesTitle: 'Languages',
    languages: [{
        title: 'English',
        level: 'Full Profesional Proficiency'
    }, {
        title: 'Romanian',
        level: 'Native'
    }
    ],
    educationTitle: 'Education',
    education: [{
        title: 'Technical University of Cluj-Napoca',
        specialization: 'Computer Science',
        from: '09/2004',
        to: '07/2009',
        location: 'Cluj-Napoca'
    }, {
        title: 'Tiberiu Popovici High Scool',
        specialization: 'Computer Science',
        from: '09/2000',
        to: '07/2004',
        location: 'Cluj-Napoca'
    }
    ],
    workExperienceTitle: 'Work Experience',
    tasksTitle: 'Achievements/Tasks',
    workExperiences: [
    {
            jobTitle: 'Development Consultant',
            company: 'Freelancing',
            from: '04/2022',
            to: 'Present',
            tasks: [
                'After 13 years of experience as a full-time employee, I was up for a new challenge, so I embarked on the freelancing journey.',
                'Got up to date with latest Frontend technologies, mainly React and Material UI.',
                'Worked on personal projects, in line with my interest in Cloud and Serverless architectures. Please check the personal projects section for more details.',
                'Worked as part-time development consultant.'
            ],
            techStack: ['Python', 'AWS', 'Serverless', 'React']
        },
        {
            jobTitle: 'Head of Development',
            company: 'Endava',
            from: '01/2019',
            to: '04/2022',
            tasks: [
                'Coordinated Development Discipline with 10 Discipline Leads and over 400 developers.',
                'Built 6 technical communities for Java, .NET, Android, iOS, Frontend, Python',
                'Growed the Discipline from 300 to 400 members',
                'Doubled Frontend developers.',
                'Responsible for workforce planning, hiring, juniors intake, technical interviews.',
                'Involved in presales.',
            ],
            techStack: ['Management', 'Workforce Planning', 'Salary Reviews', 'Technical Communities', 'Presales',
                'People Development', 'Career Coach']
        },
        {
            jobTitle: 'Senior Architect',
            company: 'Endava',
            from: '05/2018',
            to: '06/2019',
            tasks: [
                'Coordinated the development effort for the team.',
                'Created on-boarding procedure for new team members.',
                'Trained new team members.',
                'Proposed architectural solutions for serverless AWS and Azure microservices.',
                'Designed and implemented serverless architecture on AWS and Azure (Azure Functions, Azure API Management',
                'Migrated from serverless to microservices with Azure AKS.',
                'Implemented and supervised the implementation of several connectors for Google, Twitter, Facebook, Postgresql, etc..',
                'Created code structure and templates according to best practices.',
                'Developed a strategy to migrate from AWS to Azure.',
                'Documented application architecture.'
            ],
            techStack: ['Python', 'Flask', 'Django', 'Apache Airflow', 'AWS', 'S3', 'DynamoDB', 'SQS', 'AWS Lambda', 'EKS',
            'Azure', 'AKS', 'Azure Functions', 'Azure API Management', 'Azure Event Hub', 'Azure Blob Storage', 'Azure Key Vault']
        },
        {
            jobTitle: 'Product Architect',
            company: 'SDL',
            from: '01/2016',
            to: '04/2018',
            tasks: [
                'Designed the integration of new services.',
                'Improved availability from 95 to 99.',
                'Migrated from ANT to MAVEN and built Jenkins pipelines.',
                'Implemented monitoring using ELK stack.',
                'Provided support for the adoption of APM tool.',
                'Automated release process and increased test coverage with 20% on unit tests and 50% on e2e tests.',
                'Provided support to migrate from on-prem to AWS.',
                'Split the monolith and worked to containerize the application using Docker/ Kubernetes - developed demo projects based on Spring Boot/Kafka/ ElasticSearch /Redis, etc.',
                'Collaborated closely with different stakeholders from PM, PO, Dev Manager, DEV QA to OPS and Professional Support.'
            ],
            techStack: ['Java', 'Spring', 'Spring Boot', 'Docker', 'Kubernetes', 'AWS', 'Elastic Beanstalk', 'Jenkins', 'Maven', 'SQL Server', 'Oracle', 'Knockout']
        },
        {
            jobTitle: 'Technical Lead',
            company: 'SDL',
            from: '01/2014',
            to: '01/2016',
            tasks: [
                'Designed and implemented REST APIs from scratch.',
                'Worked closely on the integration and adoption of Spring stack: DI, REST, MVC, AOP, JPA (Hibernate).',
                'Lead the adoption of QueryDSL and migrated from Java 6 to Java 8, from Tomcat 7 to Tomcat 8.',
                'Fixed critical outages and performance issues.',
                'Provided continuous support for OPS, DEV and Professional Services and outstanding technical support to clients.'
            ],
            techStack: ['Java', 'Spring', 'SQL Server', 'Oracle', 'JSP']
        },
        {
            jobTitle: 'Software Developer',
            company: 'SDL',
            from: '01/2013',
            to: '01/2014',
            tasks: [
                'Worked on world leading translation software. The application offered both translation and translation projects management capabilities, being used by top companies over the world.',
                'Implemented new features.',
                'Provided maintenance on a large Enterprise product.',
                'Introduced new libraries.',
                'Started working on application refresh.',
                'Documented the application after KT and helped with the on boarding process for new comers.'
            ],
            techStack: ['Java', 'Spring', 'SQL Server', 'Oracle', 'JSP']
        },
        {
            jobTitle: 'Software Engineer',
            company: 'HP',
            from: '10/2009',
            to: '01/2013',
            tasks: [
                'Developed and worked on dozens of integrations (Active Driectory , OpenStack , Exchange, Powershell , SCVMM , EC2 , VMWARE , etc.) in a product used to orchestrate datacenter operations. The integrations were developed in Java/C#.',
                'Migrated build from ANT to Maven.',
                'Developed key integrations.',
                'Fixed critical issues for major clients.'
            ],
            techStack: ['Java', 'C#']
        }

    ],
    personalProjectsTitle: 'Personal Projects',
    personalProjects: [{
        title: 'Billy',
        github: { link: 'https://github.com/adriandolha/billy', placeholder: 'Github Repo' },
        from: '04/2022',
        to: 'Present',
        description: '',
        tasks: ['Created an application for expenses and bills analytics, which collects, processes and analyzes'+
            'bank statements, providing a general view on your expenses. It generates reports that show how much'+
            'you spend on food, travel, etc.',
            'Extracted data from pdf bank statements using tabula and pandas.',
            'Implemented low cost search engine based on pandas, caching data stored in S3.',
            'Created end to end CI/CD pipeline using CodePipeline and CodeBuild.',
            'Integrated Cognito for user authentication and authorization.',
            'Implemented event driven architecture with DynamoDB streams, SNS topics and SQS queues.',
            'Implemented serverless architecture using Lambdas and SAM.',
            'Implemented DynamoDB single table design.',
            'Deployed React frontend on S3, CloudFront and Route53'
        ],
        techStack: ['Serverless','Python', 'AWS', 'Lambda', 'SAM', 'SNS', 'SQS', 'S3', 'DynamoDB', 'CloudFront', 'Cognito',
         'API Gateway', 'Route53', 'CodePipeline', 'CodeBuild', 'Secrets Manager', 'Parameter Store', 'Pandas', 'Tabula',
        'React', 'Material UI']
    },
    {
        title: 'Hodor',
        github: { link: 'https://github.com/adriandolha/hodor', placeholder: 'Github Repo' },
        from: '04/2022',
        to: 'Present',
        description: '',
        tasks: ['Created an authentication and authorization service based on AuthLib to generate JWTs.',
            'Integrated Google authentication.'
        ],
        techStack: ['Python','OAuthLib', 'JWT', 'Postgres','Kubernetes', 'Docker']
    },
    {
        title: 'My Resume',
        github: { link: 'https://github.com/adriandolha/my-resume', placeholder: 'Github Repo' },
        from: '04/2022',
        to: 'Present',
        description: '',
        tasks: ['Created a simple React app to expose my resume.',
            'Deployed React frontend on S3, CloudFront and Route53.'
        ],
        techStack: ['React','Material UI', 'AWS', 'S3', 'CloudFront', 'SAM', 'Route53', 'Lambda', 'Github Actions']
    },
    {
        title: 'Development Discipline Tools',
        from: '06/2019',
        to: '12/2021',
        description: '',
        tasks: ['Extracted complex data from salary review Excel files.',
            'Created reports and dashboards from salary review data.',
            'Extracted workforce planning data from internal tools.',
            'Created reports from workforce planning tool.',
            'Created development skills report.'
        ],
        techStack: ['Python', 'Flask', 'Pandas', 'Seaborn', 'Openpyxl']
    },
    {
        title: 'Lorem Ipsum',
        github: { link: 'https://github.com/adriandolha/cloud-demo/tree/master/lorem-ipsum', placeholder: 'Github Repo' },
        from: '10/2009',
        to: 'Present',
        description: '',
        tasks: [
            'Created an application used as a technical playground to prove architectural concepts.',
            'Implemented a simple text generator, useful to generate books and get some random content to be used elsewhere.',
            'Implemented hexagonal architecture in Python.',
            'Worked using best engineering practices including TDD, CI/CD, OAuth, etc.',
            'Implemented JWT authentication and authorization.',
            'Implemented a simple search engine to get stats from generated text. e.g. # of unique numbers.',
            'Deployed the app on local Kubernetes, AWS ECS and AWS EKS.',
            'Implemented frontend using React and Bootstrap.'
        ],
        techStack: ['Python', 'Flask', 'Postgres', 'Kubernetes', 'Istio', 'Terraform', 'Tekton', 'ArgoCD', 'AWS', 'EKS', 'ECS',
        'React', 'Bootstrap', 'Prometheus', 'Grafana', 'ElasticSearch', 'Kibana']
    },
    ]
}

export default resume;