"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

export default function EditCustomersPage() {
  const { id } = useParams();

  const [fullName, setFullName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const editCustomer = async () => {
    const body = { fullName, cpf, phone, email };
    console.log(body);
    
    const response = await fetch(`http://localhost:3000/customers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    redirect("/customers")
  };

  useEffect(() => {
    async function loadCustomer() {
      const response = await fetch(`http://localhost:3000/customers/${id}`);

      const data: any = await response.json();
      console.log({data});
      
      setFullName(data.fullName)
      setCpf(data.cpf)
      setPhone(data.phone)
      setEmail(data.email)
    }
    loadCustomer()
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl flex gap-4 items-center ">
          <Link href="/">
            <IoArrowBackCircle size={32} />
          </Link>
          Editar Cliente
        </h2>
        <div className="flex gap-4">
          <Button asChild variant="secondary">
          <Link href="/customers">
            <MdCancel size={20} />
            Cancelar
          </Link>
          </Button>
          <Button onClick={editCustomer}>
            <FaCheckCircle size={20} />
            Salvar
          </Button>
        </div>
      </div>
      <div className="">
        <form className="">
          <div>
            <Label htmlFor="full-name">Nome Completo</Label>
            <Input
              id="full-name"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              value={cpf}
              onChange={({ target }) => setCpf(target.value)}
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
