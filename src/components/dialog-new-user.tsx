'use client'

import { useEffect, useState } from 'react'
import { UserProps, useUserContext } from '@/core/contexts/user-context'
import { Edit3, Plus } from 'lucide-react'

import { formatShortDate } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function DialogNewUser({
  isNew = true,
  userDataProps,
}: {
  isNew?: boolean
  userDataProps?: UserProps
}) {
  const { postNewUser, editUser } = useUserContext()
  const [userData, setUserData] = useState<UserProps>(
    userDataProps ? userDataProps : ({} as UserProps)
  )

  const handlerForm = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      affiliation: { value: string }
      dateOfBirth: { value: string }
      cpf: { value: string }
      email: { value: string }
      phone: { value: string }
      street: { value: string }
      numberHouse: { value: string }
      neighborhood: { value: string }
      cep: { value: string }
      city: { value: string }
      state: { value: string }
    }

    const dataNewUser = {
      name: target.name.value ? target.name.value : '',
      affiliation: target.affiliation.value ? target.affiliation.value : '',
      dateOfBirth: new Date(target.dateOfBirth.value)
        ? new Date(target.dateOfBirth.value)
        : new Date(),
      cpf: target.cpf.value ? target.cpf.value : '',
      email: target.email.value ? target.email.value : '',
      phone: target.phone.value ? target.phone.value : '',
      street: target.street.value ? target.street.value : '',
      numberHouse: target.numberHouse.value ? target.numberHouse.value : '',
      neighborhood: target.neighborhood.value ? target.neighborhood.value : '',
      cep: target.cep.value ? target.cep.value : '',
      city: target.city.value ? target.city.value : '',
      state: target.state.value ? target.state.value : '',
    }

    if (isNew) {
      postNewUser(dataNewUser)
    } else {
      editUser(userDataProps.id, userDataProps)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={isNew ? 'default' : 'ghost'} className="gap-2">
          {isNew ? <Plus size={20} /> : <Edit3 />}
          {isNew ? 'Novo usuário' : 'Editar'}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastre um novo usuário</DialogTitle>
          <DialogDescription>
            O que acha que adicionar mais uma pessoa a nossa listagem? 😉
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handlerForm}>
          <div className="flex flex-row flex-wrap gap-4 py-4">
            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-start justify-center gap-1">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Iury França"
                  className="col-span-3"
                  value={userDataProps?.name}
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <Label htmlFor="affiliation" className="text-right">
                  Afiliação
                </Label>
                <Input
                  id="affiliation"
                  placeholder="Pai do Iury"
                  className="col-span-3"
                  value={userDataProps?.affiliation}
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-start justify-center gap-1">
                <Label htmlFor="dateOfBirth" className="text-right">
                  Data de Nascimento
                </Label>
                <Input
                  id="dateOfBirth"
                  placeholder="xx/xx/xxxx"
                  className="col-span-3"
                  value={
                    userDataProps?.dateOfBirth
                      ? formatShortDate(userDataProps?.dateOfBirth)
                      : ''
                  }
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <Label htmlFor="cpf" className="text-right">
                  CPF
                </Label>
                <Input
                  id="cpf"
                  placeholder="xxx.xxx.xxx-xx"
                  className="col-span-3"
                  value={userDataProps?.cpf}
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-start justify-center gap-1">
                <Label htmlFor="phone" className="text-right">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  placeholder="(xx)xxxxx-xxxx"
                  className="col-span-3"
                  value={userDataProps?.phone}
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="iury@exemple.com"
                  className="col-span-3"
                  value={userDataProps?.email}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 rounded-md border-2 border-slate-300 bg-slate-200 p-3 dark:border-slate-700 dark:bg-slate-800">
              <h1 className="py-2 text-base font-medium leading-tight tracking-tighter">
                Endereço
              </h1>
              <div className="mb-3 flex max-w-[100px] flex-col items-start justify-center gap-1">
                <Label htmlFor="cep" className="text-right">
                  CEP
                </Label>
                <Input
                  id="cep"
                  placeholder="xxxxx-xxx"
                  className="col-span-3"
                  value={userDataProps?.cep}
                />
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-col items-start justify-center gap-1">
                  <Label htmlFor="street" className="text-right">
                    Rua
                  </Label>
                  <Input
                    id="street"
                    placeholder="Rua do Iury"
                    className="col-span-3"
                    value={userDataProps?.street}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                  <Label htmlFor="numberHouse" className="text-right">
                    Número da casa
                  </Label>
                  <Input
                    id="numberHouse"
                    placeholder="xxxx"
                    className="col-span-3"
                    value={userDataProps?.numberHouse}
                  />
                </div>
              </div>
              <div className="mb-3 flex flex-row gap-4">
                <div className="flex flex-col items-start justify-center gap-1">
                  <Label htmlFor="neighborhood" className="text-right">
                    Bairro
                  </Label>
                  <Input
                    id="neighborhood"
                    placeholder="Bairro do Iury"
                    className="col-span-3"
                    value={userDataProps?.neighborhood}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-col items-start justify-center gap-1">
                  <Label htmlFor="city" className="text-right">
                    Cidade
                  </Label>
                  <Input
                    id="city"
                    placeholder="Ji-Paraná"
                    className="col-span-3"
                    value={userDataProps?.city}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                  <Label htmlFor="state" className="text-right">
                    Estado
                  </Label>
                  <Input
                    id="state"
                    placeholder="Rondonia"
                    className="col-span-3"
                    value={userDataProps?.state}
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Cadastrar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
