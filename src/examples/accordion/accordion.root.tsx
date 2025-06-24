"use client"
import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
    AccordionComponent,
    AccordionWrap,
    AccordionTitle,
    AccordionContent,
} from "@/components/Accordion/items";

const code = ``;

function Component() {
    const [isOpen, setOpen] = useState(false);

    const accordionsData = [
        {
            title: "인터넷 사용중인 방을 옮기고 싶은데 따로 비용을 부담해야 하나요?",
            content:
                <p>
                    글자수30자세기 글자수30자세기 글자수30자세기 글자수
                </p>
        },
        {
            title: "휴대폰요금 납기일은 언제인가요?",
            content: "글자수60자세기 글자수60자세기 글자수60자세기 글자수60자세기 글자수60자세기 글자수60자세기."
        },
    ];
    
    return (
        <>
            <div className="flex items-center gap-4 mb-4">
                <h5 className="flex-none">기본</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            <AccordionComponent>
                {accordionsData.map((item, idx) => {
                    return (
                        <AccordionWrap key={idx} isOpen={isOpen} setOpen={() => setOpen((prev) => !prev)}>
                            <AccordionTitle isOpen={isOpen} setOpen={() => setOpen((prev) => !prev)}>
                                {item.title}
                            </AccordionTitle>
                            <AccordionContent isOpen={isOpen}>
                                {item.content}
                            </AccordionContent>
                        </AccordionWrap>
                    );
                })}
            </AccordionComponent>


            <hr className="my-8"></hr>
            <div className="flex items-center gap-4 mb-4">
                <h5 className="flex-none">전체 오픈</h5>
                <div className="w-full border-t border-solid border-gray-300"></div>
            </div>
            
            <AccordionComponent allOpen>
                {accordionsData.map((item, idx) => {
                    return (
                        <AccordionWrap key={idx} isOpen={isOpen} setOpen={() => setOpen((prev) => !prev)}>
                            <AccordionTitle isOpen={isOpen} setOpen={() => setOpen((prev) => !prev)}>
                                {item.title}
                            </AccordionTitle>
                            <AccordionContent isOpen={isOpen}>
                                {item.content}
                            </AccordionContent>
                        </AccordionWrap>
                    );
                })}
            </AccordionComponent>
        </>
    );
}

export const root: CodeData = {
    type: "single",
    code: [
        {
            fileName: "client",
            language: "tsx",
            code,
        },
    ],
    githubSlug: "accordion/accordion.root.tsx",
    component: <Component />,
};
