import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/optiongroup";

export default function CheckboxDoc() {

    return (
        <div className='mx-auto max-w-7xl pt-6'>
            <h3 className='mb-4 font-bold'>Checkbox / Radio / Toggle</h3>

            <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>Check</TagY></TagS>
                    <div className="pl-4">
                        <TagP>label</TagP>
                        <TagS>=&#34;<TagG>Text Label</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47; Text Label 입력</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>size</TagP>
                        <TagS>=&#34;<TagG>sm, lg</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47; 크기설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>color</TagP>
                        <TagS>=&#34;<TagG>base, primary, secondary, error, warning, valid</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47; 색상설정</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>Radio</TagY></TagS>
                    <div className="pl-4">
                        <TagP>type</TagP>
                        <TagS>=&#34;<TagG>default, line</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47; Radio 형태설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>label</TagP>
                        <TagS>=&#34;<TagG>Text Label</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47; Text Label 입력</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>size</TagP>
                        <TagS>=&#34;<TagG>sm, lg</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47; 크기설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>color</TagP>
                        <TagS>=&#34;<TagG>base, primary, secondary, error, warning, valid</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47; 색상설정</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>Toggle</TagY></TagS>

                    <div className="pl-4">
                        <TagP>size</TagP>
                        <TagS>=&#34;<TagG>default, sm, lg</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47; 크기설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>width</TagP>
                        <TagS>=&#34;<TagG>너비값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47; 너비값 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>displayStatus</TagP>
                        <TagSi>&nbsp;&#47;&#47; ON OFF 유무 설정</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>

                {/* ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */}

                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <h5 className='flex-none font-bold'>속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                    <div className="font-medium leading-5">
                        체크박스와 라디오 버튼, 토글의 예제입니다.<br />
                        <TagP>disabled, focus, valid, warning, error</TagP> 등 타입과 상태마다 스타일이 달라집니다.
                    </div>
                    <div className='grid grid-cols-[88px_minmax(0,_1fr)] items-start gap-4'>
                        <div>Check</div>
                        <div className='flex flex-col gap-2'>
                            <div className="leading-5">
                                <TagP>label</TagP> : 체크박스 옆에 표시될 텍스트 레이블입니다.
                            </div>
                            <div className="leading-5">
                                <div><TagP>size</TagP> : 체크박스의 크기를 설정할 수 있는 옵션입니다.</div>
                                <div className="pl-9">- <TagG>sm</TagG> : 작은 사이즈</div>
                                <div className="pl-9">- <TagG>lg</TagG> : 큰 사이즈</div>
                            </div>
                            <div>
                                <div><TagP>color</TagP> : 체크박스의 색상을 설정할 수 있습니다.</div>
                                <div className="pl-10">- <TagG>base</TagG> : 기본 색상</div>
                                <div className="pl-10">- <TagG>primary</TagG> : 주 색상 (보통 주로 사용되는 색상)</div>
                                <div className="pl-10">- <TagG>secondary</TagG> : 보조 색상</div>
                                <div className="pl-10">- <TagG>error</TagG> : 실패, 위험 등 색상</div>
                                <div className="pl-10">- <TagG>warning</TagG> : 주의, 경고 등 색상</div>
                                <div className="pl-10">- <TagG>valid</TagG> : 성공 또는 유효함을 나타내는 색상</div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-[88px_minmax(0,_1fr)] items-start gap-4'>
                        <div>Radio</div>
                        <div className='flex flex-col gap-2'>
                            <div className="leading-5">
                                <div><TagP>type</TagP> : 라디오 버튼의 타입을 설정하는 속성입니다.</div>
                                <div className="pl-9">- <TagG>default</TagG> : 기본 타입</div>
                                <div className="pl-9">- <TagG>line</TagG> : 라인 스타일 라디오 버튼 (아웃라인 형식)</div>
                            </div>
                            <div className="leading-5">
                                <TagP>label</TagP> : 라디오 옆에 표시될 텍스트 레이블입니다.
                            </div>
                            <div className="leading-5">
                                <div><TagP>size</TagP> : 라디오버튼의 크기를 설정할 수 있는 옵션입니다.</div>
                                <div className="pl-9">- <TagG>sm</TagG> : 작은 사이즈</div>
                                <div className="pl-9">- <TagG>lg</TagG> : 큰 사이즈</div>
                                <div className="pl-9">- <TagG>lineSm</TagG> : 라인 작은 스타일</div>
                                <div className="pl-9">- <TagG>lineLg</TagG> : 라인 큰 스타일</div>
                            </div>
                            <div>
                                <div><TagP>color</TagP> : 라디오버튼의 색상을 설정할 수 있습니다.</div>
                                <div className="pl-10">- <TagG>base</TagG> : 기본 색상</div>
                                <div className="pl-10">- <TagG>primary</TagG> : 주 색상 (보통 주로 사용되는 색상)</div>
                                <div className="pl-10">- <TagG>secondary</TagG> : 보조 색상</div>
                                <div className="pl-10">- <TagG>error</TagG> : 실패, 위험 등 색상</div>
                                <div className="pl-10">- <TagG>warning</TagG> : 주의, 경고 등 색상</div>
                                <div className="pl-10">- <TagG>valid</TagG> : 성공 또는 유효함을 나타내는 색상</div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-[88px_minmax(0,_1fr)] items-start gap-4'>
                        <div>Toggle</div>
                        <div className='flex flex-col gap-2'>
                            <div className="leading-5">
                                <div><TagP>size</TagP> : 라디오버튼의 크기를 설정할 수 있는 옵션입니다.</div>
                                <div className="pl-9">- <TagG>default</TagG> : 기본 스타일</div>
                                <div className="pl-9">- <TagG>sm</TagG> : 작은 사이즈</div>
                                <div className="pl-9">- <TagG>lg</TagG> : 큰 사이즈</div>
                            </div>
                            <div className="leading-5">
                                <div><TagP>width</TagP> : 필드의 <TagP>width</TagP>를 설정합니다.</div>
                                <div className="pl-11">- 테일윈드 제공값(예: <TagG>"w-12"</TagG>, <TagG>"w-20"</TagG>)로 설정할수 있습니다</div>
                                <div className="pl-11">- 또는 일회성 <TagP>width</TagP> 특정값을 사용해야 하는 경우 <TagG>w-[숫자]</TagG></div>
                                <div className="pl-11">- 대괄호안에 CSS 단위(예: <TagG>"[200px]"</TagG>, <TagG>"[100%]"</TagG>)로 설정할 수 있습니다</div>
                                <div className="pl-11">- <TagP>width</TagP>값이 없을 때는 <TagG>&#34;auto&#34;</TagG>로 기본값 설정됩니다</div>
                            </div>
                            <div className="leading-5">
                                <div><TagP>displayStatus </TagP> : ON/OFF 상태를 나타내는 속성으로, 토글이 활성화 상태인지 비활성화 상태인지를 설정할 수 있습니다. 이 값에 따라 ON/OFF 상태가 표시됩니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-medium">이외 기본 속성(Attributes)들은 html에서 제공하는 것과 동일합니다</div>





            </div>




















            <DocPage root={root} />
        </div>
    );
}