import React, { useState } from "react";

const Ubahwarna = () => {
  const [isChanging, setIsChanging] = useState(false);

  // Fungsi untuk menghasilkan warna acak menggunakan 'for'
  const getRandomColor = () => {
    let color = "#";
    const letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Fungsi untuk memulai atau menghentikan perubahan warna
  const toggleBackgroundChange = () => {
    if (!isChanging) {
      // Jika perubahan belum dimulai, mulai interval untuk perubahan warna
      const interval = setInterval(() => {
        const randomColor = getRandomColor(); // Menggunakan fungsi getRandomColor dengan 'for'
        document.documentElement.style.backgroundColor = randomColor; // Mengubah latar belakang halaman
      }, 1000); // Setiap 1 detik
      setIsChanging(interval); // Menyimpan interval ID
    } else {
      // Jika perubahan warna sudah dimulai, hentikan perubahan
      clearInterval(isChanging); // Hentikan interval
      setIsChanging(false); // Reset status
    }
  };

  return (
    <div
    style={{ marginLeft:"20px",marginTop:"20px" }}required
    >
      <button
        onClick={toggleBackgroundChange} // Aktifkan atau hentikan perubahan warna saat tombol diklik
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isChanging ? "#e74c3c" : "#2ecc71", // Merah untuk "Berhenti", Hijau untuk "Mulai"
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {isChanging ? "Berhenti" : "Mulai"} Ubah Warna
      </button>
    </div>
  );
};

export default Ubahwarna;