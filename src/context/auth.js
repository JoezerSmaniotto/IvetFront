//import React, { createContext, useCallback, useState, useContext } from 'react'; // Uso createContext para criar um contexto na aplicação
import React, { createContext, useCallback, useState, useContext } from 'react'; 
import api from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        // INICIO Essa logica só é chamada quando o user, sair ou recarregar a pagína Para carregar as informações do storage
        const token = localStorage.getItem('@Gobarber:token');
        const user = localStorage.getItem('@Gobarber:user');
        if (token && user) {
            return { token, user: JSON.parse(user) };
        }

        return {};
    }); 

    const signIn = useCallback(async ({ email, password }) => {
        try{
            const response = await api.post('sessions', {
              email,
              password,
            });
            const { token, user } = response.data;    
            localStorage.setItem('@Gobarber:token', token);
            localStorage.setItem('@Gobarber:user', JSON.stringify(user)); // O user cm é uma obj, uso o JSON.stringify para converter em uma string;
            setData({ token, user }); // Se não colocar esse setData não consigo pegar os dados por quando faço login isso já aconteceu porem com osvalores null, mas chamando
            return true;
            // novamente o setData aqui eu irei passar os valores atualizados recebidos no login
        }catch(error){
            return false;
        }
        

    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@Gobarber:token');
        localStorage.removeItem('@Gobarber:user');
    
        setData({});
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );

};

function useAuth() {
    const context = useContext(AuthContext); // Com useContext posso obter informações do contexto
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
  
} 
export { AuthProvider, useAuth };
  




