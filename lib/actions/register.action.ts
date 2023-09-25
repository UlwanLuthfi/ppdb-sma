"use server";

import conn from "@/lib/mysql";

type CreateSiswaResult = {
  success: boolean;
  user: any;
};

export async function createSiswa(
  formData: FormData
): Promise<CreateSiswaResult> {
  const nik = formData.get("nik");
  const nisn = formData.get("nisn");
  const nama = formData.get("nama");
  const asalSekolah = formData.get("asalSekolah");
  const jurusan = formData.get("jurusan");
  const email = formData.get("email");
  const password = formData.get("password");
  const tanggalDaftar = new Date().toISOString().split("T")[0];

  return new Promise<CreateSiswaResult>(async (resolve, reject) => {
    try {
      conn.query(
        `INSERT INTO tb_siswa VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [nik, nisn, nama, asalSekolah, jurusan, email, password, tanggalDaftar],
        (err, results) => {
          if (err) {
            console.error("Error inserting data:", err);
            reject({ success: false });
          }

          const data = JSON.stringify(results);
          const result = JSON.parse(data);
          if (result.affectedRows === 1) {
            resolve({ success: true, user: nama?.toString() });
          }

          console.log(result);
        }
      );
    } catch (error) {
      console.error("Error creating siswa:", error);
      reject({ success: false });
    }
  });
}
