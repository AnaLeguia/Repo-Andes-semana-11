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
}
  