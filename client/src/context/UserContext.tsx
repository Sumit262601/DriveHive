import React, { createContext, useState, ReactNode } from 'react';

// Define user state type
interface UserType {
    email: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
}

// Define context type
interface UserContextType {
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

export const UserDataContext = createContext<UserContextType | null>(null);

interface UserContextProps {
    children: ReactNode;
}

const UserContext: React.FC<UserContextProps> = ({ children }) => {
    const [user, setUser] = useState<UserType>({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

    return (
        <div>
            <UserDataContext.Provider value={{ user, setUser }}>
                {children}
            </UserDataContext.Provider>
        </div>
    );
};

export default UserContext;
