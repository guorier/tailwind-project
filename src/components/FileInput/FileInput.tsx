'use client'

import type { ChangeEvent, ComponentProps } from 'react';
import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import type { DeepPartial, InputColors, InputSizes } from '@/types/theme';
import type { FileInputTheme } from './items';
import fileInputTheme from '@styles/theme/fileInput.theme';
import { getByteSize } from '@/utiles/file';

const MAX_FILE_COUNT = 5;

interface FileInputProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
  color?: keyof InputColors;
  sizing?: keyof InputSizes;
  theme?: DeepPartial<FileInputTheme>;
  /** 첨부 가능한 최대 파일 개수. */
  maxFileCount?: number;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className,
      color = 'gray',
      sizing = 'md',
      theme: customTheme = {},
      maxFileCount = MAX_FILE_COUNT,
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(fileInputTheme, customTheme);
    const [files, setFiles] = useState<File[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const selected = Array.from(event.target.files ?? []);
      event.target.value = '';

      // 이미 담긴 파일과 이름이 겹치는 항목은 제외한다.
      const added = selected.filter(
        (file) => !files.some((attached) => attached.name === file.name),
      );

      if (files.length + added.length > maxFileCount) {
        alert(`첨부파일은 최대 ${maxFileCount}개 까지 첨부 가능합니다.`);
        return;
      }

      setFiles((prev) => [...prev, ...added]);
    };

    return (
      <>
        <div className={twMerge(theme.root.base, className)}>
          <div className={theme.field.base}>
            <input
              {...props}
              type="file"
              ref={ref}
              className={twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
              )}
              onChange={handleChange}
            />
          </div>
        </div>

        {files.length > 0 && (
          <div className="filelistbox">
            {files.map((file) => (
              <div key={file.name} className="mb-1 flex items-center gap-2">
                <span className="text-base font-medium text-silver-700">{file.name}</span>
                <span className="text-sm font-normal text-silver-400">{getByteSize(file.size)}</span>
              </div>
            ))}
          </div>
        )}
      </>
    );
  },
);

FileInput.displayName = 'FileInput';
