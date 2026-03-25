import {Navbar} from "./navbar/components/navbar"
import { Hero } from "./Hero/components/Hero";
import {CategoryCards} from "./Cards_section/components/Category_Cards"


export default function Home() {
  return (
   <main className="flex min-h-screen">
      <Navbar />
      <div className="flex-1 ml-60">
        <Hero />
        <CategoryCards />
      </div>
      
    </main>
  );
}
