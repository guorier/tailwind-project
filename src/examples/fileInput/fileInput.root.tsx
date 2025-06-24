'use client'
import { CodeData } from "@/components/helpers/examples/code-demo";

import { FileDragAndDrop, IFileTypes } from "@/components/FileInput/FileDragAndDrop";
import { useState } from "react";
import { FileInput } from "@/components/FileInput/FileInput";

const code = ``;

function Component() {
    const [files, setFiles] = useState<IFileTypes[]>([]);

    return (
        <>
            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>다중파일 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <div className='mb-8'>
                <FileInput multiple />
            </div>


            <div className='flex items-center gap-4 mb-4'>
                <h5 className='flex-none'>파일 드롭 예시</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <FileDragAndDrop />
        </>
    );
}

export const root: CodeData = {
    type: 'single',
    code: [
        {
            fileName: 'client',
            language: 'tsx',
            code,
        },
    ],
    githubSlug: 'fileInput/fileInput.root.tsx',
    component: <Component />,
};
