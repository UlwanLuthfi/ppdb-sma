"use server";

import conn from "@/lib/mysql";

export async function inputNilai(formData: FormData) {
  const input = {
    semester1: [
      Number(formData.get("pai-1")),
      Number(formData.get("pkn-1")),
      Number(formData.get("bindo-1")),
      Number(formData.get("mtk-1")),
      Number(formData.get("ipa-1")),
      Number(formData.get("ips-1")),
      Number(formData.get("bing-1")),
    ],
    semester2: [
      Number(formData.get("pai-2")),
      Number(formData.get("pkn-2")),
      Number(formData.get("bindo-2")),
      Number(formData.get("mtk-2")),
      Number(formData.get("ipa-2")),
      Number(formData.get("ips-2")),
      Number(formData.get("bing-2")),
    ],
    semester3: [
      Number(formData.get("pai-3")),
      Number(formData.get("pkn-3")),
      Number(formData.get("bindo-3")),
      Number(formData.get("mtk-3")),
      Number(formData.get("ipa-3")),
      Number(formData.get("ips-3")),
      Number(formData.get("bing-3")),
    ],
    semester4: [
      Number(formData.get("pai-4")),
      Number(formData.get("pkn-4")),
      Number(formData.get("bindo-4")),
      Number(formData.get("mtk-4")),
      Number(formData.get("ipa-4")),
      Number(formData.get("ips-4")),
      Number(formData.get("bing-4")),
    ],
    semester5: [
      Number(formData.get("pai-5")),
      Number(formData.get("pkn-5")),
      Number(formData.get("bindo-5")),
      Number(formData.get("mtk-5")),
      Number(formData.get("ipa-5")),
      Number(formData.get("ips-5")),
      Number(formData.get("bing-5")),
    ],
  };

  const nilai = [
    input.semester1,
    input.semester2,
    input.semester3,
    input.semester4,
    input.semester5,
  ];

  const total = [];

  for (let i = 0; i < nilai.length; i++) {
    total.push(nilai[i].reduce((acc, cur) => acc + cur));
  }

  const totalNilai = total.reduce((acc, cur) => acc + cur);

  const semester_1 = JSON.stringify(input.semester1);
  const semester_2 = JSON.stringify(input.semester2);
  const semester_3 = JSON.stringify(input.semester3);
  const semester_4 = JSON.stringify(input.semester4);
  const semester_5 = JSON.stringify(input.semester5);

  return new Promise(async (resolve, reject) => {
    try {
      conn.query(
        `INSERT INTO tb_nilai VALUES (NULL, 4, '${semester_1}', '${semester_2}', '${semester_3}', '${semester_4}', '${semester_5}', ${totalNilai})`,
        (err, results) => {
          if (err) {
            console.error("Error inserting data:", err);
            reject(false);
          } else {
            resolve(true);
          }
        }
      );
    } catch (error) {
      console.error("Error creating siswa:", error);
      reject(false);
    }
  });
}
