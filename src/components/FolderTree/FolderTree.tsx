"use client"
import { Dispatch, SetStateAction, useState } from "react";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Icon } from '@/components/Icons';

interface Folder {
    id: string;
    name: string;
    children?: Folder[];
}
interface FolderTreeProps {
    folders: Folder[];
    checked: Record<string, boolean>;
    setChecked: Dispatch<SetStateAction<Record<string, boolean>>>; // 🔥 수정
}

export const FolderTree = ({
    folders,
    checked,
    setChecked
}: FolderTreeProps) => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const toggleExpand = (id: string) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleCheck = (
        id: string,
        checkedState: boolean,
        folder?: Folder
    ) => {
        setChecked((prev) => {
            const newChecked: Record<string, boolean> = { ...prev };

            const updateChildren = (children?: Folder[]) => {
                if (!children) return;
                children.forEach((child) => {
                    newChecked[child.id] = checkedState;
                    updateChildren(child.children);
                });
            };

            newChecked[id] = checkedState;
            updateChildren(folder?.children);
            return newChecked;
        });
    };


    const renderFolders = (folders: Folder[]) => {
        return folders.map((folder) => (
            <li key={folder.id} className="flex flex-col gap-2 pl-4 bg-white before:content-[''] before:blcok before:h-full before:pl-2 before:border-l before:border-neutral-600">
                <div className="flex items-center gap-1 bg-white">
                    <div className="-ml-1.5 w-2 h-[1px] bg-slate-600"></div>
                    <Checkbox checked={checked[folder.id] || false}
                        onChange={(e) => toggleCheck(folder.id, e.target.checked, folder)}
                    />
                    {folder.children && (
                        <div onClick={() => toggleExpand(folder.id)}>
                            {expanded[folder.id] ? <Icon iName="iconAccodian" className="size-4" />
                                : <Icon iName="iconAccodian" className="size-4 -rotate-90" />
                            }
                        </div>
                    )}
                    <span className={`cursor-${folder.children ? "pointer" : "default"}`} onClick={() => folder.children && toggleExpand(folder.id)}>
                        {folder.name}
                    </span>
                </div>
                {folder.children && expanded[folder.id] && (
                    <ul className="relative flex flex-col gap-2 ">{renderFolders(folder.children)}</ul>
                )}
            </li>
        ));
    };

    return <ul className="overflow-y-auto relative h-50 flex flex-col gap-2">{renderFolders(folders)}</ul>;
};