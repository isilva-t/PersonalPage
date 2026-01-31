const featuredProjects = [
    {
        id: 'partstock',
        title: 'AutoParts Inventory & Marketplace Integration',
        shortDesc: 'Full-stack inventory system driving 50% sales growth for automotive parts SME',
        image: 'images/partstock.jpg',
        tech: ['Python', 'FastAPI', 'SQLite'],
        github: 'https://github.com/isilva-t/partstock',
        liveDemo: 'https://partstock.xyz',
        period: 'Sep 2025 - Present'
    },
    {
        id: 'stafftrace',
        title: 'Employee Time & Attendance System',
        shortDesc: 'Microservices system with cloud dashboard and on-premise monitors',
        image: 'images/stafftrace.jpg',
        tech: ['Java', 'Spring Boot', 'Python'],
        github: 'https://github.com/isilva-t/stafftrace',
        liveDemo: 'https://stafftrace.xyz',
        period: 'Nov 2025 - Dec 2025'
    },
    {
        id: 'transcendence',
        title: 'Multiplayer WebGame Platform',
        shortDesc: 'Full-stack gaming platform with OAuth, monitoring, and real-time gameplay',
        image: 'images/pong.jpg',
        tech: ['TypeScript', 'Node.js', 'Docker'],
        github: 'https://github.com/isilva-t/42.transcendence',
        period: 'May 2025 - Aug 2025'
    }
];

const otherProjects = [
    {
        id: 'irc',
        title: 'IRC Server',
        shortDesc: 'Multi-client IRC server with network programming and concurrency',
        image: 'images/irc.jpg',
        tech: ['C++', 'Network Programming', "Design Patterns"],
        github: 'https://github.com/isilva-t/42.internet_relay_chat',
        period: 'Mar 2025 - May 2025'
    },
    {
        id: 'infrastructure',
        title: 'Multi-Service Infrastructure',
        shortDesc: 'Containerized web stack with NGINX, WordPress, and MariaDB',
        image: 'images/infrastructure.jpg',
        tech: ['Docker', 'NGINX', 'MariaDB'],
        github: 'https://github.com/isilva-t/42.inception',
        period: 'Feb 2025 - Apr 2025'
    },
    {
        id: 'raytracer',
        title: '3D Ray Tracer',
        shortDesc: 'Ray tracing renderer with TDD approach and computer graphics',
        image: 'images/raytracer.jpg',
        tech: ['C', 'Computer Graphics', 'TDD'],
        github: 'https://github.com/isilva-t/42.minirt',
        period: 'Nov 2024 - Jan 2025'
    },
    {
        id: 'cpp-modules',
        title: 'C++ Modules',
        shortDesc: 'Object-oriented programming fundamentals in C++98 standard',
        image: 'images/cpp.jpg',
        tech: ['C++', 'OOP', "Data Structures"],
        github: 'https://github.com/isilva-t/42.Cpp_modules',
        period: 'Nov 2024 - Mar 2025'
    }
];
// More Projects - 42 Porto curriculum projects
const moreProjects = [
    {
        id: 'minishell',
        title: 'Minishell',
        shortDesc: 'Bash-like shell with pipes, redirections, and built-in commands',
        image: 'images/minishell.jpg',
        tech: ['C', 'Processes', 'UNIX Signals'],
        github: 'https://github.com/isilva-t/42.Minishell',
    },
    {
        id: 'philosophers',
        title: 'Philosophers',
        shortDesc: 'Dining philosophers problem with multithreading and mutex synchronization',
        image: 'images/philosophers.jpg',
        tech: ['C', 'Threads', 'Mutexes'],
        github: 'https://github.com/isilva-t/42.Philosophers',
    },
    {
        id: 'minitalk',
        title: 'Minitalk',
        shortDesc: 'Inter-process communication using UNIX signals',
        image: 'images/minitalk.jpg',
        tech: ['C', 'UNIX Signals'],
        github: 'https://github.com/isilva-t/42.minitalk',
    },
    {
        id: 'fdf',
        title: 'FDF',
        shortDesc: '3D wireframe renderer for heightmap visualization',
        image: 'images/fdf.jpg',
        tech: ['C', '3D Graphics', "Rendering"],
        github: 'https://github.com/isilva-t/42_Fdf',
    },
    {
        id: 'push-swap',
        title: 'Push Swap',
        shortDesc: 'Stack sorting algorithm optimization challenge',
        image: 'images/pushswap.jpg',
        tech: ['C', 'Algorithms', "linked-lists"],
        github: 'https://github.com/isilva-t/42.push_swap',
    },
    {
        id: 'get-next-line',
        title: 'Get Next Line',
        shortDesc: 'File reading function with static variable management',
        image: 'images/gnl.jpg',
        tech: ['C', 'File I/O'],
        github: 'https://github.com/isilva-t/42.get_next_line',
    },
    {
        id: 'ft-printf',
        title: 'ft_printf',
        shortDesc: 'Printf function reimplementation with variadic arguments',
        image: 'images/printf.jpg',
        tech: ['C', 'Variadic Functions'],
        github: 'https://github.com/isilva-t/42.ft_printf',
    },
    {
        id: 'libft',
        title: 'Libft',
        shortDesc: 'Custom C standard library recreation',
        image: 'images/libft.jpg',
        tech: ['C', 'Standard Library'],
        github: 'https://github.com/isilva-t/42.Libft',
    }
];

const currentlyBuilding = [
    {
        id: 'catalog',
        title: 'Online Catalog for AutoParts Local System',
        shortDesc: 'Catalog focused for organic SEO, and client Leads. For production.',
        image: 'images/catalog.jpg',
        tech: ['Java', 'Spring Boot', "Angular"],
        github: 'https://github.com/isilva-t/catalog_for_partstock',
        period: 'Dec 2025 - Present'
    },
    {
        id: 'avaj',
        title: '42 Avaj-Launcher ',
        shortDesc: 'Focus on Design Patterns: Observer, Factory and Singleton. UML diagrams',
        image: 'images/avaj-launcher.jpg',
        tech: ['Java', 'Design Patterns', 'OOP'],
        github: 'https://github.com/isilva-t/42.avaj-launcher',
        period: 'Jan 2026 - Present'
    },
    {
        id: 'pythonData',
        title: '42 Python for Data Science',
        shortDesc: 'Modules from fundamentals, to OOP, and Data Tables',
        image: 'images/pythondata.jpg',
        tech: ['Python', 'Data Tables', 'OOP'],
        github: 'https://github.com/isilva-t/42.python_for_data_science',
        period: 'Dez 2025 - Present'
    },
    {
        id: 'ping',
        title: '42 Ping',
        shortDesc: 'Replication of GNU ping from Inetutils-2.0. Focused on ICMP comunication',
        image: 'images/ftping.jpg',
        tech: ['C', 'Network', 'ICMP packets'],
        github: 'https://github.com/isilva-t/42.ping',
        period: 'Set 2024 - Present'
    },
];