"use client";
import React, { useState } from "react";

function NewsCard() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  // Mengambil domain dari URL
  function extractDomainFromUrl() {
    const url =
      "https://kumparan.com/kumparansport/akhiri-penantian-30-tahun-all-indonesian-final-tercipta-di-all-england-22Md05UvIi6";
    const urlParts = url.split("/");
    return urlParts[2];
  }

  const domain = extractDomainFromUrl();

  return (
    <div className="relative h-full snap-center p-2 md:p-12">
      <article className="relative h-full">
        {/* Gambar berita */}
        <img
          alt="Image Berita"
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="m-auto h-2/6 w-full md:h-2/6 object-cover rounded-xl shadow-xl"
        />

        {/* Konten berita */}
        <div className="py-4">
          <h1 className="text-lg font-medium text-gray-900 px-4">
            Finding the Journey to Mordor
          </h1>

          {/* Informasi domain dan kategori */}
          <ul className="flex text-sm gap-5 pl-3 mt-2">
            <span className="rounded-full bg-purple-100 px-4 py-1 text-sm text-purple-700 flex items-center">
              Kategori
            </span>

            <a
              href="URL"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1"
            >
              <li className="gap-1 font-semibold text-slate-500 flex items-center">
                {/* Ikon domain */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
                {domain}
              </li>
            </a>
          </ul>

          {/* Deskripsi berita */}
          <p className="mt-2 text-sm/relaxed text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>

        {/* Tombol interaksi dan link selengkapnya */}
        <div className="flex justify-between items-center mt-5 px-4 absolute mb-2 w-full bg-white rounded-lg p-2 font-medium">
          <div className="flex gap-5 lg:gap-4">
            {/* Tombol Suka */}
            <button
              aria-label="Like"
              className={`flex items-center gap-1 rounded-full bg-white p-2.5 text-gray-600 shadow-sm ${
                liked ? "text-red-500" : "hover:text-gray-700"
              } hover:shadow-lg`}
              onClick={toggleLike}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={liked ? "red" : "none"}
                stroke={liked ? "red" : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <p className="hidden lg:block">Suka</p>
            </button>
            {/* Tombol Komen */}
            <button
              aria-label="Comment"
              className="flex items-center gap-1 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-message-circle"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <p className="hidden lg:block ">Comment</p>
            </button>
            {/* Tombol Bagikan */}
            <button
              aria-label="Share"
              className="flex items-center gap-1 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-share-2"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              <p className="hidden lg:block ">Bagikan</p>
            </button>
          </div>
          {/* Link Lihat Selengkapnya */}
          <a
            href="#"
            className="text-blue-500 flex items-center gap-1 rounded-full bg-white p-2.5 shadow-sm  hover:shadow-lg"
          >
            <p>Lihat Selengkapnya</p>
          </a>
        </div>
      </article>
    </div>
  );
}

export default NewsCard;
