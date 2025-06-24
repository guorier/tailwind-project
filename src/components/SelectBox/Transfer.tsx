import React, { useState, FC, forwardRef, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Button } from "@/components/Button/Button";
import { Icon } from '@/components/Icons';
import { Empty } from "@/components/Empty";

interface TransferProps extends Omit<ComponentProps<"div">, "onChange"> {
    // theme?: DeepPartial<MultiSelectStyle>;
    initialItems: { value: string; label: string }[]; // 'value'와 'label' 값이 있는 객체 배열
}

export const Transfer = forwardRef<HTMLDivElement, TransferProps>(
    ({
        // className,
        // theme: customTheme = {},
        initialItems
    }) => {

        const [aItems, setAItems] = useState(initialItems);
        const [bItems, setBItems] = useState<{ value: string; label: string }[]>([]);
        const [selectedItems, setSelectedItems] = useState<string[]>([]);

        // 항목 선택 처리
        const handleSelectItem = (item: string) => {
            setSelectedItems((prevSelected) =>
                prevSelected.includes(item) ? prevSelected.filter((i) => i !== item) : [...prevSelected, item]
            );
        };

        // 전체 선택 / 해제
        const handleSelectAll = (fromA: boolean) => {
            const items = fromA ? aItems : bItems;
            const areAllSelected = items.every((item) => selectedItems.includes(item.value));
            setSelectedItems(areAllSelected ? selectedItems.filter((item) => !items.some((i) => i.value === item)) : [...selectedItems, ...items.map((i) => i.value)]);
        };

        // 항목 이동
        const moveRight = () => {
            const itemsToMove = selectedItems.filter((item) => aItems.some((i) => i.value === item));
            setBItems((prevBItems) => [
                ...prevBItems,
                ...aItems.filter((item) => itemsToMove.includes(item.value)),
            ]);
            setAItems((prevAItems) =>
                prevAItems.filter((item) => !itemsToMove.includes(item.value))
            );
            setSelectedItems((prevSelected) =>
                prevSelected.filter((item) => !itemsToMove.includes(item))
            );
        };

        const moveLeft = () => {
            const itemsToMove = selectedItems.filter((item) => bItems.some((i) => i.value === item));
            setAItems((prevAItems) => [
                ...prevAItems,
                ...bItems.filter((item) => itemsToMove.includes(item.value)),
            ]);
            setBItems((prevBItems) =>
                prevBItems.filter((item) => !itemsToMove.includes(item.value))
            );
            setSelectedItems((prevSelected) =>
                prevSelected.filter((item) => !itemsToMove.includes(item))
            );
        };

        // 전체 선택 체크 여부와 버튼 활성화 상태
        const isASelectAllChecked =
            aItems.length > 0 && aItems.every((item) => selectedItems.includes(item.value));
        const isBSelectAllChecked =
            bItems.length > 0 && bItems.every((item) => selectedItems.includes(item.value));
        const isMoveRightDisabled =
            selectedItems.every((item) => bItems.some((i) => i.value === item)) || selectedItems.length === 0;
        const isMoveLeftDisabled =
            selectedItems.every((item) => aItems.some((i) => i.value === item)) || selectedItems.length === 0;

        return (
            <div className="flex gap-5">
                <div className="flex flex-col gap-2 p-3 border border-silver-300 rounded-md ">
                    <div className="flex items-center gap-4 pb-2 border-b border-silver-300">
                        <Checkbox label="All" onChange={() => handleSelectAll(true)} checked={isASelectAllChecked} disabled={aItems.length === 0} />
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-semibold">Source</span>
                            <div className="flex items-center text-sm">
                                <div className="w-5 text-center">{aItems.filter((item) => selectedItems.includes(item.value)).length}</div>
                                /
                                <div className="w-5 text-center">{aItems.length}</div>
                                item
                            </div>
                        </div>
                    </div>

                    {aItems.length ?
                        <ul className="flex flex-col gap-2 items-start max-h-40 overflow-auto">
                            {aItems.map((item) => (
                                <li key={item.value}>
                                    <Checkbox label={item.label} onChange={() => handleSelectItem(item.value)} checked={selectedItems.includes(item.value)}/>
                                </li>
                            ))}
                        </ul>
                        :
                        <div className="flex flex-col justify-center items-center my-auto">
                            <Empty>No data</Empty>
                        </div>
                    }
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    <Button width="10" radius="round" colors="#E6F4FF" onClick={moveRight} disabled={isMoveRightDisabled}>
                        <Icon iName="iconPageRight" className="size-3" />
                    </Button>
                    <Button width="10" radius="round" colors="#E6F4FF" onClick={moveLeft} disabled={isMoveLeftDisabled}>
                        <Icon iName="iconPageLeft" className="size-3" />
                    </Button>
                </div>

                <div className="flex flex-col gap-2 p-3 border border-silver-300 rounded-md ">
                    <div className="flex items-center gap-4 pb-2 border-b border-silver-300">
                        <Checkbox
                            label="All"
                            onChange={() => handleSelectAll(false)}
                            checked={isBSelectAllChecked}
                            disabled={bItems.length === 0}
                        />
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-semibold">Target</span>
                            <div className="flex items-center text-sm">
                                <div className="w-5 text-center">{bItems.filter((item) => selectedItems.includes(item.value)).length}</div>
                                /
                                <div className="w-5 text-center">{bItems.length}</div>
                                item
                            </div>
                        </div>
                    </div>

                    {bItems.length ?
                        <ul className="flex flex-col gap-2 items-start max-h-40 overflow-auto">
                            {bItems.map((item) => (
                                <li key={item.value} >
                                    <Checkbox
                                        label={item.label}
                                        checked={selectedItems.includes(item.value)}
                                        onChange={() => handleSelectItem(item.value)}
                                    />
                                </li>
                            ))}
                        </ul>
                        :
                        <div className="flex flex-col justify-center items-center my-auto">
                            <Empty>No data</Empty>
                        </div>
                    }
                </div>




            </div>
        );
    }
);

Transfer.displayName = "Transfer";