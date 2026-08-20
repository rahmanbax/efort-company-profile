import React, { ReactNode } from 'react'

type ButtonProps = {
    label?: string;
    icon?: ReactNode;
    onClick?: () => void;
    className?: string;
    secondary?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const ButtonComponent = ({
    label = 'Button Label',
    icon,
    onClick,
    secondary = false,
    className = '',
    disabled = false,
    type = 'button'
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`
                flex items-center gap-1 font-semibold w-fit text-base py-3 px-4 rounded-full transition justify-center 
                ${secondary
                    ? 'bg-white text-navy-500 border border-navy-500 hover:bg-gray-100'
                    : 'bg-linear-to-b from-[#AADF3A] to-atlantis text-black hover:brightness-105 border-l border-t border-r border-stroke'}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${className}
            `}
        >
            {icon}
            {label}
        </button>
    )
}

export default ButtonComponent