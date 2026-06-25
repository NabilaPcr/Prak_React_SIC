// SEMUA menggunakan relative path dengan huruf kecil (sesuai file di folder ui)
import PageHeader from "../components/PageHeader";
import { button } from "../components/ui/Button"; // ← perhatikan: ui/button (huruf kecil semua)
import Card from "../components/Card";
import Badge from "../components/Badge";

export default function FiturXYZ() {
    return (
        <div id="dashboard-container">
            <PageHeader title="Fitur XYZ" />
            <p> Ini adalah halaman untuk Fitur XYZ.</p>

            <button variant="outline">Batal</button>
            <button variant="ghost" size="xs">Batal</button>
            <button variant="destructive">Batal</button>

            <div className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription> 
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
            <div className="mt-6">
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="success">Success</Badge>
            </div>
        </div>
    );
}