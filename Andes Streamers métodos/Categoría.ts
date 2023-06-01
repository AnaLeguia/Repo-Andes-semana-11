class Categoria {
    private nombre: string;
    private descripcion: string;
    private imagen: string;
  
    constructor(nombre: string, descripcion: string, imagen: string) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagen = imagen;
    }
  
    public agregarNombre(nombre: string): void {
      this.nombre = nombre;
    }
  
    public agregarDescripcion(descripcion: string): void {
      this.descripcion = descripcion;
    }
  
    public agregarImagen(imagen: string): void {
      this.imagen = imagen;
    }
}