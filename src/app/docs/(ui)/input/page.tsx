import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/input";

export default function InputDoc() {

    return (
        <div className="mx-auto max-w-7xl pt-6">
            <h3 className='mb-4 font-bold'>Input</h3>

            <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1E293B] rounded-lg">
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>Textinput</TagY></TagS>
                    <div className="pl-4">
                        <TagP>type</TagP>
                        <TagS>=&#34;<TagG>text | number | search</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;input type 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>color</TagP>
                        <TagS>=&#34;<TagG>base, natural, primary, secondary, warning, valid</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;색상설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>align</TagP>
                        <TagS>=&#34;<TagG>left, center, right, justify</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;색상설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>borderRadius</TagP>
                        <TagS>=&#34;<TagG>round, underline</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;input 선 round 또는 underline 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>width</TagP>
                        <TagS>=&#34;<TagG>너비값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;width 설정</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>
                <div>
                    <TagS>&#60;<TagY>PasswordInput</TagY>&#47;&#62;</TagS>
                    <TagSi>&nbsp;&#47;&#47;&nbsp;비밀번호를 입력할 수 있는 컴포넌트</TagSi>
                </div>
                <div>
                    <TagS>&#60;<TagY>EmailInput</TagY>&#47;&#62;</TagS>
                    <TagSi>&nbsp;&#47;&#47;&nbsp;이메일 주소를 입력할 수 있는 컴포넌트</TagSi>
                </div>
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>RangeInout</TagY></TagS>
                    <div className="pl-4">
                        <TagP>min</TagP>
                        <TagS>=&#34;<TagG>최소값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;최소값 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>max</TagP>
                        <TagS>=&#34;<TagG>최대값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;최대값 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>step</TagP>
                        <TagS>=&#34;<TagG>간격값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;숫자들 사이의 간격 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>trackColor</TagP>
                        <TagS>=&#34;<TagG>색상값(Hex코드값)</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;Range 기본색상 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>fillColor</TagP>
                        <TagS>=&#34;<TagG>색상값(Hex코드값)</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;Range 채워지는 색상 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>size</TagP>
                        <TagS>=&#34;<TagG>너비높이값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;circle일 경우 너비높이 크기 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>circle</TagP>
                        <TagS>=&#34;<TagG>너비높이값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;&nbsp;프로그래스바 circle 유무 설정</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                        <h5 className="flex-none font-bold">속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                    <div className="font-medium leading-5">
                        텍스트 타입의 예제입니다.<br />
                        빈 값의 input부터 <TagP>disabled, focus, valid, warning, error</TagP> 등 타입과 상태마다 스타일이 달라집니다.
                    </div>
                    <div className="grid grid-cols-[120px_minmax(0,_1fr)] items-start gap-4">
                        <div>type</div>
                        <div className="leading-5">
                            <div>
                                <TagP>text, number, search</TagP> 중 하나로 설정하여 입력 필드의 타입을 지정합니다.
                            </div>
                            <div>
                                예를 들어, <TagP>text</TagP>는 일반 텍스트 입력, <TagP>number</TagP>는 숫자 입력, <TagP>search</TagP>는 검색 필드를 나타냅니다.
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[120px_minmax(0,_1fr)] items-start gap-4">
                        <div>align</div>
                        <div className="leading-5">
                            <div>입력 필드 텍스트 정렬을 설정합니다.</div>
                            <div><TagG>left, center, right, justify</TagG> 중 하나로 선택할 수 있습니다</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[120px_minmax(0,_1fr)] items-start gap-4">
                        <div>color</div>
                        <div className="leading-5">
                            <div>입력 필드의 색상을 설정합니다.</div>
                            <div><TagG>base, natural, primary, secondary, warning, valid</TagG> 중 하나로 선택할 수 있으며,</div>
                            <div>각 색상은 미리 정의된 색상 팔레트에 따라 적용됩니다.</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[120px_minmax(0,_1fr)] items-start gap-4">
                        <div>borderRadius</div>
                        <div className="leading-5">
                            <div><TagP>round</TagP> 또는 <TagP>underline</TagP> 중 하나로 설정하여 입력 필드의 스타일을 지정합니다.</div>
                            <div><TagP>round</TagP>는 입력 필드의 테두리를 둥글게 만들고, <TagP>underline</TagP>은 밑줄 스타일로 설정합니다.</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[120px_minmax(0,_1fr)] items-start gap-4">
                        <div>width</div>
                        <div className="leading-5">
                            <div>입력 필드의 <TagP>width</TagP>를 설정합니다.</div>
                            <div>테일윈드 제공값(예: <TagG>"w-12"</TagG>, <TagG>"w-20"</TagG>)로 설정할수 있습니다</div>
                            <div>또는 일회성 <TagP>width</TagP> 특정값을 사용해야 하는 경우 <TagG>w-[숫자]</TagG></div>
                            <div>대괄호안에 CSS 단위(예: <TagG>"[200px]"</TagG>, <TagG>"[100%]"</TagG>)로 설정할 수 있습니다</div>
                            <div><TagP>width</TagP>값이 없을 때는 <TagG>&#34;auto&#34;</TagG>로 기본값 설정됩니다</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[120px_minmax(0,_1fr)] items-start gap-4">
                        <div><TagS>&#60;<TagR>PasswordInput</TagR>&#62;</TagS></div>
                        <div className="leading-5">
                            <p>비밀번호를 입력할 수 있는 필드입니다.</p>
                            <p>일반적으로 비밀번호의 입력 내용이 숨겨진 상태로 표시됩니다.</p>
                            <p>이 컴포넌트는 다음과 같은 기능을 제공할 수 있습니다:</p>
                            <p>&bull; 비밀번호 표시/숨기기 토글 버튼</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[120px_minmax(0,_1fr)] items-start gap-4">
                        <div><TagS>&#60;<TagR>EmailInput</TagR>&#62;</TagS></div>
                        <div className="leading-5">
                            <p>이메일 주소를 입력할 수 있는 필드입니다.</p>
                            <p>이메일 형식이 올바른지 검사하는 기능을 내장하고 있을 수 있습니다.</p>
                            <p>다음과 같은 기능을 제공할 수 있습니다:</p>
                            <p>&bull; 입력한 이메일 주소가 올바른 형식인지 실시간으로 확인 (예: example@domain.com)</p>
                            <p>&bull; 자동 완성 및 유효성 검사</p>
                            <p>&bull; 잘못된 이메일 형식에 대한 오류 메시지 표시</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[120px_minmax(0,_1fr)] items-start gap-4">
                        <div><TagS>&#60;<TagR>RangeInout</TagR>&#62;</TagS></div>
                        <div className="leading-5">
                            <div><TagP>min</TagP> : 슬라이더의 최소값을 설정하는 숫자입니다.</div>
                            <div><TagP>max</TagP> : 슬라이더의 최대값을 설정하는 숫자입니다.</div>
                            <div><TagP>step</TagP> : 슬라이더에서 숫자들 사이의 간격을 설정하는 숫자입니다. 예를 들어, 1로 설정하면 슬라이더를 1씩 이동할 수 있습니다.</div>
                            <div><TagP>trackColor</TagP> : 슬라이더의 기본 색상을 설정하는 값입니다. 색상 코드를 Hex 값(예: #ff0000)으로 지정합니다.</div>
                            <div><TagP>fillColor</TagP> : 슬라이더에서 채워지는 부분의 색상을 설정하는 값입니다. 색상 코드를 Hex 값으로 지정합니다.</div>
                            <div><TagP>size</TagP> : circle일 경우 슬라이더의 원형 핸들의 너비와 높이를 설정하는 숫자입니다.</div>
                            <div><TagP>circle</TagP> : 슬라이더를 원형 프로그레스 바로 설정할지 여부를 결정합니다. 설정하면 원형 프로그레스 바 형태로 슬라이더가 나타납니다.</div>
                        </div>
                    </div>
                </div>
                <div className="font-medium">이외 기본 속성(Attributes)들은 html에서 제공하는 것과 동일합니다</div>
            </div>
            <DocPage root={root} />
        </div>
    );
}