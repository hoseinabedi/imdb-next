
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
    return (
        <ThemeProvider>
            <div className="">
                {children}
            </div>
        </ThemeProvider>
    )
}

export default Providers;