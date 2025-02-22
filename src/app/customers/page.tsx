'use client'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";

type CustomerType = {
  id: string,
  fullName: string,
  cpf: string,
  email: string,
  phone: string
}

export default function CustomersPage() {
  const router = useRouter();

  const [customers, setCustomers] = useState<CustomerType[]>([]);

  async function deleteCustomer(id: string) {
    await fetch(`http://localhost:3000/customers/${id}`, {
      method: "DELETE"
    });

    fetchCustomers();
  }

  async function fetchCustomers() {
    const response = await fetch("http://localhost:3000/customers" ); 
    const data = await response.json();
    console.log(data);
    
    setCustomers(data);
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl flex gap-4 items-center">
        <Link href="/"><IoArrowBackCircle size={32}/></Link>

          Clientes
          </h2>
        <Button asChild>
          <Link href="/customers/novo">
           <FaPlus size={20} /> Novo
          </Link>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Nome</th>
              <th className="py-3 px-6 text-left">CPF</th>
              <th className="py-3 px-6 text-left">Telefone</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{customer.fullName}</td>
                <td className="py-3 px-6 text-left">{customer.cpf}</td>
                <td className="py-3 px-6 text-left">{customer.phone}</td>
                <td className="py-3 px-6 text-left">{customer.email}</td>
                <td className="py-3 px-6 text-center flex justify-center gap-2">
                  <Button variant="outline" size="icon" onClick={() => router.push(`/customers/${customer.id}/editar`)}>
                    <FaEdit />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => deleteCustomer(customer.id)}><FaTrash /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
