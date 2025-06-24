const IconSource = [
    { name: "iconEyeOff", src: "/images/eye_off.svg" },
    { name: "iconEyeOn", src: "/images/eye_on.svg" },
    { name: "iconAccodian", src: "/images/icon_accodian.svg" },
    { name: "iconAccodianG", src: "/images/icon_accodian_g.svg" },
    { name: "iconAdd", src: "/images/icon_add.svg" },
    { name: "iconArrowclockwise", src: "/images/icon_arrowclockwise.svg" },
    { name: "iconBoardDelete", src: "/images/icon_board_delete.svg" },
    { name: "iconBoardEdit", src: "/images/icon_board_edit.svg" },
    { name: "iconChk", src: "/images/icon_chk.svg" },
    { name: "iconClose", src: "/images/icon_close.svg" },
    { name: "iconClose2", src: "/images/icon_close2.svg" },
    { name: "iconCompleted", src: "/images/icon_completed.svg" },
    { name: "iconDate", src: "/images/icon_date.svg" },
    { name: "iconDirection", src: "/images/icon_direction.svg" },
    { name: "iconDirectionDown", src: "/images/icon_direction_down.svg" },
    { name: "iconDirectionUp", src: "/images/icon_direction_up.svg" },
    { name: "iconDisabledChk", src: "/images/icon_disabled_chk.svg" },
    { name: "iconEmpty", src: "/images/icon_empty.svg" },
    { name: "iconEmpty2", src: "/images/icon_empty2.svg" },
    { name: "iconFail", src: "/images/icon_fail.svg" },
    { name: "iconFilesearch", src: "/images/icon_filesearch.svg" },
    { name: "iconFileuploed", src: "/images/icon_fileuploed.svg" },
    { name: "iconFolder", src: "/images/icon_folder.svg" },
    { name: "iconImg_Empty", src: "/images/icon_img_empty.svg" },
    { name: "iconImg", src: "/images/icon_img.svg" },
    { name: "iconImg2", src: "/images/icon_img2.svg" },
    { name: "iconImg3", src: "/images/icon_img3.svg" },
    { name: "iconInfo", src: "/images/icon_info.svg" },
    { name: "iconManintenance", src: "/images/icon_manintenance.svg" },
    { name: "iconMaximize", src: "/images/icon_maximize.svg" },
    { name: "iconMove", src: "/images/icon_move.svg" },
    { name: "iconNew", src: "/images/icon_new.svg" },
    { name: "iconNotFound", src: "/images/icon_not_found.svg" },
    { name: "iconNoticePin", src: "/images/icon_notice_pin.svg" },
    { name: "iconNoticePoint", src: "/images/icon_notice_point.svg" },
    { name: "iconPageLeft", src: "/images/icon_page_left.svg" },
    { name: "iconPageRight", src: "/images/icon_page_right.svg" },
    { name: "iconPaper", src: "/images/icon_paper.svg" },
    { name: "iconPoint", src: "/images/icon_point.svg" },
    { name: "iconPoint2", src: "/images/icon_point2.svg" },
    { name: "iconRestore", src: "/images/icon_restore.svg" },
    { name: "iconSave", src: "/images/icon_save.svg" },
    { name: "iconScreenshot", src: "/images/icon_screenshot.svg" },
    { name: "iconSelect", src: "/images/icon_select.svg" },
    { name: "iconSelectArr", src: "/images/icon_select_arr.svg" },
    { name: "iconDoubleLeft", src: "/images/icon_dp_left.svg" },
    { name: "iconDoubleRight", src: "/images/icon_dp_right.svg" },
    { name: "iconLeft", src: "/images/icon_p_left.svg" },
    { name: "iconRight", src: "/images/icon_p_right.svg" },
    { name: "iconSearch", src: "/images/icon_search.svg" },
    { name: "iconDelete", src: "/images/icon_delete.svg" },
    { name: "iconClouds", src: "/images/icon_clouds.svg" },
    { name: "iconPower", src: "/images/icon_power.svg" },
];

export type iName = typeof IconSource[number]['name'];

interface IconProps {
    iName: iName | string;
    iState?: 'iconHover' | "colors";
    className?: string;
    title?: string;
}

export const Icon = ({ iName, iState, className, title }: IconProps) => {
    const icon = IconSource.find(item => item.name === iName);

    const iconStyle = iState === 'iconHover' || iState === 'colors' ? {
        WebkitMaskImage: `url(${icon?.src})`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        WebkitMaskPosition: 'center',
    } : {
        backgroundImage: `url(${icon?.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };

    const getColor = () => {
        if (iState === 'iconHover') {
            return 'cursor-pointer bg-natural-900 hover:bg-natural-500';
        }
        if (iState === 'colors') {
            return 'bg-[#070a3d]';
        }
        return '';
    };

    return <i className={`${getColor()} ${className}`} style={iconStyle} title={title} />
};