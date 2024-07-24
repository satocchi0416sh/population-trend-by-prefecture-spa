import React from 'react'

interface BottomDrawerButtonProps {
    isOpen: boolean
    handleChange: () => void
}

const BottomDrawerButton: React.FC<BottomDrawerButtonProps> = ({ isOpen, handleChange }) => {
    return (
        <button className={`fixed bottom-5 left-0 right-0 bg-accent-01 text-white font-bold mx-4 rounded-full py-4 justify-center items-center z-30 ${isOpen ? 'hidden' : 'block'}`}
            onClick={handleChange}
        >
            都道府県
        </button>
    )
}

export default BottomDrawerButton