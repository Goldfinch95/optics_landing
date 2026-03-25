import {Navbar} from "./navbar/components/navbar"
import { Hero } from "./Hero/components/Hero";


export default function Home() {
  return (
   <main className="flex min-h-screen">
      <Navbar />
      <div className="flex-1 ml-60">
        <Hero />
      </div>
    </main>
  );
}
