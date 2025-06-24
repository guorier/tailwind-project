"use client"
import React, { ReactNode } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { twMerge } from 'tailwind-merge';
import { Icon } from '@/components/Icons';
import { Tooltip } from "@components/Tooltip/Tooltip";
import { TitleAttribute } from "@components/Tooltip/TitleAttribute";

const code = ``;

function Component() {
    const Tagtitle = ({ children }: { children: ReactNode }) => (
        <div className='flex items-center gap-4 w-[100px]'>
            <h5 className='flex-none'>{children}</h5><div className="w-full h-px bg-silver-400" />
        </div>
    );
    const TooltipContent = ({ children, className }: { children: ReactNode, className?: string }) => (
        <div className={twMerge("flex items-center w-max px-3 py-1 h-8 text-base text-white bg-natural-900 drop-shadow-[4px_4px_16px_rgba(0,0,0,0.1)]", className)}>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 size-0 border-l-[8px] border-r-[8px] border-t-[10px] border-transparent border-t-natural-900" />
            {children}
        </div>
    );

    return (
        <div className=" flex flex-col gap-10 min-h-56 frame" >
            <div className='flex items-center gap-4'>
                <Tagtitle>Default</Tagtitle>
                <div className="relative">
                    <TooltipContent>Tooltip on text</TooltipContent>
                </div>
                <div className="flex justify-center items-center w-28">
                    <Tooltip content="Tooltip on text">
                        <Icon iName="iconInfo" iState='iconHover' className="size-6" />
                    </Tooltip>
                </div>
                <div className="w-1/2 text-base break-keep">
                    Lorem ipsum is <Tooltip content="Tooltip on text"><span className="font-semibold underline underline-offset-4">placeholder</span></Tooltip> text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and visual mockups.
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Tagtitle>Round</Tagtitle>
                <div className="relative">
                    <TooltipContent className="rounded-md">Tooltip on text</TooltipContent>
                </div>
                <div className="flex justify-center items-center w-28">
                    <Tooltip content="Tooltip on text" borderRadius="round">
                        <Icon iName="iconInfo" iState='iconHover' className="size-6" />
                    </Tooltip>
                </div>
                <div className="w-1/2 text-base break-keep">
                    Lorem ipsum is <Tooltip content="Tooltip on text" borderRadius="round"><span className="font-semibold underline underline-offset-4">placeholder</span></Tooltip> text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and visual mockups.
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Tagtitle>Pill</Tagtitle>
                <div className="relative">
                    <TooltipContent className="rounded-full">Tooltip on text</TooltipContent>
                </div>
                <div className="flex justify-center items-center w-28">
                    <Tooltip content="Tooltip on text" borderRadius="pill">
                        <Icon iName="iconInfo" iState='iconHover' className="size-6" />
                    </Tooltip>
                </div>
                <div className="w-1/2 text-base break-keep">
                    Lorem ipsum is <Tooltip content="Tooltip on text" borderRadius="pill"><span className="font-semibold underline underline-offset-4">placeholder</span></Tooltip> text commonly used in the graphic,
                    print, and publishing industries for previewing layouts and visual mockups.
                </div>
            </div>


            <div
                className="text-ellipsis overflow-hidden whitespace-nowrap"
                title="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            >
                Lorem ipsum is print, and publishing industries for previewing layouts and visual mockups. placeholder text commonly used in the graphic.
                Lorem ipsum is print, and publishing industries for previewing layouts and visual mockups. placeholder text commonly used in the graphic.
            </div>


            <TitleAttribute
                className="text-ellipsis overflow-hidden whitespace-nowrap w-112"
                dataset="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            >
                Lorem ipsum is print, and publishing industries for previewing layouts and visual mockups.
                placeholder text commonly used in the graphic,
            </TitleAttribute>
            
        </div>
    );
}

export const root: CodeData = {
    title: "Tooltip Examples",
    type: 'single',
    code: [
        {
            fileName: 'client',
            language: 'tsx',
            code,
        },
    ],
    githubSlug: 'tooltip/tooltip.root.tsx',
    component: <Component />,
};
