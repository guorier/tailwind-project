import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/color";

export default function CheckboxDoc() {

    return (
        <div className='mx-auto max-w-7xl pt-6'>
            <h3 className='mb-4 font-bold'>Color</h3>
            <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
                <div className="flex items-center gap-1">
                    <TagS>&#60;<TagY>div</TagY></TagS>
                    <TagP>className</TagP>
                    <TagS>=&#34;<TagG>text-색상-명도 bg-색상-명도</TagG>&#34;</TagS>
                    <TagS>&#47;&#62;</TagS>
                    <TagSi>&nbsp;&nbsp;&#47;&#47;색상이름은 색상 팔레트에서 선택, '명도값'은 100부터 900까지의 범위로, 숫자가 클수록 색상이 어두워짐</TagSi>
                </div>

                {/* --------------------------------------------------------------------------- */}
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <h5 className='flex-none font-bold'>속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                </div>
                <div className="font-medium leading-5">
                    <div>클래스를 사용하여 다양한 색상을 시각화한 표입니다.</div>
                    <div>각 클래스명은 색상과 그 명도의 조합을 나타내며, 다음과 같은 형식을 따릅니다</div>
                    <div><TagG>bg- / text-</TagG> : 배경 색상을 지정하는 Tailwind CSS의 접두사입니다.</div>
                    <div><TagG>색상</TagG> : 사용할 색상의 이름을 나타냅니다. 예를 들어, <TagG>red, blue, green</TagG> 등이 올 수 있습니다.</div>
                    <div><TagG>명도</TagG> : 배색상의 밝기를 나타내는 숫자로, 일반적으로 50에서 900까지의 값으로 명시됩니다. 숫자가 클수록 더 진한 색상이 적용됩니다.</div>
                </div>
            </div>

            <DocPage root={root} />
        </div>
    );
}