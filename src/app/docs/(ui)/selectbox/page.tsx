import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/selectbox";

export default function DropdownDoc() {

    return (
        <div className='mx-auto max-w-7xl pt-6'>
            <h3 className='mb-4 font-bold'>SelectBox</h3>
            <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>SelectBox</TagY></TagS>
                    <div className="pl-4">
                        <TagP>options</TagP>
                        <TagS>=&#34;<TagG>options 값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;사용자가 선택할 수 있는 값들의 목록</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>onChange</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>함수명</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;옵션을 선택할 때 호출되는 콜백 함수</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>value</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>value 값</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;SelectBox에서 현재 선택된 옵션값</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>borderRadius</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>round, underline</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;라운드 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>width</TagP>
                        <TagS>=&#34;<TagG>너비값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;width 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>optionWidth</TagP>
                        <TagS>=&#34;<TagG>full, auto</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;option 너비 설정</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <h5 className='flex-none font-bold'>속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                    <div className="font-medium leading-5">SelectBox 예제입니다.</div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>options</div>
                        <div className="leading-5">
                            <div>사용자가 선택할 수 있는 값들의 목록입니다.</div>
                            <div>드롭다운 메뉴에 표시될 각 옵션을 나타냅니다.</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>onChange</div>
                        <div className="leading-5">
                            <div>사용자가 옵션을 선택할 때 호출되는 콜백 함수입니다.</div>
                            <div>이 함수는 선택된 옵션 값을 인자로 받아 변경 이벤트를 처리할 수 있습니다.</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>value</div>
                        <div>현재 선택된 옵션 값, 이 속성은 드롭다운의 선택된 상태를 제어하며, 어떤 옵션이 선택되었는지를 표시합니다.</div>
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>borderRadius</div>
                        <div className="leading-5">
                            <div>모서리 스타일을 설정하는 속성입니다</div>
                            <div>- <TagG>round</TagG> : 둥근 모서리로 설정합니다.</div>
                            <div>- <TagG>underline</TagG> : 밑줄 스타일로 설정합니다.</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4">
                        <div>width</div>
                        <div className="leading-5">
                            <div>입력 필드의 <TagP>width</TagP>를 설정합니다.</div>
                            <div>테일윈드 제공값(예: <TagG>"w-12"</TagG>, <TagG>"w-20"</TagG>)로 설정할수 있습니다</div>
                            <div>또는 일회성 <TagP>width</TagP> 특정값을 사용해야 하는 경우 <TagG>w-[숫자]</TagG></div>
                            <div>대괄호안에 CSS 단위(예: <TagG>"[200px]"</TagG>, <TagG>"[100%]"</TagG>)로 설정할 수 있습니다</div>
                            <div><TagP>width</TagP>값이 없을 때는 <TagG>&#34;auto&#34;</TagG>로 기본값 설정됩니다</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4">
                        <div>optionWidth</div>
                        <div className="leading-5">
                            <div>option의 <TagP>width</TagP>를 설정합니다.</div>
                            <div>- <TagG>full</TagG> : SelectBox의 너비와 동일하게 설정됩니다.</div>
                            <div>- <TagG>auto</TagG> : 내용에 맞춰 드롭다운 메뉴의 너비가 자동으로 결정됩니다.</div>
                        </div>
                    </div>
                </div>
            </div>

            <DocPage root={root} />
        </div>
    );
}