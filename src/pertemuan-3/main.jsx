import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS.jsx";
import './tailwind.css'; 
import UserForm from "./UserForm.jsx";
import HitungGajiForm from "./HitungGaji.jsx";

createRoot(document.getElementById("root"))
    .render (
        <div>
            <TailwindCSS/>
            <UserForm/>
            <HitungGajiForm/>
        </div>
    )
