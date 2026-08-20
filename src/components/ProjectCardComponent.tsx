import React from 'react'
import Image from 'next/image'

type ProjectCardProps = {
    image: {
        src: string;
        alt: string;
    };
    category: string;
    name: string;
    description: string | string[];
    className?: string;
}

const ProjectCardComponent = ({
    image,
    category,
    name,
    description,
    className = ''
}: ProjectCardProps) => {
    return (
        <div className={`p-5 bg-white flex rounded-3xl gap-4 ${className}`}>
            <Image
                src={image.src}
                height={100}
                width={100}
                alt={image.alt}
                className='object-cover w-[100px] h-[100px] shrink-0'
            />
            <div>
                <h2 className='text-gray-500 uppercase text-xs font-semibold'>{category}</h2>
                <h1 className='font-semibold text-xl mt-1'>{name}</h1>
                {Array.isArray(description) ? (
                    <ul className='mt-2 list-disc list-outside ml-4 space-y-1 text-gray-800 text-sm'>
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-gray-800 text-sm mt-2'>{description}</p>
                )}
            </div>
        </div>
    )
}

export default ProjectCardComponent
