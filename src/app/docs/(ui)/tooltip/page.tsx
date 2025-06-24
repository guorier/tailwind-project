import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/tooltip";

export default function Tooltip() {
    return (
        <div className='mx-auto max-w-7xl pt-6'>
            <h3 className='mb-4 font-bold'>Tooltip</h3>
            <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>Tooltip</TagY></TagS>
                    <div className="pl-4">
                        <TagP>content</TagP>
                        <TagS>=&#34;<TagG>Tooltip on text</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;Tooltip의 보여진 텍스트값</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>borderRadius</TagP>
                        <TagS>=&#34;<TagG>round, pill</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;라운드 설정</TagSi>
                    </div>
                    <TagS>&#62;</TagS>
                    <div className="pl-4">
                        텍스트값 또는 아이콘
                    </div>
                    <TagS>&#60;&#47;<TagY>Tooltip</TagY>&#62;</TagS>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <h5 className='flex-none font-bold'>속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <TagP>content</TagP>
                        <div>
                            툴팁에 표시될 내용입니다. 마우스를 텍스트나 아이콘 위에 올리면 "Tooltip on text"라는 텍스트가 툴팁으로 나타납니다.
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <TagP>borderRadius</TagP>
                        <div className="leading-5">
                            <div>모서리 스타일을 설정하는 속성입니다</div>
                            <div>- <TagG>round</TagG> : 둥근 모서리로 설정합니다.</div>
                            <div>- <TagG>underline</TagG> : 밑줄 스타일로 설정합니다.</div>
                        </div>
                    </div>
                </div>
            </div>

            <DocPage root={root} />
        </div >
    );
}