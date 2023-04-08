import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface Props {
  children: React.ReactNode;
}

export interface UserProps {
  id?: number;
  name: string;
  affiliation: string;
  dateOfBirth: Date;
  cpf: string;
  email: string;
  phone: string;
  status?: 'ACTIVATE' | 'INACTIVATE';
  street: string;
  numberHouse: string;
  neighborhood: string;
  cep: string;
  city: string;
  state: string;
}

type UserContextData = {
  userList: UserProps[];
  loadingData: boolean;
  setLoadingData: Dispatch<SetStateAction<boolean>>
};

export const UserContext = createContext({} as UserContextData);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [userList, setUserList] = useState<UserProps[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  function getPostsList() {
    setLoadingData(true);
    fetch(
      `http://localhost:3333/users`,
    )
      .then(async (response) => setUserList(await response.json()))
      .finally(() => {
        setLoadingData(false);
      });
  }

  useEffect(()=> {
    getPostsList()
  }, [])

  return (
    <UserContext.Provider
      value={{
        userList,
        loadingData,
        setLoadingData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};
