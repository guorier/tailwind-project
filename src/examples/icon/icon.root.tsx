import React from 'react';
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Icon } from '@/components/Icons';

const code = ``;

function Component() {
    const iconNames = [
        "iconAccodian",
        "iconAdd",
        "iconArrowclockwise",
        "iconBoardDelete",
        "iconBoardEdit",
        "iconDate",
        "iconCompleted",
        "iconFail",
        "iconPaper",
        "iconFilesearch",
        "iconFileuploed",
        "iconImg_Empty",
        "iconImg",
        "iconImg2",
        "iconImg3",
        "iconManintenance",
        "iconMaximize",
        "iconMove",
        "iconNoticePin",
        "iconNoticePoint",
        "iconPageLeft",
        "iconPageRight",
        "iconInfo",
        "iconPoint",
        "iconRestore",
        "iconFolder",
        "iconNotFound",
        "iconSave",
        "iconScreenshot",
        "iconSelect",
        "iconDelete",
        "iconClouds",
    ];
    const IconList = () => (
        <>
            {iconNames.map((iName, idx) => (
                <Icon key={idx} iName={iName} className="size-10" />
            ))}
        </>
    );
    const HoverList = () => (
        <>
            {iconNames.map((iName, idx) => (
                <Icon key={idx} iState='iconHover' iName={iName} className="size-10" />
            ))}
        </>
    );
    const ColorList = () => (
        <>
            {iconNames.map((iName, idx) => (
                <Icon key={idx} iState='colors' iName={iName} className="size-10 bg-purple-600" />
            ))}
        </>
    );
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-4'>
                    <h5 className='flex-none'>Default</h5><div className="w-full h-px bg-silver-400"></div>
                </div>
                <div className='flex flex-wrap items-center gap-4'>
                    <IconList />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-4'>
                    <h5 className='flex-none'>Hover</h5><div className="w-full h-px bg-silver-400"></div>
                </div>
                <div className='flex flex-wrap items-center gap-4'>
                    <HoverList />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-4'>
                    <h5 className='flex-none'>ColorList</h5><div className="w-full h-px bg-silver-400"></div>
                </div>
                <div className='flex flex-wrap items-center gap-4'>
                    <ColorList />
                </div>
            </div>
        </div>
    );
}



export const icon: CodeData = {
    title: 'icon Examples',
    type: 'single',
    code: [
        {
            fileName: 'client',
            language: 'tsx',
            code,
        },
    ],
    githubSlug: 'forms/forms.icon.tsx',
    component: <Component />,
};
