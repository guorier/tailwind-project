import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/tabs";

export default function tabslDoc() {
    return (
        <div className='mx-auto max-w-7xl pt-6'>
            <h3 className='mb-4 font-bold'>Tabs</h3>
            <div className="flex flex-col justify-center gap-8 p-8 text-white bg-[#1e293b] rounded-lg">
                <div className='flex flex-col gap-1'>
                    <TagS>&#60;<TagY>ModernTab</TagY></TagS>
                    <div className="pl-4">
                        <TagP>kind</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>lin, underline</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;탭의 스타일을 설정하는 속성</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>height</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>36, 44, 48, 56</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;높이값 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>tabsData</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>함수명</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;tabs 속성에는 탭 데이터를 반환하는 함수</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className="flex items-center gap-4">
                        <h5 className="flex-none font-bold">속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>kind</div>
                        <div className="leading-5">
                            <div>탭의 스타일을 설정하는 속성입니다.</div>
                            <div>- <TagG>line</TagG> : 탭에 얇은 라인을 표시합니다.</div>
                            <div>- <TagG>underline</TagG> : 밑줄 스타일로 설정합니다.</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4">
                        <div>height</div>
                        <div className="leading-5">
                            <div>높이를 지정하며, 픽셀 단위의 여러 값(<TagG>36, 44, 48, 56</TagG>)을 지원하여 다양한 디자인 요구에 맞게 설정할 수 있습니다.</div>
                            <div>
                                또는 일회성 <TagP>width</TagP> 특정값을 사용해야 하는 경우&nbsp;
                                <TagG>h-[숫자]</TagG> 대괄호안에 CSS 단위(예: <TagG>"[200px]", "[100%]"</TagG>)로 설정할 수 있습니다
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>tabsData</div>
                        <div>탭속성에는 탭 데이터를 반환하는 함수가 들어갑니다</div>
                    </div>
                </div>
            </div>
            <DocPage root={root} />
        </div>
    );
}