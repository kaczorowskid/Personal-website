import { useEffect, useState } from "react"

export const useIsMobile = () => {
    const [mobile, setMobile] = useState<boolean>(false);

    const getWidthScreen = () => window.screen.width < 500 ? setMobile(true) : setMobile(false)
    
    useEffect(() => {
        window.addEventListener('resize', getWidthScreen)
        return () => window.removeEventListener('resize', getWidthScreen)
    })

    return {
        mobile
    }
}