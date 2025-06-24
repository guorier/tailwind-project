"use client"
import React, { ReactNode } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import ToastModal from "@components/Toast/ToastModal"
import { useDispatch } from "react-redux";
import { openToast } from "@/redux/features/toastSlice";
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';
import { Button } from "@/components/Button/Button";


const code = `
`;

function Component() {
    const dispatch = useDispatch(); // useDispatch 훅을 사용하여 Redux의 dispatch 함수를 가져옵니다.
    // 토스트 메시지를 열기 위한 함수
    const handleOpenToast = (type: string) => {
        if (type === "success") {
            // 토스트 메시지에 표시될 내용을 설정합니다.
            const content = (
                <>The operation was completed successfully.</>
            );
            dispatch(openToast({ content, toastType: type })); // openToast 액션을 디스패치하여 토스트 메시지를 엽니다.
        }
        else if (type === "failure") {
            const content = (
                <>The action could not be completed. Please try again.</>
            );
            dispatch(openToast({ content, toastType: type }));
        }
        else if (type === "warning") {
            const content = (
                <>You do not have the necessary permissions to access this feature.</>
            );
            dispatch(openToast({ content, toastType: type }));
        }
    };

    const Tagtitle = ({ children }: { children: ReactNode }) => (
        <div className='flex items-center gap-4'>
            <h5 className='flex-none'>{children}</h5>
            <div className="w-full h-px bg-silver-400" />
        </div>
    );
    const Sample = ({ children }: { children: ReactNode }) => (
        <div className="flex items-center py-2 px-3 min-w-72 max-w-lg bg-white rounded-lg border border-gray-300 shadow">
            <div className="w-full flex items-center gap-2">
                {children}
                <button className="-mx-1.5 -my-1.5 ml-auto p-1.5 inline-flex size-8 min-w-8 max-w-8 text-natural-500 rounded-lg bg-silver-100 hover:bg-silver-300 hover:text-natural-900">
                    <HiX className="size-5 shrink-0" />
                </button>
            </div>
        </div>
    )

    const icon = "flex justify-center items-center size-8 rounded-lg"
    const comment = "text-sm font-normal text-natural-900"

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-4'>
                    <h5 className='flex-none'>Example</h5><div className="w-full h-px bg-silver-400" />
                </div>
                <div className="flex items-center gap-4">
                    <Button onClick={() => handleOpenToast("success")}>성공</Button>
                    <Button onClick={() => handleOpenToast("failure")}>실패</Button>
                    <Button onClick={() => handleOpenToast("warning")}>경고</Button>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
                    <Tagtitle>Success</Tagtitle>
                    <Sample>
                        <div className={`${icon} text-valid-100 bg-valid-100/10`}><HiCheck className="size-5" /></div>
                        <div className={comment}>The operation was completed successfully.</div>
                    </Sample>
                </div>
                <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
                    <Tagtitle>Error</Tagtitle>
                    <Sample>
                        <div className={`${icon} text-error-100 bg-error-100/10`}><HiX className="size-5" /></div>
                        <div className={comment}>The action could not be completed. Please try again.</div>
                    </Sample>
                </div>
                <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
                    <Tagtitle>Warning</Tagtitle>
                    <Sample>
                        <div className={`${icon} text-warning-100 bg-warning-100/10`}><HiExclamation className="size-5" /></div>
                        <div className={comment}>You do not have the necessary permissions to access this feature.</div>
                    </Sample>
                </div>
            </div>
            <ToastModal />
        </div>
    );
}

export const root: CodeData = {
    title: "ToastModal Examples",
    type: "single",
    code: [
        {
            fileName: "client",
            language: "tsx",
            code,
        },
    ],
    githubSlug: "toast/toast.root.tsx",
    component: <Component />,
};
