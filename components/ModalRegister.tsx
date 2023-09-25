import { createSiswa } from "@/lib/actions/register.action";
import { useAuthStore } from "@/lib/authStore";
import { useRouter } from "next/navigation";

export default function ModalRegister() {
  const { login } = useAuthStore();
  const router = useRouter();

  const onSubmitHandler = async (formData: FormData) => {
    const result = await createSiswa(formData);

    if (result.success) {
      login({ username: result.user });

      router.push("/dashboard");
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary fw-semibold"
        data-bs-toggle="modal"
        data-bs-target="#daftarModal"
      >
        Daftar
      </button>

      <form action={onSubmitHandler}>
        <div
          className="modal fade"
          id="daftarModal"
          tabIndex={-1}
          aria-labelledby="daftarModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5 fw-semibold"
                  id="daftarModalLabel"
                >
                  Daftar Dulu
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-between mb-3">
                  <div className="col-md-5">
                    <label htmlFor="nik" className="col-form-label fw-semibold">
                      NIK
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nik"
                      name="nik"
                      required
                    />
                  </div>
                  <div className="col-md-5">
                    <label
                      htmlFor="nisn"
                      className="col-form-label fw-semibold"
                    >
                      NISN
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nisn"
                      name="nisn"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="nama" className="col-form-label fw-semibold">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nama"
                    name="nama"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="asalSekolah"
                    className="col-form-label fw-semibold"
                  >
                    Asal Sekolah
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="asalSekolah"
                    name="asalSekolah"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="inputJurusanDaftar"
                    className="col-form-label fw-semibold"
                  >
                    Jurusan
                  </label>
                  <select
                    required
                    className="form-select mb-3"
                    aria-label="Default select example"
                    id="inputJurusanDaftar"
                    name="jurusan"
                    defaultValue="0"
                  >
                    <option value="0">Pilih Jurusan</option>
                    <option value="IPA">IPA</option>
                    <option value="IPS">IPS</option>
                    <option value="BAHASA">BAHASA</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="inputEmail"
                    className="col-form-label fw-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmailinputPassword"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="inputPassword"
                    className="col-form-label fw-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    name="password"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary w-100 fw-semibold"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
