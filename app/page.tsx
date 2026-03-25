import {Navbar} from "./navbar/components/navbar"
import { Hero } from "./Hero/components/Hero";
import {CategoryCards} from "./Cards_section/components/Category_Cards"
import { FeaturedProducts } from "./products/components/Products";
import { Brands } from "./brands/components/Brands";


export default function Home() {
  return (
   <main className="flex min-h-screen">
      <Navbar />
      <div className="flex-1 ml-60 overflow-hidden">
        <Hero />
        <CategoryCards />
        <FeaturedProducts />
        <Brands />
      </div>
      
    </main>
  );
}
