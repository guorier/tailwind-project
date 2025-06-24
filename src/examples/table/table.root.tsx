"use client"
import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Table, TableColGroup, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "@/components/Table";
import { Checkbox } from '@/components/Checkbox/Checkbox';
const code = ``;

function Component() {

    const tabledata = [...Array(20)].map((_, index) => ({
        code: <Checkbox />,
        content: `Table Data- row${String(index + 1).padStart(2, '0')}`
    }));
    const [initialData, setInitialData] = useState(tabledata); // 상태를 통해 데이터를 관리
    const [sortState, setSortState] = useState(0);
    const handleSort = () => {
        let sortData;

        if (sortState === 0) {
            // 첫 클릭: 오름차순
            sortData = [...initialData].sort((a, b) => a.content.localeCompare(b.content));
            setSortState(1);
        } else if (sortState === 1) {
            // 두 번째 클릭: 내림차순
            sortData = [...initialData].sort((a, b) => b.content.localeCompare(a.content));
            setSortState(2);
        } else {
            // 세 번째 클릭: 초기 상태로 리셋
            sortData = tabledata;
            setSortState(0);
        }

        setInitialData(sortData); // 정렬된 데이터 상태 업데이트
    };


    return (
        <div className="flex flex-col gap-10 min-h-56">
            <div className="flex flex-col gap-4 h-[600px]">
                <div className='flex items-center gap-4'>
                    <h5 className='flex-none'>Default</h5>
                    <div className="w-full h-px bg-silver-400"></div>
                </div>

                <Table hgt="500px">
                    <TableColGroup
                        columnCount={5}
                        widths={{ 0: '40px', 2: '16%', 3: '16%', 4: '16%' }}
                    />
                    <TableHead>
                        <TableRow>
                            <TableHeadCell unsorted><Checkbox /></TableHeadCell>
                            <TableHeadCell onSort={handleSort}>column1</TableHeadCell>
                            <TableHeadCell onSort={handleSort}>column2</TableHeadCell>
                            <TableHeadCell unsorted>column3</TableHeadCell>
                            <TableHeadCell unsorted>column4</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {initialData.map((row, idx) => (
                            <TableRow key={idx} striped hoverable>
                                <TableCell>{row.code}</TableCell>
                                <TableCell align="left">{row.content}</TableCell>
                                <TableCell>{row.content}</TableCell>
                                <TableCell align="right">{row.content}</TableCell>
                                <TableCell align="right">{row.content}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex flex-col gap-4 h-[600px]">
                <div className='flex items-center gap-4'>
                    <h5 className='flex-none'>가로 헤더 테이블</h5><div className="w-full h-px bg-silver-400"></div>
                </div>

                <Table hgt="500px">
                    <TableColGroup
                        columnCount={2}
                        widths={{0: '200px',}}
                    />
                    <TableBody>
                        {initialData.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableHeadCell align="left" unsorted>column3</TableHeadCell>
                                <TableCell align="left">{row.content}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export const root: CodeData = {
    title: "Table Examples",
    type: 'single',
    code: [
        {
            fileName: 'client',
            language: 'tsx',
            code,
        },
    ],
    githubSlug: 'table/table.root.tsx',
    component: <Component />,
};
