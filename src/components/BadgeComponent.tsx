import React, { ReactNode } from 'react'

type BadgeProps = {
    label?: string;
    icon: ReactNode;
    className?: string;
}

const BadgeComponent = ({
    label = 'Verified Precision',
    icon,
    className = ''
}: BadgeProps) => {
    return (
        <div className={`flex gap-2 items-center ${className}`}>
            <span className="text-atlantis inline-flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
                {icon}
            </span>
            <span>{label}</span>
        </div>
    )
}

export default BadgeComponent
