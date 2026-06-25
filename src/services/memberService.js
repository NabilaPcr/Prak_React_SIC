import axios from "axios";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const API_URL = `${SUPABASE_URL}/rest/v1/members`;

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  "Prefer": "return=representation",
};

export const memberService = {
  async fetchMembers() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createMember(data) {
    const payload = {
      full_name: data.fullName,
      email: data.email,
      password: data.password, // Teks murni sesuai skenario mandiri
      role: "Member",
      tier: "Bronze",
      total_points: 0
    };

    const response = await axios.post(API_URL, payload, { headers });
    return response.data;
  },

  /**
   * Fungsi Login: Memeriksa apakah email dan password cocok di tabel members
   * Menggunakan teknik filtering PostgREST (eq) sesuai dokumentasi modul
   */
  async loginMember(email, password) {
    // Menambahkan query param ?email=eq.emailuser&password=eq.passworduser
    const response = await axios.get(`${API_URL}?email=eq.${email}&password=eq.${password}`, { headers });
    
    // Jika tidak ada data yang cocok, kembalikan null atau lempar error
    if (response.data.length === 0) {
      throw new Error("Email atau Password salah!");
    }
    
    // Jika cocok, kembalikan data user pertama yang ditemukan
    return response.data[0];
  }
};