"use server";

import conn from "@/lib/mysql";

type FindSiswaResult = {
  success: boolean;
  user: string;
};

export async function findSiswa(formData: FormData): Promise<FindSiswaResult> {
  const email = formData.get("email");
  const password = formData.get("password");

  return new Promise<FindSiswaResult>(async (resolve, reject) => {
    try {
      conn.query(
        `SELECT * FROM tb_siswa WHERE email = '${email}' AND password = '${password}'`,
        (err, results) => {
          if (err) {
            console.error("Error querying data:", err);
            reject({ success: false });
          }

          const data = JSON.stringify(results);
          const result = JSON.parse(data);

          if (result.length === 1) {
            resolve({ success: true, user: result[0].nama_lengkap });
          }
        }
      );
    } catch (error) {
      console.error("Error creating siswa:", error);
      reject({ success: false });
    }
  });
}
