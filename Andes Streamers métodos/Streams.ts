class Streams {
    private categorias: Categoria[];
    private descripcion: string;
  
    constructor(categorias: Categoria[], descripcion: string) {
      this.categorias = categorias;
      this.descripcion = descripcion;
    }
  
    public mostrarListaStreams(): void {
      console.log("Lista de Streams:");
      for (const categoria of this.categorias) {
        console.log(`- Categoría: ${categoria.getNombre()}`);
        console.log(`  Descripción: ${categoria.getDescripcion()}`);
        console.log(`  Imagen: ${categoria.getImagen()}`);
      }
    }
  
    public mostrarDetalle(): void {
      console.log(`Descripción: ${this.descripcion}`);
      console.log("Categorías:");
      for (const categoria of this.categorias) {
        console.log(`- Categoría: ${categoria.getNombre()}`);
        console.log(`  Descripción: ${categoria.getDescripcion()}`);
        console.log(`  Imagen: ${categoria.getImagen()}`);
      }
    }
  
    public agregarStream(categoria: Categoria): void {
      this.categorias.push(categoria);
    }
}
  