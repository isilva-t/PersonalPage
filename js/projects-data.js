const featuredProjects = [
    {
        id: 'partstock',
        title: 'Inventory & Marketplace Integration',
        shortDesc: 'Full-stack inventory system driving 50% sales growth for automotive parts SME',
        image: 'images/partstock.jpg',
        tech: ['Python', 'FastAPI', 'Angular', 'PostgreSQL'],
        liveDemo: 'https://partstock.xyz',
        period: 'Sep 2025 - Present'
    },
    {
        id: 'stafftrace',
        title: 'Employee Time & Attendance System',
        shortDesc: 'Microservices system with cloud dashboard and on-premise monitors',
        image: 'images/stafftrace.jpg',
        tech: ['Java', 'Spring Boot', 'Python', 'Kubernetes'],
        github: 'https://github.com/isilva-t/stafftrace',
        liveDemo: 'https://stafftrace.xyz',
        period: 'Nov 2025 - Dec 2025'
    },
    {
        id: 'transcendence',
        title: 'Multiplayer WebGame Platform',
        shortDesc: 'Full-stack gaming platform with OAuth, monitoring, and real-time gameplay',
        image: 'images/pong.jpg',
        tech: ['TypeScript', 'Node.js', 'Docker', 'Prometheus'],
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
        tech: ['C++', 'Network Programming', 'Socket API'],
        github: 'https://github.com/isilva-t/42.internet_relay_chat',
        period: 'Mar 2025 - May 2025'
    },
    {
        id: 'infrastructure',
        title: 'Multi-Service Infrastructure',
        shortDesc: 'Containerized web stack with NGINX, WordPress, and MariaDB',
        image: 'images/infrastructure.jpg',
        tech: ['Docker', 'NGINX', 'MariaDB', 'SSL/TLS'],
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
        tech: ['C++', 'OOP'],
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
        tech: ['C', 'Shell', 'Processes'],
        github: 'https://github.com/isilva-t/42.Minishell',
    },
    {
        id: 'philosophers',
        title: 'Philosophers',
        shortDesc: 'Dining philosophers problem with multithreading and mutex synchronization',
        image: 'images/philosophers.jpg',
        tech: ['C', 'Threads', 'Mutex'],
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
        tech: ['C', '3D Graphics'],
        github: 'https://github.com/isilva-t/42_Fdf',
    },
    {
        id: 'push-swap',
        title: 'Push Swap',
        shortDesc: 'Stack sorting algorithm optimization challenge',
        image: 'images/pushswap.jpg',
        tech: ['C', 'Algorithms'],
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