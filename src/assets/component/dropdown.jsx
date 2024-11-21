import React, { useState } from "react";

const Dropdown = () => {
  // State untuk menyimpan nama dan pilihan dari dropdown
  const [nama, setNama] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hallo ${nama}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      

      {/* Input Nama */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan nama"
          style={{
            width: "100%",
            marginLeft:"20px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />
      </div>

      
      <button style={{ marginLeft:"20px",marginbottom:"20px" }}required>
        Input
      </button>
    </form>
  );
};

export default Dropdown;