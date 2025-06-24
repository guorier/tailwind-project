import React, { useState, useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear, addYears } from "date-fns";
import { ko } from "date-fns/locale";
import moment from "moment";
import range from "lodash/range";
import { twMerge } from 'tailwind-merge';
import { SelectBox } from '@/components/SelectBox/SelectBox';



interface DatepickerProps {
    name: string;
    value: string | null;
    setDate: (date: string | null) => void;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    placeholderText?: string;
    maxYearAdd?: number;
    minYearAdd?: number;
    className?: string;
}

export const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>(
    ({
        name,
        value,
        setDate,
        disabled = false,
        minDate,
        maxDate,
        placeholderText = "",
        maxYearAdd,
        minYearAdd = -10,
        className,
    }) => {
        const [inputValue, setInputValue] = useState<string | null>(null);
        const [selected, setSelected] = useState<Date | null>(null);
        const [isOpen, setIsOpen] = useState(false);
        const [selectedYear, setSelectedYear] = useState<number>(getYear(new Date()));
        const [selectedMonth, setSelectedMonth] = useState<number>(getMonth(new Date()));

        const addYear = maxYearAdd ?? 10;
        const years = range(getYear(new Date()) + minYearAdd, getYear(new Date()) + addYear + 1);
        const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

        useEffect(() => {
            if (value && moment(value, 'YYYY-MM-DD', true).isValid()) {
                setSelected(new Date(value));
                setInputValue(value);
            } else {
                setSelected(null);
                setInputValue("");
            }
        }, [value]);

        const selectChange = (date: Date | null) => {
            if (date) {
                const dateValue = moment(date).format('YYYY-MM-DD');
                setDate(dateValue);
                setInputValue(dateValue);
            } else {
                setDate(null);
                setInputValue("");
            }
            setIsOpen(false);
        };
        const inputChange = (dateValue: string) => {
            dateValue = dateValue ?? '';
            dateValue = dateValue.replace(/[^0-9\-]/g, '');

            if (dateValue) {
                const lastWord = dateValue.substring(dateValue.length - 1);
                let dateNum = dateValue.replace(/\-/g, '');
                let year = dateNum.substring(0, 4);
                let month = dateNum.substring(4, 6);
                let day = dateNum.substring(6, 8);

                if (lastWord === '-') {
                    dateNum = dateNum.substring(0, dateNum.length - 1);
                }

                if (Number(month) > 12) month = '12';
                if (month === '00') month = '01';

                const maxDay = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
                if (Number(day) > maxDay) day = maxDay.toString();
                if (day === '00') day = '01';

                dateValue = `${year}${month ? '-' + month : ''}${day ? '-' + day : ''}`;
                setInputValue(dateValue);

                if (moment(dateValue, 'YYYY-MM-DD', true).isValid()) {
                    setDate(dateValue);
                } else {
                    setDate(null);
                }
            } else {
                setDate(null);
            }
        };
        const openCalendar = () => setIsOpen(true);

        const dateDiv = 'flex items-center justify-center px-3 w-42 min-w-42 text-natural-900 border border-gray-300 focus-within:border-natural-900'
        const dateDisabled = 'bg-silver-200'
        const dateInput = '!px-0 w-full h-10 text-natural-900 leading-none border-0 disabled:bg-silver-200'
        const dateIco = 'cursor-pointer size-5 min-w-5 bg-transparent bg-no-repeat bg-center bg-contain bg-date';
        const buttonCommon = "flex items-center after:content-[''] after:block after:cursor-pointer after:size-4 after:bg-transparent after:bg-no-repeat after:bg-center after:bg-contain";

        return (
            <div className={twMerge(
                "date-wrap",
                dateDiv,
                disabled && dateDisabled,
                className,
            )}
            >
                <DatePicker
                    className={dateInput}
                    name={name}
                    locale={ko}
                    open={isOpen}
                    onChangeRaw={(event) => inputChange((event?.target as HTMLInputElement).value)}
                    onSelect={(date) => selectChange(date)}
                    onInputClick={() => setIsOpen(false)}
                    onClickOutside={() => setIsOpen(false)}
                    onBlur={() => setIsOpen(false)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText={placeholderText}
                    value={inputValue || ""}
                    selected={selected}
                    disabled={disabled}
                    minDate={minDate || addYears(new Date(), minYearAdd)}
                    maxDate={maxDate || addYears(new Date(), addYear)}
                    disabledKeyboardNavigation
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <div className="flex justify-evenly items-center gap-1 px-2">
                            <button type="button"
                                className={twMerge(buttonCommon, "after:bg-previous")}
                                disabled={prevMonthButtonDisabled}
                                aria-label="Previous Month"
                                onClick={decreaseMonth}
                            />
                            <div className="m-0 grid grid-cols-[1fr_0.8fr] items-center gap-1 flex-1">
                                <SelectBox
                                    className="h-8 px-2"
                                    options={years.map((year) => ({ value: year.toString(), label: `${year}년` }))}
                                    value={selectedYear.toString()}
                                    onChange={(value) => {
                                        setSelectedYear(Number(value));
                                        changeYear(Number(value));
                                    }}
                                />

                                <SelectBox
                                    className="h-8 px-2"
                                    options={months.map((month, index) => ({ value: index.toString(), label: month }))}
                                    value={selectedMonth.toString()}
                                    onChange={(value) => {
                                        setSelectedMonth(Number(value));
                                        changeMonth(Number(value));
                                    }}
                                />
                            </div>
                            <button type="button"
                                className={twMerge(buttonCommon, "after:bg-next")}
                                disabled={nextMonthButtonDisabled}
                                aria-label="Next Month"
                                onClick={increaseMonth}
                            />
                        </div>
                    )}
                />
                <div
                    className={twMerge(
                        dateIco,
                        disabled && "cursor-default"
                    )}
                    onClick={() => !disabled && openCalendar()}
                />
            </div>
        );
    }
);

Datepicker.displayName = "Datepicker";
