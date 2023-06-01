class Canal {
    private nombre: string;
    private banner: string;
    private streamer: string;
    private descripcion: string;
  
    constructor(nombre: string, banner: string, streamer: string, descripcion: string) {
      this.nombre = nombre;
      this.banner = banner;
      this.streamer = streamer;
      this.descripcion = descripcion;
    }
  
    public mostrarDetalle(): void {
      console.log(`Nombre del Canal: ${this.nombre}`);
      console.log(`Banner: ${this.banner}`);
      console.log(`Streamer: ${this.streamer}`);
      console.log(`Descripción: ${this.descripcion}`);
    }
  
    public static mostrarListaCanales(canales: Canal[]): void {
      console.log("Lista de Canales:");
      for (const canal of canales) {
        console.log(`- Nombre: ${canal.getNombre()}`);
        console.log(`  Banner: ${canal.getBanner()}`);
        console.log(`  Streamer: ${canal.getStreamer()}`);
        console.log(`  Descripción: ${canal.getDescripcion()}`);
      }
    }
}