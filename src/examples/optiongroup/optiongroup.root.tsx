"use client"

import React, { ReactNode } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Radio } from "@/components/Radio/Radio";
import { Toggle } from "@/components/Toggle/Toggle";
import { IconToggle } from "@/components/Toggle/IconToggle";

const code = ``;
const labels = ["Default", "Checked", "Disabled", "Disabled Checked",];
const color = ["Base", "Primary", "Secondary", "Warning", "Valid", "Error",];

const GridRow: React.FC<{ items: string[] }> = ({ items }) => (
    <div className="flex flex-col gap-4">
        <div className="w-full h-7 flex items-center">
            <div className="w-full h-px bg-silver-300" />
        </div>
        {items.map((item) => (
            <div key={item} className="flex items-center gap-2 h-[22px]">
                <span className="flex-none">{item}</span>
                <div className="w-full h-px bg-silver-400" />
            </div>
        ))}
    </div>
);
const Gridtitle = ({ children }: { children: ReactNode }) => (
    <div className="flex justify-center items-center gap-4 w-full">
        <div className="w-full h-px bg-silver-300" />
        <h6 className="flex-none">{children}</h6>
        <div className="w-full h-px bg-silver-300" />
    </div>
);

function Component() {

    const subStyle = "flex justify-start pl-4 h-[22px]";
    const widthStyle = "flex justify-start w-24"
    const leftmenu = "absolute top-0 left-0 size-8 transition-all duration-100"
    const lefticon = "group-has-[.leftmenu:checked]/lefticon"

    return (
        <div className="flex flex-col gap-10 min-h-56">
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <GridRow items={labels} />
                <div className="grid grid-cols-4 items-center gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Checkbox Small</Gridtitle>
                        <div className="h-[22px]"><Checkbox label="텍스트 내용" /></div>
                        <div className="h-[22px]"><Checkbox label="텍스트 내용" checked={true} /></div>
                        <div className="h-[22px]"><Checkbox label="텍스트 내용" disabled /></div>
                        <div className="h-[22px]"><Checkbox label="텍스트 내용" disabled checked={true} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Large</Gridtitle>
                        <Checkbox label="텍스트 내용" sizes="lg" />
                        <Checkbox label="텍스트 내용" sizes="lg" checked={true} />
                        <Checkbox label="텍스트 내용" sizes="lg" disabled />
                        <Checkbox label="텍스트 내용" sizes="lg" disabled checked={true} />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Round : Small</Gridtitle>
                        <div className="h-[22px]"><Checkbox label="텍스트 내용" borderRadius="round" /></div>
                        <div className="h-[22px]"><Checkbox label="텍스트 내용" borderRadius="round" checked={true} /></div>
                        <div className="h-[22px]"><Checkbox label="텍스트 내용" borderRadius="round" disabled /></div>
                        <div className="h-[22px]"><Checkbox label="텍스트 내용" borderRadius="round" disabled checked={true} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Round : Large</Gridtitle>
                        <Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" />
                        <Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" checked={true} />
                        <Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" disabled />
                        <Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" disabled checked={true} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <GridRow items={labels} />
                <div className="grid grid-cols-4 items-center gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Radio : Small</Gridtitle>
                        <div className="h-[22px]"><Radio label="텍스트 내용" /></div>
                        <div className="h-[22px]"><Radio label="텍스트 내용" checked={true} /></div>
                        <div className="h-[22px]"><Radio label="텍스트 내용" disabled /></div>
                        <div className="h-[22px]"><Radio label="텍스트 내용" disabled checked={true} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Large</Gridtitle>
                        <Radio label="텍스트 내용" sizes="lg" />
                        <Radio label="텍스트 내용" sizes="lg" checked={true} />
                        <Radio label="텍스트 내용" sizes="lg" disabled />
                        <Radio label="텍스트 내용" sizes="lg" disabled checked={true} />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Line : Small</Gridtitle>
                        <div className="h-[22px]"><Radio type="line" label="텍스트 내용" /></div>
                        <div className="h-[22px]"><Radio type="line" label="텍스트 내용" checked={true} /></div>
                        <div className="h-[22px]"><Radio type="line" label="텍스트 내용" disabled /></div>
                        <div className="h-[22px]"><Radio type="line" label="텍스트 내용" disabled checked={true} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Line : Large</Gridtitle>
                        <Radio type="line" sizes="lg" label="텍스트 내용" />
                        <Radio type="line" sizes="lg" label="텍스트 내용" checked={true} />
                        <Radio type="line" sizes="lg" label="텍스트 내용" disabled />
                        <Radio type="line" sizes="lg" label="텍스트 내용" disabled checked={true} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <GridRow items={labels} />
                <div className="grid grid-cols-4 items-center gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Text Label Hidden : Small</Gridtitle>
                        <div className="h-[22px]"><Checkbox /></div>
                        <div className="h-[22px]"><Checkbox checked={true} /></div>
                        <div className="h-[22px]"><Checkbox disabled /></div>
                        <div className="h-[22px]"><Checkbox disabled checked={true} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Text Label Hidden : Large</Gridtitle>
                        <Checkbox sizes="lg" />
                        <Checkbox sizes="lg" checked={true} />
                        <Checkbox sizes="lg" disabled />
                        <Checkbox sizes="lg" disabled checked={true} />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Text Label Hidden : Small</Gridtitle>
                        <div className="h-[22px]"><Radio type="line" /></div>
                        <div className="h-[22px]"><Radio type="line" checked={true} /></div>
                        <div className="h-[22px]"><Radio type="line" disabled /></div>
                        <div className="h-[22px]"><Radio type="line" disabled checked={true} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Text Label Hidden : Large</Gridtitle>
                        <Radio type="line" sizes="lg" />
                        <Radio type="line" sizes="lg" checked={true} />
                        <Radio type="line" sizes="lg" disabled />
                        <Radio type="line" sizes="lg" disabled checked={true} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <GridRow items={color} />
                <div className="grid grid-cols-2 items-center gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Default</Gridtitle>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="base" colors="base" checked={true} /></div>
                            <div className={widthStyle}><Radio label="base" colors="base" checked={true} /></div>
                        </div>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="primary" colors="primary" checked={true} /></div>
                            <div className={widthStyle}><Radio label="primary" colors="primary" checked={true} /></div>
                        </div>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="secondary" colors="secondary" checked={true} /></div>
                            <div className={widthStyle}><Radio label="secondary" colors="secondary" checked={true} /></div>
                        </div>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="warning" colors="warning" checked={true} /></div>
                            <div className={widthStyle}><Radio label="warning" colors="warning" checked={true} /></div>
                        </div>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="valid" colors="valid" checked={true} /></div>
                            <div className={widthStyle}><Radio label="valid" colors="valid" checked={true} /></div>
                        </div>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="error" colors="error" checked={true} /></div>
                            <div className={widthStyle}><Radio label="error" colors="error" checked={true} /></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Disabled</Gridtitle>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="base" colors="base" disabled checked={true} /></div>
                            <div className={widthStyle}><Radio label="base" colors="base" disabled checked={true} /></div>
                        </div>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="primary" colors="primary" disabled checked={true} /></div>
                            <div className={widthStyle}><Radio label="primary" colors="primary" disabled checked={true} /></div>
                        </div>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="secondary" colors="secondary" disabled checked={true} /></div>
                            <div className={widthStyle}><Radio label="secondary" colors="secondary" disabled checked={true} /></div>
                        </div>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="warning" colors="warning" disabled checked={true} /></div>
                            <div className={widthStyle}><Radio label="warning" colors="warning" disabled checked={true} /></div>
                        </div>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="valid" colors="valid" disabled checked={true} /></div>
                            <div className={widthStyle}><Radio label="valid" colors="valid" disabled checked={true} /></div>
                        </div>
                        <div className={subStyle}>
                            <div className={widthStyle}><Checkbox label="error" colors="error" disabled checked={true} /></div>
                            <div className={widthStyle}><Radio label="error" colors="error" disabled checked={true} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <GridRow items={labels} />
                <div className="grid grid-cols-5 gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Toggle : Large</Gridtitle>
                        <div className="h-[22px]"><Toggle toggleId="large1" /></div>
                        <div className="h-[22px]"><Toggle toggleId="large2" checked={true} /></div>
                        <div className="h-[22px]"><Toggle toggleId="large3" disabled /></div>
                        <div className="h-[22px]"><Toggle toggleId="large4" disabled checked={true} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Toggle : Medium</Gridtitle>
                        <div className="h-[22px]"><Toggle type="lg" toggleId="medium1" /></div>
                        <div className="h-[22px]"><Toggle type="lg" toggleId="medium2" checked={true} /></div>
                        <div className="h-[22px]"><Toggle type="lg" toggleId="medium3" disabled /></div>
                        <div className="h-[22px]"><Toggle type="lg" toggleId="medium4" disabled checked={true} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Toggle : Small</Gridtitle>
                        <div className="h-[22px]"><Toggle type="sm" toggleId="small1" /></div>
                        <div className="h-[22px]"><Toggle type="sm" toggleId="small2" checked={true} /></div>
                        <div className="h-[22px]"><Toggle type="sm" toggleId="small3" disabled /></div>
                        <div className="h-[22px]"><Toggle type="sm" toggleId="small4" disabled checked={true} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Toggle : ON / OFF</Gridtitle>
                        <div className="h-[22px]"><Toggle displayStatus toggleId="status1" width="14" /></div>
                        <div className="h-[22px]"><Toggle displayStatus toggleId="status2" width="14" checked={true} /></div>
                        <div className="h-[22px]"><Toggle displayStatus toggleId="status3" width="14" disabled /></div>
                        <div className="h-[22px]"><Toggle displayStatus toggleId="status4" width="14" disabled checked={true} /></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>icon</Gridtitle>
                        <div className="h-[22px]"><IconToggle iconSize="size-6" iconType="switch" iconOn="iconPoint" iconOff="iconPoint2" /></div>
                        <div className="h-[22px]"><IconToggle iconSize="size-6" iconType="color" iconOn="iconPower" iconColorOff="bg-[#DC0000]" iconColorOn="bg-[#24DE81]" /></div>
                    </div>
                </div>
            </div>

            {/* <div className='group/lefticon size-66 bg-slate-400 transition-all duration-100 has-[.leftmenu:checked]:w-16'>
                <div className='flex justify-end items-center px-4 py-1.5 has-[.leftmenu:checked]:px-0 has-[.leftmenu:checked]:justify-center'>
                    <label htmlFor='leftmenu' className='relative size-8 text-white cursor-pointer'>
                        <input type='checkbox' id='leftmenu' className='leftmenu hidden' />
                        <IconToggle className="size-6" iconType="switch" iconOn="iconCompleted" iconOff="iconFail" />
                        <div className={`${leftmenu} ${lefticon}:opacity-0 bg-green-500`} />
                        <div className={`${leftmenu} has-[.leftmenu:checked]:opacity-100 opacity-0 bg-red-900`} />
                    </label>
                </div>
            </div> */}
        </div >
    );
}


export const optiongroup: CodeData = {
    title: "Checkbox, Radio, Toggle Examples",
    type: "single",
    code: [
        {
            fileName: "client",
            language: "tsx",
            code,
        },
    ],
    githubSlug: "forms/forms.optiongroup.tsx",
    component: <Component />,
};