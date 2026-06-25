// PASTIKAN semua import menggunakan alias @
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button"; // ← dari folder ui, huruf kecil
import Card from "@/components/ui/card"; // ← dari folder ui
import { CardAction, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import Badge from "@/components/ui/badge"; // ← dari folder ui

export default function FiturXYZ() {
    return (
        <div id="dashboard-container">
            <PageHeader title="Fitur XYZ" />
            <p> Ini adalah halaman untuk Fitur XYZ.</p>

            <Button variant="outline">Batal</Button>
            <Button variant="ghost" size="xs">Batal</Button>
            <Button variant="destructive">Batal</Button>

           
            <div className ="mt-6">
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
            <div className ="mt-6">
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
            </div>
        </div>
        
    )
}