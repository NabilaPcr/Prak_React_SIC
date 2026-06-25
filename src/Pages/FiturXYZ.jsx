import PageHeader from "../components/PageHeader";
import Button from "../components/ui/Button"; 
import Card from "../components/Card";
import Badge from "../components/Badge";

export default function FiturXYZ() {
    return (
        <div id="dashboard-container">
            <PageHeader title="Fitur XYZ" />
            <p> Ini adalah halaman untuk Fitur XYZ.</p>

            <Button variant="outline">Batal</Button>
            <Button variant="ghost" size="xs">Batal</Button>
            <Button variant="destructive">Batal</Button>

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