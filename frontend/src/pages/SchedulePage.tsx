import { Container } from "react-bootstrap";

const SchedulePage = () => {
  return (
    <div className="schedule schedulePage">
      <Container className="pb-5">
        <h1
          className="text-center mb-3"
          style={{ fontWeight: "600" }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Schedule
        </h1>
        <br />
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
          id="aboutP"
        >
          <h3>Opening</h3>
          <p>
            23 Oktober 2023 - Aula SMA <br />
            (09.00 - 13.30)
          </p>
          <h3>Recup</h3>
          <p>
            MEDOR <br />
            24 Oktober - 1 November <br />
            • Basket (24 - 27 Oktober, 30 - 31 Oktober) <br />
            • Voli Putri (24 - 26 Oktober) <br />• Futsal Putra (27 - 28
            Oktober, 30-31 Oktober, 1 November) <br />
            <br />
            MEDOS <br />• Fotografi (24 - 28 Oktober pengumpulan melalui google
            form) <br />
            • EDC (26-27 Oktober) <br />
            • Modern Dance (28 Oktober) <br />
            • Band (28 Oktober) <br />
            <br />
            *Jamnya serentak mulai pukul 08.00 - 16.00 <br />
            <br />
            Untuk tempat lombanya : <br />
            1. Basket Putra & Putri (Aula SMA) <br />
            2. Futsal Putra & Voli Putri (Lapangan SD) <br />
            3. MD & Band (Aula SMA) <br />
            4. Fotografi dan EDC (online melalui google form dan zoom)
          </p>
          <h3>Closing</h3>
          <p>
            18 November 2023 di SMA Regina Pacis Bogor <br />
            11.00-12.30 = Open Gate <br />
            11.30-12.30 = Pengumuman Lomba <br />
            12.30-12.45 = Sambutan <br />
            12.45-13.00 = Performance Band <br />
            13.00-13.15 = Door Prize Sesi 1 <br />
            13.15-13.30 = Performance Band <br />
            13.30-13.45 = Door Prize Sesi 2 <br />
            13.45-14.00 = Performance Band <br />
            14.00-14.15 = Door Prize Sesi 3 <br />
            14.15-15.00 = Performance <br />
            15.00-15.10 = Break Ashar <br />
            15.10-15.20 = Performance <br />
            15.25-16.25 = HIVI! <br />
            16.25-16.45 = Closing
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SchedulePage;
