import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useToast } from '@/hooks/use-toast'

import { api } from '@/lib/axios'
import { ToastAction } from '@/components/ui/toast'

interface Props {
  children: React.ReactNode
}

export interface UserProps {
  id?: number
  name: string
  affiliation: string
  dateOfBirth: Date
  cpf: string
  email: string
  phone: string
  status?: 'ACTIVATE' | 'INACTIVATE'
  street: string
  numberHouse: string
  neighborhood: string
  cep: string
  city: string
  state: string
}

type UserContextData = {
  userList: UserProps[]
  loadingData: boolean
  setLoadingData: Dispatch<SetStateAction<boolean>>
  postNewUser: (newUserData: UserProps) => void
}

export const UserContext = createContext({} as UserContextData)

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [userList, setUserList] = useState<UserProps[]>([])
  const [loadingData, setLoadingData] = useState<boolean>(false)
  const { toast } = useToast()

  function getAllUsers() {
    setLoadingData(true)
    api
      .get(`/users`)
      .then(async (response) => setUserList(await response.data))
      .catch((err) => {
        toast({
          title: `${err.statusCode} | ${err.error}`,
          description: err.message.map((item) => {
            return `${item}\n`
          }),
          action: <ToastAction altText="Notificação">Okay!</ToastAction>,
        })
      })
      .finally(() => {
        setLoadingData(false)
      })
  }

  function postNewUser(newUserData: UserProps) {
    setLoadingData(true)
    api
      .post(`/users`, {
        ...newUserData,
      })
      .then(async (response) => {
        setUserList(await response.data)
        toast({
          title: 'Sucesso!',
          description: 'Usuário cadastrado com sucesso',
          variant: 'default',
          action: <ToastAction altText="Notificação">Okay!</ToastAction>,
        })
      })
      .catch((err) => {
        const apiLocalError = err?.response?.data
        toast({
          title: `${apiLocalError?.statusCode} | ${apiLocalError?.error}`,
          description: apiLocalError?.message,
          variant: 'destructive',
          action: <ToastAction altText="Notificação">Okay!</ToastAction>,
        })
      })
      .finally(() => {
        setLoadingData(false)
      })
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <UserContext.Provider
      value={{
        userList,
        loadingData,
        setLoadingData,
        postNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }

  return context
}
