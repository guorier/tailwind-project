"use client"
import React, { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { closeConfirm, openConfirm } from "@/redux/features/confirmSlice";
import { openAlert } from "@/redux/features/alertSlice";
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/index";
import { HiOutlineX } from "react-icons/hi";
import { Icon } from '@/components/Icons';

const code = ``;
const labels = ["Default"];
const Gridline = () => (
    <div className="flex flex-col gap-4">
        <div className="w-full h-7 flex items-center"><div className="w-full h-px bg-silver-300" /></div>
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
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        dispatch(openAlert({
            content: "삭제하시겠습니까?",
            paragraph: "삭제된 정보는 복구가 안됩니다.",
            alertType: 3
        }));
    }

    const handleConfirm = () => {
        dispatch(openConfirm({
            content: "일정을 삭제하시겠습니까?",
            paragraph: "삭제된 정보는 복구가 안됩니다.",
            rightText: "확인",
            rightClick: () => {
                dispatch(closeConfirm());
            }
        }))
    }
    return (
        <div className="flex flex-col gap-10 min-h-56">
            <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
                <Gridline />
                <div className="grid grid-cols-5 gap-4">
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Modal</Gridtitle>
                        <Button onClick={() => setOpenModal(true)}>모달열기</Button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Confirm</Gridtitle>
                        <Button onClick={handleConfirm}>컨펌창 열기</Button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Gridtitle>Alert</Gridtitle>
                        <Button onClick={handleClick}>알럿창 열기</Button>
                    </div>
                </div>
            </div>


            <div className='flex flex-col gap-10'>
                <div className="flex flex-col gap-4 w-[600px]">
                    <Gridtitle>Modal</Gridtitle>
                    <div className="relative flex flex-col gap-6 p-6 max-h-[90vh] rounded-2xl bg-white shadow border border-silver-200">
                        <div className="flex items-start justify-between rounded-t border-b">
                            <h3 className="text-xl font-medium text-silver-900 dark:text-white">Modal.제목</h3>
                            <button type="button"
                                className="ml-auto inline-flex items-center
                                p-1.5 text-sm text-silver-400
                                rounded-lg bg-transparent
                                hover:bg-silver-200 hover:text-silver-900 dark:hover:bg-silver-600 dark:hover:text-white"
                            >
                                <HiOutlineX className="size-5" />
                            </button>
                        </div>
                        <div className="overflow-auto flex-1">
                            <div>
                                Modal.내용
                                <p className="text-base leading-relaxed text-line-500">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-end space-x-2 rounded-b border-gray-200 pt-6 dark:border-gray-600 border-t">
                            <button className="relative flex items-center justify-center gap-2
                                px-4 min-w-20 w-auto h-10.5 
                                font-semibold text-sm text-center text-natural-900 
                                border focus:opacity-80 disabled:text-natural-300 disabled:bg-silver-200 disabled:border-gray-300border-natural-900 hover:bg-primary-50 focus:bg-primary-50 rounded-none"
                            >닫기
                            </button>
                            <button className="relative flex items-center justify-center gap-2
                                px-4 min-w-20 w-auto h-10.5
                                font-semibold text-sm text-center text-white
                                focus:opacity-90 disabled:text-natural-300 disabled:bg-silver-200 bg-natural-900 hover:bg-natural-800 focus:bg-natural-800 rounded-none"
                            >확인
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[416px]">
                    <Gridtitle>Confirm</Gridtitle>
                    <div className="relative flex flex-col gap-6 p-6  rounded-2xl bg-white shadow border border-silver-200">
                        <div className="absolute top-0 right-0">
                            <button aria-label="Close" className="flex justify-center items-center size-11">
                                <Icon iName="iconClose" className="size-3" />
                            </button>
                        </div>
                        <div>
                            <Icon iName="iconPoint" className="size-9 mt-4" />
                            <div className="flex flex-col gap-1 pt-2 font-semibold text-lg">로그아웃을 하시겠습니까?
                                <div className="paragraph font-normal text-sm text-neutral-400">삭제된 정보는 복구가 안됩니다.</div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-2">
                            <button className="relative flex items-center justify-center gap-2 min-w-20 px-4 w-5 h-10.5 
                                font-semibold text-center text-sm text-natural-900
                                rounded-none border focus:opacity-80 disabled:text-natural-300 disabled:bg-silver-200 disabled:border-gray-300
                                border-natural-900 hover:bg-primary-50 focus:bg-primary-50"
                            >취소
                            </button>
                            <button className="relative flex items-center justify-center gap-2 min-w-20
                                font-semibold text-center text-white focus:opacity-90 disabled:text-natural-300
                                disabled:bg-silver-200 bg-natural-900 hover:bg-natural-800 focus:bg-natural-800
                                px-4 rounded-none w-5 h-10.5 text-sm"
                            >확인
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[416px]">
                    <Gridtitle>Alert</Gridtitle>
                    <div className="relative flex flex-col gap-6 p-6  rounded-2xl bg-white shadow border border-silver-200">
                        <div className="absolute top-0 right-0">
                            <button aria-label="Close" className="flex justify-center items-center size-11">
                                <Icon iName="iconClose" className="size-3" />
                            </button>
                        </div>
                        <div>
                            <Icon iName="iconPoint" className="size-9 mt-4" />
                            <div className="flex flex-col gap-1 pt-2 font-semibold text-lg">
                                게시글을 저장 하시겠습니까?
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-2">
                            <button className="relative flex items-center justify-center gap-2
                            px-4 min-w-20 w-5 h-10.5
                            font-semibold text-sm text-center text-white
                            focus:opacity-90 disabled:text-natural-300 disabled:bg-silver-200 bg-natural-900 hover:bg-natural-800 focus:bg-natural-800 rounded-none"
                            >확인
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Modal.Header</Modal.Header>
                <Modal.Body>
                    <div>
                        Modal.Body
                        <p className="text-base leading-relaxed text-line-500">
                            Body Body Body Body Body Body Body Body Body Body Body Body 
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)} styleType="outline">닫기</Button>
                    <Button onClick={() => setOpenModal(false)}>확인</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export const root: CodeData = {
    type: "single",
    code: {
        fileName: "client",
        language: "tsx",
        code,
    },
    githubSlug: "modal/modal.root.tsx",
    component: <Component />,
};
