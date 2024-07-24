import { useState } from "react"

const useBottomDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleChange = () => {
        setIsOpen(!isOpen)
    }

    return { isOpen, handleChange }
}

export default useBottomDrawer