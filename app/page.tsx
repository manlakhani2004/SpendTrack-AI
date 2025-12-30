import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default  async function Home() {
  const user = await currentUser();
  if(!user)
  {
   return <Guest/>
  }
  return (
    <div  >
      Hello jee
    </div>
  );
}
