import {Navbar} from "./navbar/components/navbar"
import { Hero } from "./Hero/components/Hero";
import {CategoryCards} from "./Cards_section/components/Category_Cards"
import { FeaturedProducts } from "./products/components/Products";
import { Brands } from "./brands/components/Brands";
import { Footer } from "./footer/components/Footer";


export default function Home() {
  return (
   <main className="flex min-h-screen">
      <Navbar />
      <div className="flex-1 lg:ml-[210px] lg:mt-0 overflow-hidden">
        <Hero />
        <CategoryCards />
        <FeaturedProducts />
        <Brands />
        <Footer />
      </div>
      
    </main>
  );
}
