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

  const [name, setName] = useState<string>()
  const [affiliation, setAffiliation] = useState<string>()
  const [dateOfBirth, setDateOfBirth] = useState<string>()
  const [cpf, setCpf] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [phone, setPhone] = useState<string>()
  const [street, setStreet] = useState<string>()
  const [numberHouse, setNumberHouse] = useState<string>()
  const [neighborhood, setNeighborhood] = useState<string>()
  const [cep, setCep] = useState<string>()
  const [city, setCity] = useState<string>()
  const [state, setState] = useState<string>()

  const inicializanteForm = () => {
    setName(userDataProps.name)
    setAffiliation(userDataProps.affiliation)
    setDateOfBirth(formatShortDate(userDataProps.dateOfBirth))
    setCpf(userDataProps.cpf)
    setEmail(userDataProps.email)
    setPhone(userDataProps.phone)
    setStreet(userDataProps.street)
    setNumberHouse(userDataProps.numberHouse)
    setNeighborhood(userDataProps.neighborhood)
    setCep(userDataProps.cep)
    setCity(userDataProps.city)
    setState(userDataProps.state)
  }

  const handlerForm = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const dataNewUser = {
      name: name ? name : '',
      affiliation: affiliation ? affiliation : '',
      dateOfBirth: new Date(dateOfBirth) ? new Date(dateOfBirth) : new Date(),
      cpf: cpf ? cpf : '',
      email: email ? email : '',
      phone: phone ? phone : '',
      street: street ? street : '',
      numberHouse: numberHouse ? numberHouse : '',
      neighborhood: neighborhood ? neighborhood : '',
      cep: cep ? cep : '',
      city: city ? city : '',
      state: state ? state : '',
    }

    console.log(dataNewUser)

    if (isNew) {
      postNewUser(dataNewUser)
    } else {
      editUser(userDataProps.id, dataNewUser)
    }
  }

  useEffect(() => {
    if (userDataProps) {
      inicializanteForm()
    }
  }, [])

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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={affiliation}
                  onChange={(e) => setAffiliation(e.target.value)}
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
                  value={dateOfBirth ? formatShortDate(dateOfBirth) : ''}
                  onChange={(e) => setDateOfBirth(e.target.value)}
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
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
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
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
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
                    value={numberHouse}
                    onChange={(e) => setNumberHouse(e.target.value)}
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
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              {isNew ? 'Cadastrar' : 'Editar Cadastro'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
