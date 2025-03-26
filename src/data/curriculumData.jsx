// File: src/data/curriculumData.js

// Available departments
export const departments = [
    { value: 'CSE', label: 'Computer Science (CSE)' },
    { value: 'ECE', label: 'Electronics & Communication (ECE)' },
    { value: 'Mechanical', label: 'Mechanical Engineering' },
    { value: 'Civil', label: 'Civil Engineering' },
    { value: 'EEE', label: 'Electrical & Electronics (EEE)' },
    { value: 'IT', label: 'Information Technology (IT)' }
  ];
  
  // Available years
  export const years = [
    { value: '1', label: '1st Year' },
    { value: '2', label: '2nd Year' },
    { value: '3', label: '3rd Year' },
    { value: '4', label: '4th Year' }
  ];
  
  // Available semesters
  export const semesters = [
    { value: 'odd', label: 'Odd Semester' },
    { value: 'even', label: 'Even Semester' }
  ];
  
  // Sample courses data
  export const coursesData = [
    {
      id: 1,
      code: "CS301",
      title: "Database Systems",
      department: "CSE",
      year: 3,
      semester: "odd",
      credits: 4,
      type: "core",
      faculty: "Dr. S. Kumar",
      description: "This course covers fundamental concepts of database systems, including ER modeling, relational model, SQL, normalization, transaction processing, and database design.",
      units: [
        { title: "Introduction to Databases", topics: ["Database concepts", "Database architecture", "DBMS functionalities", "Database users"], hours: 6 },
        { title: "Entity-Relationship Model", topics: ["Entity types", "Relationships", "ER diagrams", "Constraints"], hours: 8 },
        { title: "Relational Model", topics: ["Relational schema", "Keys", "Integrity constraints", "Relational algebra"], hours: 10 },
        { title: "SQL", topics: ["DDL", "DML", "Queries", "Views", "Stored procedures"], hours: 12 },
        { title: "Normalization", topics: ["Functional dependencies", "1NF, 2NF, 3NF", "BCNF", "Multi-valued dependencies"], hours: 8 },
        { title: "Transaction Processing", topics: ["ACID properties", "Concurrency control", "Recovery", "Serializability"], hours: 8 }
      ],
      textbooks: [
        "Database System Concepts by Silberschatz, Korth and Sudarshan",
        "An Introduction to Database Systems by C.J. Date",
        "Database Management Systems by Ramakrishnan and Gehrke"
      ],
      references: [
        "Fundamentals of Database Systems by Elmasri and Navathe",
        "Modern Database Management by Hoffer, Ramesh and Topi"
      ],
      evaluationScheme: {
        internal: [
          { component: "Mid Semester Exam", weightage: 30 },
          { component: "Assignments", weightage: 10 },
          { component: "Quizzes", weightage: 10 },
          { component: "Lab Work", weightage: 20 }
        ],
        external: [
          { component: "End Semester Exam", weightage: 70 }
        ]
      },
      outcomes: [
        "Design and implement database systems for various applications",
        "Write SQL queries for data manipulation and retrieval",
        "Apply normalization principles to design efficient database schemas",
        "Implement transaction processing with concurrency control"
      ]
    },
    {
      id: 2,
      code: "CS302",
      title: "Operating Systems",
      department: "CSE",
      year: 3,
      semester: "odd",
      credits: 4,
      type: "core",
      faculty: "Prof. R. Reddy",
      description: "This course covers the fundamental concepts of operating systems, including process management, memory management, file systems, I/O management, and security.",
      units: [
        { title: "Introduction to Operating Systems", topics: ["OS concepts", "OS structure", "OS services", "System calls"], hours: 6 },
        { title: "Process Management", topics: ["Process concepts", "Scheduling algorithms", "Process synchronization", "Deadlocks"], hours: 10 },
        { title: "Memory Management", topics: ["Memory hierarchy", "Virtual memory", "Paging", "Segmentation"], hours: 8 },
        { title: "File Systems", topics: ["File concepts", "File access methods", "Directory structure", "File system implementation"], hours: 8 },
        { title: "I/O Management", topics: ["I/O hardware", "I/O software", "Disk scheduling", "I/O performance"], hours: 6 },
        { title: "Security and Protection", topics: ["Security threats", "Authentication", "Access control", "Protection mechanisms"], hours: 8 }
      ],
      textbooks: [
        "Operating System Concepts by Silberschatz, Galvin and Gagne",
        "Modern Operating Systems by Andrew S. Tanenbaum",
        "Operating Systems: Internals and Design Principles by William Stallings"
      ],
      references: [
        "Understanding the Linux Kernel by Daniel P. Bovet and Marco Cesati",
        "The Design and Implementation of the FreeBSD Operating System by McKusick et al."
      ],
      evaluationScheme: {
        internal: [
          { component: "Mid Semester Exam", weightage: 30 },
          { component: "Assignments", weightage: 10 },
          { component: "Quizzes", weightage: 10 },
          { component: "Lab Work", weightage: 20 }
        ],
        external: [
          { component: "End Semester Exam", weightage: 70 }
        ]
      },
      outcomes: [
        "Understand the fundamental concepts of operating systems",
        "Analyze and evaluate process scheduling algorithms",
        "Implement memory management techniques",
        "Design and implement file systems",
        "Apply security principles in operating systems"
      ]
    },
    {
      id: 3,
      code: "CS303",
      title: "Computer Networks",
      department: "CSE",
      year: 3,
      semester: "odd",
      credits: 4,
      type: "core",
      faculty: "Dr. P. Sharma",
      description: "This course covers the fundamental concepts of computer networking, including network architecture, protocols, addressing, routing, and network security.",
      units: [
        { title: "Introduction to Computer Networks", topics: ["Network types", "Network topologies", "Network protocols", "OSI and TCP/IP models"], hours: 8 },
        { title: "Physical Layer", topics: ["Transmission media", "Signal encoding", "Multiplexing", "Switching"], hours: 6 },
        { title: "Data Link Layer", topics: ["Error detection and correction", "Flow control", "MAC protocols", "Ethernet"], hours: 8 },
        { title: "Network Layer", topics: ["IP addressing", "Subnetting", "Routing algorithms", "IPv4 and IPv6"], hours: 10 },
        { title: "Transport Layer", topics: ["TCP and UDP", "Flow control", "Congestion control", "Socket programming"], hours: 8 },
        { title: "Application Layer", topics: ["DNS", "Web protocols", "Email protocols", "P2P applications"], hours: 8 }
      ],
      textbooks: [
        "Computer Networking: A Top-Down Approach by Kurose and Ross",
        "Computer Networks by Andrew S. Tanenbaum",
        "Data Communications and Networking by Behrouz A. Forouzan"
      ],
      references: [
        "TCP/IP Protocol Suite by Behrouz A. Forouzan",
        "Computer Networks: A Systems Approach by Peterson and Davie"
      ],
      evaluationScheme: {
        internal: [
          { component: "Mid Semester Exam", weightage: 30 },
          { component: "Assignments", weightage: 10 },
          { component: "Quizzes", weightage: 10 },
          { component: "Lab Work", weightage: 20 }
        ],
        external: [
          { component: "End Semester Exam", weightage: 70 }
        ]
      },
      outcomes: [
        "Understand the fundamental concepts of computer networks",
        "Analyze and design network protocols",
        "Implement IP addressing and subnetting schemes",
        "Configure and troubleshoot network devices",
        "Implement network security measures"
      ]
    },
    {
      id: 4,
      code: "CS304",
      title: "Machine Learning",
      department: "CSE",
      year: 3,
      semester: "odd",
      credits: 4,
      type: "elective",
      faculty: "Dr. L. Patel",
      description: "This course introduces the fundamentals of machine learning, including supervised and unsupervised learning algorithms, feature selection, model evaluation, and practical applications.",
      units: [
        { title: "Introduction to Machine Learning", topics: ["Types of ML", "Supervised vs Unsupervised", "Applications", "Learning paradigms"], hours: 6 },
        { title: "Linear Models", topics: ["Linear regression", "Logistic regression", "Perceptron", "SVM"], hours: 8 },
        { title: "Decision Trees and Ensemble Methods", topics: ["Decision trees", "Random forests", "Boosting", "Bagging"], hours: 8 },
        { title: "Neural Networks", topics: ["Multilayer perceptron", "Backpropagation", "Activation functions", "Regularization"], hours: 10 },
        { title: "Clustering", topics: ["K-means", "Hierarchical clustering", "DBSCAN", "Evaluation metrics"], hours: 6 },
        { title: "Dimensionality Reduction", topics: ["PCA", "LDA", "Feature selection", "Feature extraction"], hours: 6 }
      ],
      textbooks: [
        "Machine Learning by Tom Mitchell",
        "Pattern Recognition and Machine Learning by Christopher Bishop",
        "The Elements of Statistical Learning by Hastie, Tibshirani, and Friedman"
      ],
      references: [
        "Deep Learning by Goodfellow, Bengio, and Courville",
        "Introduction to Machine Learning with Python by Müller and Guido"
      ],
      evaluationScheme: {
        internal: [
          { component: "Mid Semester Exam", weightage: 30 },
          { component: "Assignments", weightage: 10 },
          { component: "Project", weightage: 20 },
          { component: "Lab Work", weightage: 10 }
        ],
        external: [
          { component: "End Semester Exam", weightage: 70 }
        ]
      },
      outcomes: [
        "Understand the fundamental concepts of machine learning",
        "Implement and evaluate supervised learning algorithms",
        "Implement and evaluate unsupervised learning algorithms",
        "Apply feature selection and dimensionality reduction techniques",
        "Develop practical machine learning applications"
      ]
    }
  ];
  
  // Regulations data
  export const regulationsData = [
    {
      id: 1, 
      title: "B.Tech Academic Regulations 2023",
      year: "2023",
      applicableBatches: "2023 onwards",
      updatedOn: "2023-06-15",
      type: "academic"
    },
    {
      id: 2, 
      title: "B.Tech Academic Regulations 2020",
      year: "2020",
      applicableBatches: "2020-2022",
      updatedOn: "2020-06-10",
      type: "academic"
    },
    {
      id: 3, 
      title: "M.Tech Academic Regulations 2022",
      year: "2022",
      applicableBatches: "2022 onwards",
      updatedOn: "2022-06-12",
      type: "academic"
    },
    {
      id: 4, 
      title: "Examination Regulations 2023",
      year: "2023",
      applicableBatches: "All Batches",
      updatedOn: "2023-07-05",
      type: "examination"
    }
  ];
  
  // Academic Calendar data
  export const calendarData = {
    oddSemester: [
      { event: "Commencement of Classes", startDate: "01-08-2023", endDate: "-", duration: "-", remarks: "For all years" },
      { event: "First Internal Assessment", startDate: "15-09-2023", endDate: "22-09-2023", duration: "1 week", remarks: "-" },
      { event: "Dussehra Holidays", startDate: "15-10-2023", endDate: "24-10-2023", duration: "10 days", remarks: "-" },
      { event: "Second Internal Assessment", startDate: "10-11-2023", endDate: "17-11-2023", duration: "1 week", remarks: "-" },
      { event: "Preparation Leave", startDate: "10-12-2023", endDate: "17-12-2023", duration: "1 week", remarks: "-" },
      { event: "End Semester Examinations", startDate: "18-12-2023", endDate: "05-01-2024", duration: "3 weeks", remarks: "-" },
      { event: "Semester Break", startDate: "06-01-2024", endDate: "14-01-2024", duration: "1 week", remarks: "-" }
    ],
    evenSemester: [
      { event: "Commencement of Classes", startDate: "15-01-2024", endDate: "-", duration: "-", remarks: "For all years" },
      { event: "First Internal Assessment", startDate: "26-02-2024", endDate: "04-03-2024", duration: "1 week", remarks: "-" },
      { event: "Holi Holidays", startDate: "25-03-2024", endDate: "26-03-2024", duration: "2 days", remarks: "-" },
      { event: "Second Internal Assessment", startDate: "15-04-2024", endDate: "22-04-2024", duration: "1 week", remarks: "-" },
      { event: "Preparation Leave", startDate: "10-05-2024", endDate: "17-05-2024", duration: "1 week", remarks: "-" },
      { event: "End Semester Examinations", startDate: "18-05-2024", endDate: "08-06-2024", duration: "3 weeks", remarks: "-" },
      { event: "Summer Vacation", startDate: "09-06-2024", endDate: "31-07-2024", duration: "7 weeks", remarks: "-" }
    ]
  };
  
  // Program structure data
  export const programStructureData = {
    year1: {
      semester1: [
        { code: "MA101", title: "Engineering Mathematics I", credits: 4, type: "Core", hoursPerWeek: 4 },
        { code: "PH101", title: "Engineering Physics", credits: 3, type: "Core", hoursPerWeek: 3 },
        { code: "CS101", title: "Programming Fundamentals", credits: 3, type: "Core", hoursPerWeek: 3 },
        { code: "CS111", title: "Programming Lab", credits: 2, type: "Lab", hoursPerWeek: 4 },
        { code: "HU101", title: "Technical English", credits: 2, type: "Core", hoursPerWeek: 2 }
      ],
      semester2: [
        { code: "MA102", title: "Engineering Mathematics II", credits: 4, type: "Core", hoursPerWeek: 4 },
        { code: "CH101", title: "Engineering Chemistry", credits: 3, type: "Core", hoursPerWeek: 3 },
        { code: "CS102", title: "Data Structures", credits: 3, type: "Core", hoursPerWeek: 3 },
        { code: "CS112", title: "Data Structures Lab", credits: 2, type: "Lab", hoursPerWeek: 4 },
        { code: "ME101", title: "Engineering Drawing", credits: 3, type: "Core", hoursPerWeek: 5 }
      ]
    },
    year2: {
      semester3: [
        { code: "MA201", title: "Engineering Mathematics III", credits: 4, type: "Core", hoursPerWeek: 4 },
        { code: "CS201", title: "Object Oriented Programming", credits: 3, type: "Core", hoursPerWeek: 3 },
        { code: "CS202", title: "Digital Logic Design", credits: 3, type: "Core", hoursPerWeek: 3 },
        { code: "CS203", title: "Discrete Mathematics", credits: 3, type: "Core", hoursPerWeek: 3 },
        { code: "CS211", title: "OOP Lab", credits: 2, type: "Lab", hoursPerWeek: 4 },
        { code: "CS212", title: "Digital Logic Design Lab", credits: 2, type: "Lab", hoursPerWeek: 4 }
      ],
      semester4: [
        { code: "MA202", title: "Probability and Statistics", credits: 4, type: "Core", hoursPerWeek: 4 },
        { code: "CS204", title: "Computer Organization", credits: 3, type: "Core", hoursPerWeek: 3 },
        { code: "CS205", title: "Algorithms", credits: 3, type: "Core", hoursPerWeek: 3 },
        { code: "CS206", title: "Theory of Computation", credits: 3, type: "Core", hoursPerWeek: 3 },
        { code: "CS213", title: "Algorithms Lab", credits: 2, type: "Lab", hoursPerWeek: 4 },
        { code: "CS214", title: "Web Technology Lab", credits: 2, type: "Lab", hoursPerWeek: 4 }
      ]
    }
  };