"use client";

import { useAuthStore } from "@/lib/authStore";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function Page() {
  const { user } = useAuthStore();

  if (!user) redirect("/");

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
            <Link
              href="/dashboard/input-nilai"
              className="btn btn-primary fw-semibold"
            >
              Input Nilai
            </Link>
          </div>
        </div>

        <hr />

        <div className="d-flex flex-wrap justify-content-between sm-flex-col">
          <div className="card w-auto mb-3 mx-1 border-primary shadow-sm">
            <div className="card-body">
              <p className="card-title fw-semibold">Peringkat</p>
              <p className="card-subtitle">
                <span className="fw-bold text-primary">12</span> dari 70
                Pendaftar
              </p>
            </div>
          </div>

          <div className="card w-auto mb-3 mx-1 border-primary shadow-sm">
            <div className="card-body">
              <p className="card-title fw-semibold">Rata-Rata Nilai</p>
              <p className="card-subtitle fw-bold text-primary">87.5</p>
            </div>
          </div>

          <div className="card w-auto mb-3 mx-1 border-primary shadow-sm">
            <div className="card-body">
              <p className="card-title fw-semibold">Jurusan Yang Dipilih</p>
              <p className="card-subtitle fw-bold text-primary">IPS</p>
            </div>
          </div>

          <div className="card w-auto mb-3 mx-1 border-primary shadow-sm">
            <div className="card-body">
              <p className="card-title fw-semibold">Asal Sekolah</p>
              <p className="card-subtitle fw-bold text-primary">
                MTSN 17 JAKARTA
              </p>
            </div>
          </div>

          <div className="card w-auto mb-3 mx-1 border-primary shadow-sm">
            <div className="card-body">
              <p className="card-title fw-semibold">Hasil Seleksi</p>
              <p className="card-subtitle fw-bold text-primary">Diterima</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
