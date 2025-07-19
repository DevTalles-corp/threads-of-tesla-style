import { useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";
import { products } from "@/data/products";

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-6">
            Estilo Tesla
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. 
            Calidad premium para un estilo atemporal.
          </p>
          <Button size="lg" className="rounded-full px-8">
            Explorar Colección
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-light">Productos</h2>
              <span className="text-muted-foreground">({products.length} productos)</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              
              <div className="hidden md:flex border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden lg:block">
              <FilterSidebar />
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="fixed inset-0 z-50 bg-background p-4 lg:hidden">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filtros</h3>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    Cerrar
                  </Button>
                </div>
                <FilterSidebar />
              </div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-4"
              }>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 lg:px-8 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">TESLA STYLE</h3>
              <p className="text-sm text-muted-foreground">
                Ropa inspirada en el diseño minimalista y la innovación de Tesla.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Productos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Camisetas</a></li>
                <li><a href="#" className="hover:text-foreground">Sudaderas</a></li>
                <li><a href="#" className="hover:text-foreground">Chaquetas</a></li>
                <li><a href="#" className="hover:text-foreground">Accesorios</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Ayuda</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Contacto</a></li>
                <li><a href="#" className="hover:text-foreground">Envíos</a></li>
                <li><a href="#" className="hover:text-foreground">Devoluciones</a></li>
                <li><a href="#" className="hover:text-foreground">Guía de Tallas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-foreground">Sustentabilidad</a></li>
                <li><a href="#" className="hover:text-foreground">Carreras</a></li>
                <li><a href="#" className="hover:text-foreground">Prensa</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Tesla Style. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
