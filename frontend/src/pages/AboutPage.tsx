import { Container } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="about aboutPage py-5">
      <Container className="text-center fluid" style={{ maxWidth: "80%" }}>
        <h1 style={{ fontWeight: "600" }}>About</h1>
        <br />
        <p>
          Recis Eternal adalah susunan acara perlombaan dan pentas seni (pensi)
          yang diselenggarakan oleh SMA Regina Pacis Bogor pada tahun 2023.
          Pelaksanaan pensi merupakan suatu tradisi yang telah dilakukan setiap
          tahunnya oleh SMA Regina Pacis. Tetapi dari beberapa tahun terakhir,
          pelaksanaan pensi terpaksa tidak terjalankan karena adanya kendala
          pandemi Covid-19. Setelah tiga tahun tidak diadakan, akhirnya pensi
          hadir kembali sebagai Recis Eternal. Pelaksanaan Pensi akan didahului
          oleh adanya pelaksanaan lomba Eternal Cup yang dilaksanakan pada
          tanggal 24 Oktober sampai 3 November 2023. Pada tanggal 18 November
          2023, akan terlaksanakan Closing Ceremony yang dilaksanakan di Sekolah
          Regina Pacis sebagai finalisasi acara dan pertunjukan pensi.
        </p>
      </Container>
    </div>
  );
};

export default AboutPage;
