import { use } from 'react'
import { useUserContext } from '@/core/contexts/user-context'

import CardUser from './card-user'

export default function UsersList() {
  const { loadingData, userList } = useUserContext()
  return (
    <div>
      {loadingData && (
        <div>
          <h1>Carregando...</h1>
        </div>
      )}
      {userList &&
        !loadingData &&
        userList.map((user) => {
          return <CardUser key={user.id} user={user} />
        })}
    </div>
  )
}
