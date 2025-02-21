import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PlansCard() {
  return (
    <Link
    href="/plans"
    className="">
    <Card
      className="md:max-w-xs bg-slate-200 flex flex-col justify-center items-center m-4 p-4 w-full"
    >
      <CardHeader>
        <CardTitle className="text-4xl">Planos</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl">Gerenciar Planos</p>
      </CardContent>
    </Card>
  </Link>
  );
}
