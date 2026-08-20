import React, { ReactNode } from 'react'

type ServiceCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
}

const ServiceCardComponent = ({
    icon,
    title,
    description,
    className = ''
}: ServiceCardProps) => {
    return (
        <div className={`p-5 bg-white rounded-3xl ${className}`}>
            <span className='text-atlantis inline-flex items-center justify-center [&>svg]:w-8 [&>svg]:h-8'>
                {icon}
            </span>
            <h3 className='font-semibold text-xl mt-3'>
                {title}
            </h3>
            <p className='mt-1 text-gray-500'>
                {description}
            </p>
        </div>
    )
}

export default ServiceCardComponent
