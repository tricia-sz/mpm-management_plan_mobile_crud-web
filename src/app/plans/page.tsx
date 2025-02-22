'use client'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import Link from "next/link";

type PlanType = {
  id: string,
  planName: string,
  price: string,
  dataPackage: number,
  callMinutes: number
}

export default function PlansPage() {
  const [plans, setPlans] = useState<PlanType[]>([]);


  async function deletePlans(id: string) {
    await fetch(`http://localhost:3000/plans/${id}`, {
      method: "DELETE"
    });

    fetchCustomers();
  }

  async function fetchCustomers() {
    const response = await fetch("http://localhost:3000/plans" ); 
    const data = await response.json();
    console.log(data);
    
    setPlans(data);
  }

  useEffect(() => {
    fetchCustomers();
  }, []);


  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl flex gap-4 items-center">
          <Link href="/"><IoArrowBackCircle size={32}/></Link>
          Planos
        </h2>
        <Button asChild>
          <Link href="/plans/novo">
            <FaPlus size={20} />
            Novo
          </Link>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Nome</th>
              <th className="py-3 px-6 text-left">Preço</th>
              <th className="py-3 px-6 text-left">Franquias de dados (GB)</th>
              <th className="py-3 px-6 text-left">Minutos por ligação</th>
              <th className="py-3 px-6 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {plans.map((plan) => (
              <tr key={plan.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{plan.planName}</td>
                <td className="py-3 px-6 text-left">{plan.price}</td>
                <td className="py-3 px-6 text-left">{plan.callMinutes}</td>
                <td className="py-3 px-6 text-left">{plan.dataPackage}</td>
                <td className="py-3 px-6 text-center flex justify-center gap-2">
                  <Button variant="outline" size="icon"><FaEdit /></Button>
                  <Button variant="destructive" size="icon"onClick={() => deletePlans(plan.id)} ><FaTrash /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
