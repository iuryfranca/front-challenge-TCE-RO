'use client'

import { useUserContext } from '@/core/contexts/user-context'
import { useToast } from '@/hooks/use-toast'
import { Plus } from 'lucide-react'

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
import { ToastAction } from './ui/toast'

export function DialogNewUser() {
  const { postNewUser } = useUserContext()
  const handlerFormLogin = (e: React.SyntheticEvent) => {
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

    postNewUser(dataNewUser)
  }

  const { toast } = useToast()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <Plus size={20} />
          Novo usuário
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastre um novo usuário</DialogTitle>
          <DialogDescription>
            O que acha que adicionar mais uma pessoa a nossa listagem? 😉
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handlerFormLogin}>
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
