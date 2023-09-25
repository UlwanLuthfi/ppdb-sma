"use client";

import { findSiswa } from "@/lib/actions/login.action";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/authStore";

export default function ModalLogin() {
  const { login } = useAuthStore();
  const router = useRouter();

  const onSubmitHandler = async (formData: FormData) => {
    const result = await findSiswa(formData);

    if (result.success) {
      login({ username: result.user });

      router.push("/dashboard");
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary fw-semibold"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Login
      </button>

      <form action={onSubmitHandler}>
        <div
          className="modal fade"
          id="loginModal"
          tabIndex={-1}
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5 text-center fw-semibold"
                  id="loginModalLabel"
                >
                  Login
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="col-form-label fw-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>

                <p className="m-0">
                  Belum punya akun?{" "}
                  <span
                    className="text-primary text-decoration-underline"
                    role="button"
                  >
                    Daftar
                  </span>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary w-full fw-semibold w-100"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
