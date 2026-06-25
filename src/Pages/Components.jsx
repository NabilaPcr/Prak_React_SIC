import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ProductCard from "../components/Productcard";
import Table from "../components/Table";

export default function Components() {
  const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000",
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-8 text-gray-800">
        <Container id="dashboard-container" className="max-w-6xl mx-auto px-4 space-y-8">
          
          <div className="border-b pb-4">
            <PageHeader title="Components" />
            <p className="text-gray-500 text-sm mt-1">Ini halaman dokumentasi preview Components</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Simpan</Button>
                <Button type="secondary">Simpan</Button>
                <Button type="success">Simpan</Button>
                <Button type="danger">Simpan</Button>
                <Button type="warning">Simpan</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Simpan</Badge>
                  <Badge type="secondary">Selesai</Badge>
                  <Badge type="success">Hapus</Badge>
                  <Badge type="danger">Berhasil</Badge>
                  <Badge type="warning">Gagal</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Avatars</h3>
                <div className="flex gap-2 items-center">
                  <Avatar name="Gohn Doe" />
                  <Avatar name="Jane Smith" />
                  <Avatar name="Bob Johnson" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-2 rounded-xl shadow-sm">
            <Card>
              <h2 className="text-xl font-bold text-gray-800">Judul Card</h2>
              <p className="text-gray-600 mt-1">Ini adalah isi dari card standar yang digunakan untuk membungkus teks.</p>
            </Card>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Product Showcase</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProductCard
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                title="Sepatu Sport"
                category="Fashion"
                price="Rp 450.000"
                description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
              />

              <ProductCard
                image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                title="Smartphone"
                category="Elektronik"
                price="Rp 4.500.000"
                description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm overflow-hidden">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Data Produk</h3>
            <div className="overflow-x-auto">
              <Table headers={headers}>
                {products.map((product, index) => (
                  <tr key={product.id} className="hover:bg-gray-50 border-b border-gray-100 transition-colors">
                    <td className="px-4 py-4 text-center text-gray-600 text-sm">{index + 1}</td>
                    <td className="px-4 py-4 font-medium text-gray-900 text-sm">{product.name}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-900 font-semibold text-sm">{product.price}</td>
                    <td className="px-4 py-4 text-sm">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg shadow-sm text-xs font-medium transition-colors">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </div>

        </Container>
      </div>
      <Footer />
    </>
  );
}
