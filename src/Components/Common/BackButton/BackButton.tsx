'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa6';

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 font-averia text-sm md:text-base text-[#101010]/60 hover:text-[#101010] transition group cursor-pointer"
        >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
        </button>
    );
};

export default BackButton;
