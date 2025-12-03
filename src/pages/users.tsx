import { LoadingSpinner } from "@/components/loading-spinner"
import { TableData } from "@/components/table-data"
import { useGetAllUsers } from "@/services/users/hooks"
import type { ColumnDef } from "@tanstack/react-table"

interface User {
  id: number;
  name: string;
  pictureProfile: string;
  origin: string;
}

export function UsersPage() {
  const { data, isLoading } = useGetAllUsers()

  const columns: ColumnDef<User>[] = [
    {
      header: "ID",
      accessorKey: "id",
      enableHiding: true,
      enableSorting: true,
      cell: info => info.getValue()
    },
    {
      header: "Nome",
      accessorKey: "name",
      enableHiding: true,
      enableSorting: true,
      cell: info => info.getValue()
    },
    {
      accessorKey: "pictureProfile",
      header: "Foto de Perfil",
      enableHiding: true,
      enableSorting: true,
      cell: info => info.getValue()
    },
    {
      accessorKey: "origin",
      header: "Origem",
      enableHiding: true,
      enableSorting: true,
      cell: info => info.getValue()
    },
  ]
  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <>
      <header>
        <h1 className="text-2xl font-bold">Users</h1>
        <span className="text-muted-foreground text-sm">See here all users</span>
      </header>

      <TableData data={[]} columns={columns} isLoading={isLoading} />
    </>

  )

}