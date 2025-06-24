"use client"
import React, { ReactNode, useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { SelectBox } from "@/components/SelectBox/SelectBox";
import { MultipleSelect } from "@/components/SelectBox/MultipleSelect";
import { Transfer } from "@/components/SelectBox/Transfer";

const code = ``;

const labels = ["Default", "Disabled", "Selected",];
const Gridline = () => (
    <div className="flex flex-col gap-4">
        <div className="w-full h-7 flex items-center">
            <div className="w-full h-px bg-silver-300" />
        </div>
        {labels.map((label) => (
            <div key={label} className="flex items-center gap-2 h-10.5">
                {label}
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

    const options = Array.from({ length: 10 }, (_, i) => {
        const label = `Option label${i + 1}`;
        return {
            id: i,
            value: `value${i + 1}`,
            label: i === 0 ? "Select an option..." : label,
        };
    });

    const longOptions = [
        { id: 0, value: "", label: "Select an option..." },
        { id: 1, value: "option1", label: "글자수 10자 글자" },
        { id: 2, value: "option2", label: "나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄 이런 전차로 어린 백셩이 니르고져 홇베이셔도 마참네 제 뜨들 시러펴디 몯핧 노미하니아 내 이랄 윙하야 어엿비너겨 새로 스믈 여듫 짜랄 맹가노니 사람마다 해여전체124자" },
        { id: 3, value: "option3", label: "글자수 20자 글자수 20자 글자수2" },
        { id: 4, value: "option4", label: "글자수 30자 글자수 30자 글자수 30자 글자수 30" },
        { id: 5, value: "option5", label: "글자수 40자 글자수 40자 글자수 40자 글자수 40자 글자수 40자4" },
        { id: 6, value: "option6", label: "글자수 50자 글자수 50자 글자수 50자 글자수 50자 글자수 50자 글자수 50자 글자" },
        { id: 7, value: "option7", label: "글자수 60자 글자수 60자 글자수 60자 글자수 60자 글자수 60자 글자수 60자 글자수 60자 글자수6" },
        { id: 8, value: "option8", label: "글자수 70자 글자수 70자 글자수 70자 글자수 70자 글자수 70자 글자수 70자 글자수 70자 글자수 70자 글자수 70" },
        { id: 9, value: "option9", label: "글자수 80자 글자수 80자 글자수 80자 글자수 80자 글자수 80자 글자수 80자 글자수 80자 글자수 80자 글자수 80자 글자수 80자8" },
    ];

    const [optionsValue, setOptionsValue] = useState<string>(options[0].value);
    const handleSelect = (value: string) => {
        setOptionsValue(value);
    };

    const mOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
        { value: 'option5', label: 'Option 5' },
        { value: 'option6', label: 'Option 6' },
        { value: 'option7', label: 'Option 7' },
        { value: 'option8', label: 'Option 8' },
        { value: 'option9', label: 'Option 9' },
        { value: 'option10', label: 'Option 10' },
        { value: 'option11', label: 'Option 11' },
        { value: 'option12', label: 'Option 12' },
    ];
    const [moptionsValue, setMoptionsValue] = useState<string[]>([]);
    const multipleSelect = (newSelectedValues: string[]) => {
        setMoptionsValue(newSelectedValues);
    };

    const transferOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
        { value: 'option5', label: 'Option 5' },
        { value: 'option6', label: 'Option 6' },
        { value: 'option7', label: 'Option 7' },
        { value: 'option8', label: 'Option 8' },
        { value: 'option9', label: 'Option 9' },
        { value: 'option10', label: 'Option 10' },
        { value: 'option11', label: 'Option 11' },
        { value: 'option12', label: 'Option 12' },
    ];

    return (
        <div className="min-h-96">
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6 h-[600px]">
                <Gridline />
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Default</Gridtitle>
                        <SelectBox options={options} value={optionsValue} onChange={handleSelect} />
                        <SelectBox options={options} value={optionsValue} onChange={handleSelect} disabled />
                        <SelectBox options={options} value={optionsValue} onChange={handleSelect} initialOpen={true} />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Radius</Gridtitle>
                        <SelectBox options={options} value={optionsValue} onChange={handleSelect} borderRadius="round" />
                        <SelectBox options={options} value={optionsValue} onChange={handleSelect} borderRadius="round" disabled />
                        <SelectBox options={options} value={optionsValue} onChange={handleSelect} borderRadius="round" initialOpen={true} />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Gridtitle>Line</Gridtitle>
                        <SelectBox options={options} value={optionsValue} onChange={handleSelect} borderRadius="underline" />
                        <SelectBox options={options} value={optionsValue} onChange={handleSelect} borderRadius="underline" disabled />
                        <SelectBox options={options} value={optionsValue} onChange={handleSelect} borderRadius="underline" initialOpen={true} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <div className="flex flex-col gap-4">
                    <div className="w-full h-7 flex items-center">
                        <div className="w-full h-px bg-silver-300" />
                    </div>
                    <div className="flex items-center gap-2 h-10.5">
                        Default<div className="w-full h-px bg-silver-400" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 mb-80">
                    <Gridtitle>options 내용에 맞춰 options의 너비가 자동으로 결정</Gridtitle>
                    <SelectBox
                        width="50"
                        optionWidth="auto"
                        options={longOptions}
                        value={optionsValue}
                        onChange={handleSelect}
                        initialOpen={true}
                    />
                </div>
            </div>
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <div className="flex flex-col gap-4">
                    <div className="w-full h-7 flex items-center"><div className="w-full h-px bg-silver-300" /></div>
                    <div className="flex items-center gap-2 h-10.5">
                        Default<div className="w-full h-px bg-silver-400" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 mb-80 w-[600px]">
                    <Gridtitle>MultipleSelect</Gridtitle>
                    <MultipleSelect
                        optionWidth="auto"
                        options={mOptions}
                        value={moptionsValue}
                        onChange={multipleSelect}
                    />
                </div>
            </div>
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <div className="flex flex-col gap-4">
                    <div className="w-full h-7 flex items-center"><div className="w-full h-px bg-silver-300" /></div>
                    <div className="flex items-center gap-2 h-10.5">
                        Default<div className="w-full h-px bg-silver-400" />
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-80 w-[600px]">
                    <Gridtitle>MultipleSelect</Gridtitle>
                    <Transfer initialItems={transferOptions} />
                </div>
            </div>
        </div>
    );
}
export const root: CodeData = {
    title: "SelectBox Examples",
    type: "single",
    code: [
        {
            fileName: "client",
            language: "tsx",
            code,
        },
    ],
    githubSlug: "selectbox/selectbox.root.tsx",
    component: <Component />,
};