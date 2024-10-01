import { Footer, Navbar } from "@/components";
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flef flex-col items-center w-full overflow-hidden">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default MarketingLayout
