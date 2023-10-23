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
            (08.00 - 17.00)
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SchedulePage;
