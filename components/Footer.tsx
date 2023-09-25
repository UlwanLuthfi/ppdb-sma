import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark py-4 mt-auto">
      <div className="text-center">
        <h5 className="text-white fw-semibold">PPDB SMA ONLINE 2023</h5>
        <p className="text-white fw-semibold m-0 mx-3">
          Tugas Membuat Aplikasi PPDB ONLINE - {""}
          <Link href="/" className="text-primary">
            Ulwan Lutfhi
          </Link>
        </p>
      </div>
    </footer>
  );
}
