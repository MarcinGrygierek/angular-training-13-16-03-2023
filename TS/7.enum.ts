enum Roles {
    Administrator = 'Administrator',
    Moderator = 'Moderator',
    User = 'User'
}

interface User {
    name: string;
    role: Roles;
}

const user: User = {
    name: 'Marcin',
    role: Roles.Moderator,
}