'use client'

import type { ChangeEvent, ComponentProps, DragEvent, Dispatch, SetStateAction } from 'react';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { HiX } from 'react-icons/hi';
import { mergeDeep } from '@/components/helpers/merge-deep';
import type { DeepPartial, InputColors, InputSizes } from '@/types/theme';
import type { FileInputTheme } from './items';
import fileInputTheme from '@styles/theme/fileInput.theme';
import { getByteSize } from '@/utiles';

interface IFileTypes {
    id: number;
    object: File;
}

interface FileDragAndDropProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
    color?: keyof InputColors;
    sizing?: keyof InputSizes;
    theme?: DeepPartial<FileInputTheme>;
    /** 선택된 파일 목록을 부모로 올려보낸다. */
    setFiles?: Dispatch<SetStateAction<IFileTypes[]>>;
}

const FileDragAndDrop = forwardRef<HTMLInputElement, FileDragAndDropProps>(
    (
        {
            color = 'gray',
            sizing = 'md',
            theme: customTheme = {},
            setFiles,
            id = 'dragdrop',
            ...props
        },
        ref,
    ) => {
        const theme = mergeDeep(fileInputTheme, customTheme);

        const [files, setFileList] = useState<IFileTypes[]>([]);
        const [isDragging, setIsDragging] = useState(false);
        const nextId = useRef(0);

        useEffect(() => {
            setFiles?.(files);
            // setFiles 는 부모에서 매 렌더 새로 생성될 수 있어 의존성에서 제외한다.
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [files]);

        const appendFiles = (selected: FileList | null): void => {
            if (!selected?.length) return;

            const added = Array.from(selected).map((file) => ({
                id: nextId.current++,
                object: file,
            }));

            setFileList((prev) => [...prev, ...added]);
        };

        const removeFile = (targetId: number): void => {
            setFileList((prev) => prev.filter((file) => file.id !== targetId));
        };

        const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
            appendFiles(event.target.files);
            event.target.value = '';
        };

        const handleDragOver = (event: DragEvent<HTMLLabelElement>): void => {
            event.preventDefault();
            setIsDragging(true);
        };

        const handleDragLeave = (event: DragEvent<HTMLLabelElement>): void => {
            event.preventDefault();
            setIsDragging(false);
        };

        const handleDrop = (event: DragEvent<HTMLLabelElement>): void => {
            event.preventDefault();
            appendFiles(event.dataTransfer.files);
            setIsDragging(false);
        };

        return (
            <>
                <div className="DragDrop flex w-full flex-wrap items-center justify-center gap-2">
                    <input
                        {...props}
                        type="file"
                        ref={ref}
                        id={id}
                        multiple
                        className={twMerge(
                            theme.field.input.base,
                            theme.field.input.colors[color],
                            theme.field.input.sizes[sizing],
                            'hidden',
                        )}
                        onChange={handleChange}
                    />

                    <label
                        htmlFor={id}
                        className={twMerge(theme.field.input.label, isDragging && 'border-blue-500')}
                        onDragEnter={handleDragOver}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div className="flex items-center justify-center gap-1 py-3">
                            <AiOutlineCloudUpload className="size-6 text-slate-800" />
                            <p className="text-md text-slate-800">
                                <span className="pr-1 text-blue-500 underline underline-offset-4">내 PC</span>
                                에서 첨부하거나, 파일을 끌어오세요.
                            </p>
                        </div>
                    </label>
                </div>

                {files.length > 0 && (
                    <>
                        <div className="my-4 w-full border-t border-solid border-gray-300" />
                        <div className="DragDrop-Files">
                            {files.map(({ id: fileId, object: { name, size } }) => (
                                <div key={fileId} className="mb-1 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-base font-medium text-silver-700">{name}</span>
                                        <span className="text-sm font-normal text-silver-400">{getByteSize(size)}</span>
                                    </div>
                                    <button
                                        type="button"
                                        aria-label={`${name} 삭제`}
                                        className="rounded-md border border-gray-300 px-1 py-1"
                                        onClick={() => removeFile(fileId)}
                                    >
                                        <HiX />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </>
        );
    },
);

FileDragAndDrop.displayName = 'FileDragAndDrop';

export { FileDragAndDrop, type IFileTypes };
