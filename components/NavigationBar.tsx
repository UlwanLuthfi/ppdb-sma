"use client";
import { useEffect } from "react";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useAuthStore } from "@/lib/authStore";

export default function NavigationBar() {
  const { user } = useAuthStore();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white border border-bottom">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          PPDB SMA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {user ? (
              <li className="nav-item mx-1">
                <LogoutButton />
              </li>
            ) : (
              <>
                <li className="nav-item mx-1">
                  <ModalRegister />
                </li>

                <li className="nav-item mx-1">
                  <ModalLogin />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
