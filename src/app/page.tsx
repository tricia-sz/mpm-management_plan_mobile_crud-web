import CustomerCard from "./_components/customer-card";
import PlansCard from "./_components/plans-card";


export default function Home() {
  return (
  <div className="mx-auto">
     <div className="max-w-screen-lg flex justify-around  md:flex-row flex-col py-12 mx-auto">
      <CustomerCard />
      <PlansCard />
     </div>
  </div>
  );
}
