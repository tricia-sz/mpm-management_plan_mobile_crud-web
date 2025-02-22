"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

export default function NewCustomersPage() {
  const [planName, setPlanName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [dataPackage, setDataPackage] = useState<number>(0);
  const [callMinutes, setCallMinutes] = useState<number>(0);

  const createPlan = async () => {
    const body = { planName, price, dataPackage, callMinutes };
    console.log(body);
    
    const response = await fetch("http://localhost:3000/plans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    redirect("/plans")
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl flex gap-4 items-center ">
          <Link href="/">
            <IoArrowBackCircle size={32} />
          </Link>
          Criar novo Plano
        </h2>
        <div className="flex gap-4">
          <Button asChild variant="secondary">
          <Link href="/plans">
            <MdCancel size={20} />
            Cancelar
          </Link>
          </Button>
          <Button onClick={createPlan}>
            <FaCheckCircle size={20} />
            Salvar
          </Button>
        </div>
      </div>
      <div className="">
        <form className="">
          <div>
            <Label htmlFor="planName">Nome do Plano</Label>
            <Input
              id="plan-name"
              value={planName}
              onChange={({ target }) => setPlanName(target.value)}
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="price">Preço</Label>
            <Input
              id="price"
              value={price}
              onChange={({ target }) => setPrice(+target.value)}
              type="number"
            />
          </div>
          <div>
            <Label htmlFor="dataPackage">Franquia de dados</Label>
            <Input
              id="data-package"
              value={dataPackage}
              onChange={({ target }) => setDataPackage(+target.value)}
              type="number"
            />
          </div>
          <div>
            <Label htmlFor="callMinutes">Minutos de ligação</Label>
            <Input
              id="call-minutes"
              value={callMinutes}
              onChange={({ target }) => setCallMinutes(+target.value)}
              type="number"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
