import { UserProps, useUserContext } from '@/core/contexts/user-context'
import { Edit3, Trash2 } from 'lucide-react'

import { formatLongDate } from '@/lib/utils'
import { DialogNewUser } from './dialog-new-user'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

const CardUser = ({ user }: { user: UserProps }) => {
  const { deleteUser, editUser } = useUserContext()
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="mt-2 rounded-t-md p-2 transition-all data-[state=open]:bg-slate-100 data-[state=open]:dark:bg-slate-800">
            <div
              className="relative mb-2 mt-1 grid h-28 w-full grid-cols-[112px_1fr] items-center justify-between overflow-hidden text-center transition-all hover:cursor-default"
              key={user.id}
              tabIndex={1}
            >
              <div className="flex h-full w-[112px] items-center justify-center rounded-lg border-2 border-slate-200 bg-white dark:border-slate-300"></div>
              <div className="grid h-full grid-cols-4 gap-4 px-2">
                <div className="flex flex-col items-start justify-between">
                  <div className="flex w-full flex-col items-start">
                    <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                      Nome
                      <Separator />
                    </span>
                    <span className="text-start text-base font-semibold md:text-xl">
                      {user.name}
                    </span>
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                      Afiliação
                      <Separator />
                    </span>
                    <span className="text-start text-sm font-semibold">
                      {user.affiliation}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-between">
                  <div className="flex w-full flex-col items-start">
                    <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                      CPF
                      <Separator />
                    </span>
                    <span className="text-start text-base font-semibold">
                      {user.cpf}
                    </span>
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                      Telefone
                      <Separator />
                    </span>
                    <span className="text-start text-sm font-semibold">
                      {user.phone}
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-2">
                  <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                    Status
                    <Separator />
                  </span>
                  <span className="text-start text-sm font-semibold">
                    {user.status === 'ACTIVATE' ? (
                      <span className="rounded-lg border-2 border-green-500 bg-green-300 p-1 dark:bg-green-600">
                        Ativo
                      </span>
                    ) : (
                      <span className="rounded-lg border-2 border-red-500 bg-red-300 p-1">
                        Não ativo
                      </span>
                    )}
                  </span>
                </div>
                <div className="flex w-full flex-col items-end">
                  <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                    Data de Nascimento
                    <Separator />
                  </span>
                  <span className="text-start text-sm font-semibold">
                    {formatLongDate(user?.dateOfBirth)}
                  </span>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mb-2 rounded-b-md p-2 data-[state=open]:bg-slate-100 data-[state=open]:dark:bg-slate-800">
            <div className="mt-5 grid h-full grid-cols-[250px_150px_1fr] px-2">
              <div className="flex flex-col items-start justify-between gap-2">
                <div className="flex w-full flex-col items-start">
                  <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                    CEP
                    <Separator />
                  </span>
                  <span className="text-start text-sm font-medium">
                    {user.cep}
                  </span>
                </div>
                <div className="flex w-full flex-col items-start">
                  <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                    Rua
                    <Separator />
                  </span>
                  <span className="text-start text-sm font-medium">
                    {user.street}
                  </span>
                </div>
                <div className="flex w-full flex-col items-start">
                  <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                    Número da casa
                    <Separator />
                  </span>
                  <span className="text-start text-sm font-medium">
                    {user.numberHouse}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="flex w-full flex-col items-start">
                  <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                    Cidade
                    <Separator />
                  </span>
                  <span className="text-start text-sm font-medium">
                    {user.city}
                  </span>
                </div>
                <div className="flex w-full flex-col items-start">
                  <span className="text-start text-xs text-slate-500 dark:text-slate-400">
                    Estado
                    <Separator />
                  </span>
                  <span className="text-start text-sm font-medium">
                    {user.state}
                  </span>
                </div>
              </div>
              <div className="flex justify-end p-2">
                <div className="flex justify-end rounded-md border-2 border-slate-300 bg-slate-200 p-3 dark:border-slate-600 dark:bg-slate-700">
                  <div className="flex flex-col justify-between">
                    <div>
                      <DialogNewUser isNew={false} userDataProps={user} />
                    </div>
                    <div>
                      <Button
                        variant="ghost"
                        onClick={() => deleteUser(user.id)}
                      >
                        <Trash2 size={18} />{' '}
                        <span className="ml-2">Remover</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default CardUser
