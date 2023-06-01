class Plataforma {
    private nombre: string;
    private logo: string;
    private descripcion: string;
    private empresa: string;
    private canales: Canal[];
  
    constructor(nombre: string, logo: string, descripcion: string, empresa: string) {
      this.nombre = nombre;
      this.logo = logo;
      this.descripcion = descripcion;
      this.empresa = empresa;
      this.canales = [];
    }
  
    public agregarCanal(canal: Canal): void {
      this.canales.push(canal);
    }
  
    public mostrarDetalle(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Logo: ${this.logo}`);
      console.log(`Descripción: ${this.descripcion}`);
      console.log(`Empresa: ${this.empresa}`);
      console.log("Canales:");
      for (const canal of this.canales) {
        console.log(`- Nombre: ${canal.getNombre()}`);
        console.log(`  Banner: ${canal.getBanner()}`);
        console.log(`  Streamer: ${canal.getStreamer()}`);
        console.log(`  Descripción: ${canal.getDescripcion()}`);
      }
    }
  
    public mostrarListaPlataformas(plataformas: Plataforma[]): void {
      console.log("Lista de Plataformas:");
      for (const plataforma of plataformas) {
        console.log(`- Nombre: ${plataforma.getNombre()}`);
        console.log(`  Descripción: ${plataforma.getDescripcion()}`);
        console.log(`  Empresa: ${plataforma.getEmpresa()}`);
      }
    }
}