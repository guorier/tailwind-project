"use client";
import React, { useState } from "react";
import { FolderTree } from "@/components/FolderTree/FolderTree";
import { CodeData } from "@/components/helpers/examples/code-demo";


const code = ``;


function Component() {
    const sampleFolders = [
        {
            id: "1",
            name: "Folder 1",
            children: [
                { id: "1-1",
                    name: "Folder 1-1",
                    children: [
                        {
                            id: "1-1-1",
                            name: "Folder 1-1-1",
                            children: [
                                {id: "1-1-1-1",name: "Folder 1-1-1-1"},
                                {id: "1-1-1-2",name: "Folder 1-1-1-2"},
                            ]
                        },
                        { id: "1-2-2", name: "Folder 1-2-2" }
                    ]
                },
                {id: "1-2",name: "Sub Folder 1-2",}
            ]
        },
        {
            id: "2",
            name: "Root Folder2",
            children: [
                { id: "2-1", name: "Sub Folder 2-1" },
                {
                    id: "2-2",
                    name: "Sub Folder 2-2",
                    children: [
                        { id: "2-2-1", name: "Nested Folder 1" },
                        { id: "2-2-2", name: "Nested Folder 2" }
                    ]
                }
            ]
        }
    ];
    const [checked, setChecked] = useState<Record<string, boolean>>({});


    return (
        <div className="flex flex-col gap-10 min-h-56">
            <FolderTree folders={sampleFolders} checked={checked} setChecked={setChecked} />
        </div>
    );
}

export const root: CodeData = {
    title: 'Examples',
    type: 'single',
    code: [
        {
            fileName: 'client',
            language: 'tsx',
            code,
        },
    ],
    githubSlug: 'foldertree/foldertree.root.tsx',
    component: <Component />,
};