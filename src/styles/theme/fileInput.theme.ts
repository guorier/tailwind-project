import type { FlowbiteFileInputTheme } from '@/components/FileInput/items';

const fileInput: FlowbiteFileInputTheme = {
    root: {
        base: 'flex',
    },
    field: {
        base: 'relative w-full',
        input: {
            base: 'rounded-lg overflow-hidden block w-full border disabled:cursor-default disabled:opacity-50 ',
            sizes: {
                sm: 'sm:text-xs',
                md: 'text-sm',
                lg: 'sm:text-md',
            },
            colors: {
                gray: 'bg-line-50 border-gray-300 text-silver-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-silver-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
                info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
                failure:
                    'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
                warning:
                    'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
                success:
                    'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
            },
            label: 'flex flex-col items-center justify-center py-1 w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-white',
        },

    },
};
export default fileInput