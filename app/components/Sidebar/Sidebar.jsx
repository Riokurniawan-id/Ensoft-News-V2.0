"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Profile from "@/app/components/Sidebar/logo-strapi.jpg";
import Image from "next/image";

function Sidebar({ otomaticCloseSidebar }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white w-full">
      <div className="px-1 py-6">
        <div className="flex justify-center items-center h-24 w-full">
          <Image
            src={Profile}
            alt="Picture of the author"
            className="h-24 w-24 rounded-lg"
          />
        </div>

        <ul className="mt-6 space-y-1">
          <li>
            <Link href="/">
              <p
                href=""
                className={`block rounded-lg hover:bg-gray-100 px-4 py-2 text-md font-medium text-gray-700 ${
                  pathname === "/" ? "bg-gray-100" : ""
                }`}
                onClick={otomaticCloseSidebar}
              >
                Berita
              </p>
            </Link>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-md font-medium"> Kategori </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    onClick={otomaticCloseSidebar}
                  >
                    Teknologi
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    onClick={otomaticCloseSidebar}
                  >
                    Finance
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link href="/tentang-kami">
              <p
                className={`block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${
                  pathname == "/tentang-kami" ? "bg-gray-100" : ""
                }`}
                onClick={otomaticCloseSidebar}
              >
                Tentang Kami
              </p>
            </Link>
          </li>

          <li>
            <Link href="donasi-ke-kami">
              <p
                className={`block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-100 hover:text-sky-600 ${
                  pathname == "/donasi-ke-kami"
                    ? "bg-gray-100 text-sky-600 "
                    : ""
                }`}
                onClick={otomaticCloseSidebar}
              >
                Donasi Ke Kami
              </p>
            </Link>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-md font-medium"> Account </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    onClick={otomaticCloseSidebar}
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    onClick={otomaticCloseSidebar}
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="/logout">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-red-500"
                      onClick={otomaticCloseSidebar}
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
