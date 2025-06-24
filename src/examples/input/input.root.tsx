"use client"
import React, { ReactNode, useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textinput } from "@/components/Input/TextInput";
import { EmailInput } from "@/components/Input/EmailInput";
import { PasswordInput } from "@/components/Input/PasswordInput";
import { Progressbar } from "@/components/Input/ProgressBar";
import { Progresscircle } from "@/components/Input/ProgressCircle";
import { SearchBox } from "@/components/Input/SearchBox";
import { Limitinput } from "@/components/Input/LimitInput";





const hexToRgb = (hex: string): string | null => {
    // HEX 형식 검사 및 변환
    const sanitizedHex = hex.replace('#', '');
    if (sanitizedHex.length !== 6) return null;

    const r = parseInt(sanitizedHex.substring(0, 2), 16);
    const g = parseInt(sanitizedHex.substring(2, 4), 16);
    const b = parseInt(sanitizedHex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
};




const code = ``;
const labels = ["Default", "Focus", "Disabled",];
const color = ["Base", "Primary", "Secondary", "Warning", "Valid", "Error",];

const GridRow: React.FC<{ items: string[] }> = ({ items }) => (
    <div className="flex flex-col gap-4">
        <div className="w-full h-7 flex items-center">
            <div className="w-full h-px bg-silver-300" />
        </div>
        {items.map((item) => (
            <div key={item} className="flex items-center gap-2 h-10.5">
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

    const [colors, setColors] = useState<string>('#ff0000');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColors(e.target.value);
    };

    return (
        <div className="flex flex-col gap-10 min-h-56">
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <GridRow items={labels} />
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Default</Gridtitle>
                        <Textinput placeholder="Please enter..." />
                        <Textinput placeholder="Please enter..." className="border-natural-900" />
                        <Textinput placeholder="Please enter..." disabled />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Round</Gridtitle>
                        <Textinput placeholder="Please enter..." borderRadius="round" />
                        <Textinput placeholder="Please enter..." borderRadius="round" className="border-natural-900" />
                        <Textinput placeholder="Please enter..." borderRadius="round" disabled />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Underline</Gridtitle>
                        <Textinput placeholder="Please enter..." borderRadius="underline" />
                        <Textinput placeholder="Please enter..." borderRadius="underline" className="border-natural-900" />
                        <Textinput placeholder="Please enter..." borderRadius="underline" disabled />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <div className="flex flex-col gap-4">
                    <div className="w-full h-7 flex items-center"><div className="w-full h-px bg-silver-300" /></div>
                    <div className="flex items-center gap-2 h-14">
                        <span className="flex-none">Default</span><div className="w-full h-px bg-silver-400" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4">
                        <Gridtitle>left</Gridtitle>
                        <Textinput placeholder="Please enter..." />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Gridtitle>right</Gridtitle>
                        <Textinput placeholder="Please enter..." align="right" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Gridtitle>center</Gridtitle>
                        <Textinput placeholder="Please enter..." align="center" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <GridRow items={color} />
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Color Default</Gridtitle>
                        <Textinput placeholder="Please enter..." color="base" />
                        <Textinput placeholder="Please enter..." color="primary" />
                        <Textinput placeholder="Please enter..." color="secondary" />
                        <Textinput placeholder="Please enter..." color="valid" />
                        <Textinput placeholder="Please enter..." color="warning" />
                        <Textinput placeholder="Please enter..." color="error" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Color Disabled</Gridtitle>
                        <Textinput placeholder="Please enter..." disabled color="base" />
                        <Textinput placeholder="Please enter..." disabled color="primary" />
                        <Textinput placeholder="Please enter..." disabled color="secondary" />
                        <Textinput placeholder="Please enter..." disabled color="valid" />
                        <Textinput placeholder="Please enter..." disabled color="warning" />
                        <Textinput placeholder="Please enter..." disabled color="error" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <GridRow items={labels} />
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Number Examples</Gridtitle>
                        <Textinput type="number" placeholder="number" />
                        <Textinput type="number" placeholder="number" className="border-natural-900" />
                        <Textinput type="number" placeholder="number" disabled />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Search Examples</Gridtitle>
                        <SearchBox />
                        <SearchBox className="border-natural-900" />
                        <SearchBox disabled />
                        {/* <Textinput type="search" placeholder="Search..." className="border-natural-900" />
                        <Textinput type="search" placeholder="Search..." disabled /> */}
                    </div>
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Password Examples</Gridtitle>
                        <PasswordInput placeholder="Password" />
                        <PasswordInput placeholder="Password" className="border-natural-900" />
                        <PasswordInput placeholder="Password" disabled />
                    </div>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="flex flex-col gap-4 w-[136px]">
                    <div className="w-full h-7 flex items-center"><div className="w-full h-px bg-silver-300" /></div>
                    <div className="flex items-center gap-2 h-10.5"><span className="flex-none">Default</span><div className="w-full h-px bg-silver-400" /></div>
                    <div className="flex items-center gap-2 h-10.5"><span className="flex-none">Focus</span><div className="w-full h-px bg-silver-400" /></div>
                    <div className="flex items-center gap-2 h-10.5"><span className="flex-none">Disabled</span><div className="w-full h-px bg-silver-400" /></div>
                    <div className="flex items-center gap-2 h-16.5"><span className="flex-none">Valid</span><div className="w-full h-px bg-silver-400" /></div>
                    <div className="flex items-center gap-2 h-16.5"><span className="flex-none">Error</span><div className="w-full h-px bg-silver-400" /></div>
                </div>
                <div className="flex flex-col gap-4 w-[346px]">
                    <Gridtitle>Email Examples</Gridtitle>
                    <EmailInput placeholder="urban@urban.com" />
                    <EmailInput placeholder="urban@urban.com" className="border-natural-900" />
                    <EmailInput placeholder="urban@urban.com" disabled />
                    <div className="flex flex-col gap-2">
                        <input type='email' className="text-error-100 border-error-100" defaultValue="urban@urban.com" />
                        <span className="font-normal text-xs text-error-100">사용할 수 있는 이메일 형식입니다.</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <input type='email' className="text-valid-100 border-valid-100" defaultValue="urban@urban.com" />
                        <span className="font-normal text-xs text-valid-100">잘못된 이메일 형식입니다.</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-10">
                    <Gridtitle>Progressbar</Gridtitle>
                    <Progressbar none value={50} />
                    <Progressbar />
                </div>
                <div className="flex flex-col gap-10">
                    <Gridtitle>ProgressCircle</Gridtitle>
                    <Progresscircle
                        trackColor="#F1F1F5"
                        fillColor="#111111"
                        min={0}
                        max={100}
                        step={10}
                        size={100}
                        value={50}
                        none
                    />
                    <Progresscircle
                        trackColor="#F1F1F5"
                        fillColor="#111111"
                        min={0}
                        max={100}
                        step={10}
                        size={100}
                    />
                </div>
            </div>
            
            <Limitinput maxLength={50} />

            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h3>색상 선택</h3>
                {/* 색상 선택 input */}
                <input
                    type="color"
                    value={colors}
                    onChange={handleChange}
                    style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                />
                {/* HEX 코드 입력란 */}
                <input type="text"
                    value={colors}
                    onChange={handleChange}
                    placeholder="#000000"
                    maxLength={7}
                    style={{ marginLeft: '10px', width: '150px' }}
                />
                <div style={{ marginTop: '20px' }}>
                    <p>선택한 색상 (HEX): <strong>{colors}</strong></p>
                    <p>선택한 색상 (RGB): <strong>{hexToRgb(colors) || '유효하지 않은 HEX 값'}</strong></p>
                    {/* 색상 미리보기 */}
                    <div
                        style={{
                            backgroundColor: colors,
                            width: '100px',
                            height: '100px',
                            margin: 'auto',
                            border: '1px solid #000'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export const root: CodeData = {
    title: "Input Examples",
    type: "single",
    code: [
        {
            fileName: "client",
            language: "tsx",
            code,
        },
    ],
    githubSlug: "forms/forms.root.tsx",
    component: <Component />,
};