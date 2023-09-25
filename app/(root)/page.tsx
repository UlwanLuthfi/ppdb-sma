/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <>
      <section className="my-5">
        <div className="container sm-center">
          <h1 className="fw-bold">
            <span className="text-primary">PPDB SMA</span> ONLINE 2023
          </h1>
          <p className="fw-semibold">
            Pendaftaran 24 Agustus - 20 Oktober 2023
          </p>
          <p className="w-75 sm-text-center">
            Pendaftaran adalah proses memasukan data dan memilih jurusan yang
            ingin dituju oleh calon peserta didik, selama kesempatan peserta
            didik masih tersedia.
          </p>
        </div>
      </section>

      <section className="bg-body-tertiary py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold">Statistik Pendaftaran PPDB</h3>
            <p className="fw-medium">
              Informasi Jumlah Pendaftar PPDB Tahun Ajaran 2023/2024
            </p>
          </div>

          <div className="d-flex gap-5 justify-content-center sm-flex-col">
            <div className="card col-md-3 shadow-sm py-2">
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold mb-4">
                  Pendaftaran Hari Ini
                </h5>
                <h5 className="card-subtitle fw-bold text-primary">12</h5>
              </div>
            </div>

            <div className="card col-md-3 shadow-sm py-2">
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold mb-4">
                  Total Pendaftaran
                </h5>
                <h5 className="card-subtitle fw-bold text-primary">132</h5>
              </div>
            </div>

            <div className="card col-md-3 shadow-sm py-2">
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold mb-4">
                  Total Daya Tampung
                </h5>
                <h5 className="card-subtitle fw-bold text-primary">270</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
