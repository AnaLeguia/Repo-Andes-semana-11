class Stream {
    private categorias: Categoria[];
    private descripcion: string;
  
    constructor(categorias: Categoria[], descripcion: string) {
      this.categorias = categorias;
      this.descripcion = descripcion;
    }
}