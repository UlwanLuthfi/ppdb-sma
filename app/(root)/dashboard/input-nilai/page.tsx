"use client";

import { inputs } from "@/constants";
import { inputNilai } from "@/lib/actions/nilai.action";
import { useAuthStore } from "@/lib/authStore";
import { redirect } from "next/navigation";

export default function Page() {
  const { user } = useAuthStore();

  if (!user) redirect("/");

  const onSubmitHandler = async (formData: FormData) => {
    inputNilai(formData);
  };

  return (
    <section className="my-5">
      <div className="container sm-center">
        <div className="d-flex justify-content-between">
          <h4 className="fw-bold">
            Haloo 👋{" "}
            <span className="text-primary">
              {user.username || "Muhammad Ulwan Luthfi Jawad"}
            </span>
          </h4>

          <div>
            <button type="button" className="btn btn-primary fw-semibold">
              Upload Rapot
            </button>
          </div>
        </div>

        <form action={onSubmitHandler}>
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Semester</th>
                <th scope="col">PAI</th>
                <th scope="col">PKN</th>
                <th scope="col">Bahasa Indonesia</th>
                <th scope="col">Matematika</th>
                <th scope="col">IPA</th>
                <th scope="col">IPS</th>
                <th scope="col">Bahasa Inggris</th>
              </tr>
            </thead>
            <tbody>
              {inputs.map((input) => {
                return (
                  <tr key={input.semester}>
                    <th scope="row">{input.semester}</th>
                    <td>
                      <input
                        type="text"
                        className="form-control w-50 text-center mx-auto"
                        name={input.pai}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control w-50 text-center mx-auto"
                        name={input.pkn}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control w-50 text-center mx-auto"
                        name={input.bindo}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control w-50 text-center mx-auto"
                        name={input.mtk}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control w-50 text-center mx-auto"
                        name={input.ipa}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control w-50 text-center mx-auto"
                        name={input.ips}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control w-50 text-center mx-auto"
                        name={input.bing}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
