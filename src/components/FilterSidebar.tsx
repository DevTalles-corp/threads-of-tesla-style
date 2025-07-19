import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const FilterSidebar = () => {
  const categories = [
    { id: "tshirts", label: "Camisetas", count: 12 },
    { id: "hoodies", label: "Sudaderas", count: 8 },
    { id: "jackets", label: "Chaquetas", count: 6 },
    { id: "accessories", label: "Accesorios", count: 15 },
  ];

  const sizes = [
    { id: "xs", label: "XS" },
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
    { id: "xxl", label: "XXL" },
  ];

  const colors = [
    { id: "black", label: "Negro", color: "bg-black" },
    { id: "white", label: "Blanco", color: "bg-white border" },
    { id: "grey", label: "Gris", color: "bg-gray-400" },
    { id: "navy", label: "Azul Marino", color: "bg-blue-900" },
  ];

  return (
    <div className="w-64 space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4">Filtros</h3>
        <Button variant="outline" size="sm" className="w-full">
          Limpiar Filtros
        </Button>
      </div>

      <Separator />

      {/* Categories */}
      <div className="space-y-4">
        <h4 className="font-medium">Categorías</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id={category.id} />
                <label
                  htmlFor={category.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {category.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Sizes */}
      <div className="space-y-4">
        <h4 className="font-medium">Tallas</h4>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <Button
              key={size.id}
              variant="outline"
              size="sm"
              className="h-8"
            >
              {size.label}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Colors */}
      <div className="space-y-4">
        <h4 className="font-medium">Colores</h4>
        <div className="space-y-3">
          {colors.map((color) => (
            <div key={color.id} className="flex items-center space-x-3">
              <div className={`w-5 h-5 rounded-full ${color.color}`} />
              <label className="text-sm font-medium cursor-pointer">
                {color.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="font-medium">Precio</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="price1" />
            <label htmlFor="price1" className="text-sm">$0 - $50</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="price2" />
            <label htmlFor="price2" className="text-sm">$50 - $100</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="price3" />
            <label htmlFor="price3" className="text-sm">$100 - $200</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="price4" />
            <label htmlFor="price4" className="text-sm">$200+</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;