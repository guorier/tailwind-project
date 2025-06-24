import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import * as root from "@/examples/button";
import DocPage from "@/components/DocPage";

export default function ButtonDoc() {
    return (
        <div className='mx-auto max-w-7xl pt-6'>
            <h3 className='mb-4 font-bold'>Button</h3>

            <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>Button</TagY></TagS>
                    <div className="pl-4">
                        <TagP>children</TagP>
                        <TagS>=&#34;<TagG>Text Content</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;텍스트 내용</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>borderRadius</TagP>
                        <TagS>=&#34;<TagG>round, pill</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;round 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>color</TagP>
                        <TagS>=&#34;<TagG>base, primary, secondary, error, warning, valid</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;색상설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>width</TagP>
                        <TagS>=&#34;<TagG>너비값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;너비값 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>height</TagP>
                        <TagS>=&#34;<TagG>24, 36, 44, 48, 56</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;높이값 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>outline</TagP>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;테두리 설정</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>Button</TagY></TagS>
                    <div className="pl-4">
                        <TagS>&#60;<TagY>아이콘</TagY>&#47;&#62;</TagS>
                        텍스트 내용
                        <TagS>&#60;<TagY>아이콘</TagY>&#47;&#62;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;&nbsp;아이콘 추가시 좌우 방향에 컴포넌트 추가</TagSi>
                    </div>
                    <TagS>&#60;<TagY>Button</TagY>&#47;&#62;</TagS>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <h5 className='flex-none font-bold'>속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                    <div className="font-medium leading-5">
                        버튼 예제입니다.<br />
                        <TagP>disabled, focus, valid, warning, error</TagP> 등 타입과 상태마다 스타일이 달라집니다.
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>children</div>
                        <div>버튼 안에 들어갈 텍스트 또는 내용을 <TagP>children</TagP> 또는 태그안 설정합니다.</div>
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>borderRadius</div>
                        <div className="leading-5">
                            <div>버튼의 모서리 스타일을 설정하는 속성입니다</div>
                            <div>- <TagG>round</TagG> : 둥근 모서리로 설정합니다.</div>
                            <div>- <TagG>pill</TagG> : 완전한 타원형으로 설정됩니다.</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4">
                        <div>width</div>
                        <div className="leading-5">
                            <div>입력 필드의 <TagP>width</TagP>를 설정합니다.</div>
                            <div>테일윈드 제공값(예: <TagG>&#34;w-12&#34;</TagG>&#44;&nbsp;<TagG>&#34;w-20&#34;</TagG>)로 설정할수 있습니다</div>
                            <div>또는 일회성 <TagP>width</TagP> 특정값을 사용해야 하는 경우 <TagG>w-&#91;숫자&#93;</TagG></div>
                            <div>대괄호안에 CSS 단위(예: <TagG>&#34;&#91;200px&#93;&#34;</TagG>&#44;&nbsp;<TagG>&#34;&#91;100%&#93;&#34;</TagG>)로 설정할 수 있습니다</div>
                            <div><TagP>width</TagP>값이 없을 때는 <TagG>&#34;auto&#34;</TagG>로 기본값 설정됩니다</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4">
                        <div>height</div>
                        <div className="leading-5">
                            <div>높이를 지정하며, 픽셀 단위의 여러 값(<TagG>24, 36, 44, 48, 56</TagG>)을 지원하여 다양한 디자인 요구에 맞게 설정할 수 있습니다.</div>
                            <div>
                                또는 일회성 <TagP>width</TagP> 특정값을 사용해야 하는 경우&nbsp;
                                <TagG>h-[숫자]</TagG> 대괄호안에 CSS 단위(예: <TagG>&#34;&#91;200px&#93;&#34;</TagG>&#44;&nbsp;<TagG>&#34;&#91;100%&#93;&#34;</TagG>)로 설정할 수 있습니다
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>outline</div>
                        <div className="leading-5">
                            <div>테두리만 있는 아웃라인 버튼 스타일을 설정합니다.</div>
                            <div>이 속성이 제공되면 버튼의 내부는 투명하고 테두리만 색상으로 표시됩니다.</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>아이콘</div>
                        <div className="leading-5">
                            <div>왼쪽에 아이콘: 아이콘을 텍스트 왼쪽에 위치시키려면 아이콘 컴포넌트를 텍스트 앞에 넣습니다.</div>
                            <div>오른쪽에 아이콘: 아이콘을 텍스트 오른쪽에 위치시키려면 아이콘 컴포넌트를 텍스트 뒤에 넣습니다.</div>
                        </div>
                    </div>
                </div>
                <div className="font-medium">이외 기본 속성(Attributes)들은 html에서 제공하는 것과 동일합니다</div>
            </div>

            <DocPage root={root} />
        </div>
    );
}