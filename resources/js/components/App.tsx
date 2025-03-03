import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../routes/Routes";
import { QueryProvider } from "./providers/QueryProvider";

export default function App() {
    return (
        <QueryProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </QueryProvider>
    );
}
