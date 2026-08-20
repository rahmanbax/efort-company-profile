import React, { ReactNode } from 'react'

type InfoCardProps = {
    icon: ReactNode;
    title: string;
    description: string | string[] | ReactNode;
    className?: string;
}

const InfoCardComponent = ({
    icon,
    title,
    description,
    className = ''
}: InfoCardProps) => {
    return (
        <div className={`p-5 border-l-6 border-l-atlantis bg-atlantis/8 rounded-3xl ${className}`}>
            <div className='flex items-center gap-2'>
                <span className='text-atlantis inline-flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5'>
                    {icon}
                </span>
                <h2 className='font-semibold text-xl'>{title}</h2>
            </div>
            {Array.isArray(description) ? (
                <ul className='mt-2 list-disc list-outside ml-5 space-y-1 text-sm'>
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : typeof description === 'string' ? (
                <p className='mt-2 text-sm'>{description}</p>
            ) : (
                <div className='mt-2 text-sm'>{description}</div>
            )}
        </div>
    )
}

export default InfoCardComponent
