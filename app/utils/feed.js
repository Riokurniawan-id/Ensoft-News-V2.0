// Data dummy
const userInteractions = [
  { userId: 2, postId: 1, category: "finance" },
  { userId: 1, postId: 2, category: "sports" },
  { userId: 2, postId: 3, category: "finance" },
  { userId: 2, postId: 4, category: "technology" },
];

// hitung preferensi kategori pengguna berdasarkan jumlah like pada setiap kategori
function calculateUserCategoryPreferences(userId, interactions) {
  const categoryPreferences = {};
  interactions.forEach((interaction) => {
    if (interaction.userId === userId) {
      if (categoryPreferences[interaction.category]) {
        categoryPreferences[interaction.category]++;
      } else {
        categoryPreferences[interaction.category] = 1;
      }
    }
  });
  return categoryPreferences;
}

// menyaring postingan dalam feed berdasarkan preferensi kategori pengguna
function filterAndSortPostsByUserPreferences(userId, posts, interactions) {
  const userPreferences = calculateUserCategoryPreferences(
    userId,
    interactions
  );
  const totalLikes = Object.values(userPreferences).reduce(
    (acc, cur) => acc + cur,
    0
  );
  const financePreferencePercentage = userPreferences["finance"] / totalLikes;

  // Menyaring postingan berdasarkan preferensi kategori pengguna
  let filteredPosts = [];
  if (financePreferencePercentage >= 0.5) {
    filteredPosts = posts.filter((post) => post.category == "finance");
  } else {
    filteredPosts = posts;
  }

  // Menyaring postingan dari kategori yang tidak diprioritaskan
  const nonFinancePosts = posts.filter((post) => post.category !== "finance");

  // Menambahkan postingan dari kategori yang tidak diprioritaskan ke dalam feed secara acak
  const randomNonFinancePosts = nonFinancePosts
    .sort(() => 0.5 - Math.random())
    .slice(
      0,
      Math.ceil(nonFinancePosts.length * (1 - financePreferencePercentage))
    );

  // Menggabungkan postingan dari kategori finance dan non-finance
  filteredPosts.push(...randomNonFinancePosts);

  // Mengacak urutan postingan dalam feed
  filteredPosts.sort(() => 0.5 - Math.random());

  return filteredPosts;
}

// Data dummy untuk postingan
const posts = [
  { postId: 1, title: "Artikel Keuangan 1", category: "finance" },
  { postId: 2, title: "Berita Olahraga", category: "sports" },
  { postId: 3, title: "Berita Bisnis", category: "finance" },
  { postId: 4, title: "Inovasi Teknologi", category: "technology" },
  // tambahkan data postingan lainnya jika diperlukan
];

// ID pengguna yang akan digunakan untuk pengujian
const userId = 1;

// Menyaring dan mengurutkan postingan dalam feed berdasarkan preferensi kategori pengguna
const filteredPosts = filterAndSortPostsByUserPreferences(
  userId,
  posts,
  userInteractions
);

// Menampilkan postingan dalam feed yang sudah disaring dan diurutkan
filteredPosts.forEach((post) => {
  console.log(`Judul: ${post.title} | Kategori: ${post.category}`);
});
