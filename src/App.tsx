import axios from 'axios';
import { useState, useEffect } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <Card onClick={(num) => console.log(num)} variant={CardVariant.outlined} width='200px' height='200px' >
                <button>Кнопка</button>
                <div>ss</div>
            </Card>
            <UserList users={users}></UserList>
        </div>
    );
};

export default App;
