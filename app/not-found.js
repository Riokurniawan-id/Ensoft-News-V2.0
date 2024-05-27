import Link from "next/link";

export default function NotFound() {
  return (
    <div class="grid h-4/5 place-content-center bg-white px-4">
      <div class="text-center">
        <h1 class="text-9xl font-black text-gray-200">404</h1>

        <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Njir!
        </p>

        <p class="mt-4 text-gray-500">Halaman Tidak Ditemukan 😅.</p>

        <a
          href="/"
          class="mt-6 inline-block rounded bg-sky-500 px-5 py-3 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring"
        >
          Kembali Ke Home
        </a>
      </div>
    </div>
  );
}
