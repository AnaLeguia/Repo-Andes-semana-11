class Streamers {
    private nickname: string;
    private descripcion: string;
    private redesSociales: string[];
  
    constructor(nickname: string, descripcion: string, redesSociales: string[]) {
      this.nickname = nickname;
      this.descripcion = descripcion;
      this.redesSociales = redesSociales;
    }
  
    public mostrarDetalle(): void {
      console.log(`Nickname: ${this.nickname}`);
      console.log(`Descripción: ${this.descripcion}`);
      console.log("Redes Sociales:");
      for (const redSocial of this.redesSociales) {
        console.log(`- ${redSocial}`);
      }
    }
  
    public static mostrarListado(streamers: Streamers[]): void {
      console.log("Listado de Streamers:");
      for (const streamer of streamers) {
        console.log(`- Nickname: ${streamer.getNickname()}`);
        console.log(`  Descripción: ${streamer.getDescripcion()}`);
        console.log("  Redes Sociales:");
        for (const redSocial of streamer.getRedesSociales()) {
          console.log(`  - ${redSocial}`);
        }
      }
    }
  
    public static agregarStreamers(streamers: Streamers[], streamer: Streamers): void {
      streamers.push(streamer);
    }
  
    public agregarRedSocial(redSocial: string): void {
      this.redesSociales.push(redSocial);
    }
  
    public agregarCanal(canal: Canal): void {
      // Lógica para agregar el canal al streamer
    }
  
    public agregarStream(stream: Stream): void {
      // Lógica para agregar el stream al streamer
    }
}
  