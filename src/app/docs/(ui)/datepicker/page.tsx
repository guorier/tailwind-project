import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import * as root from "@/examples/datepicker";
import DocPage from "@/components/DocPage";

export default function DatepickerDoc() {

    return (
        <div className='mx-auto max-w-7xl pt-6'>
            <h3 className='mb-4 font-bold'>Datepicker</h3>
            <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>Datepicker</TagY></TagS>
                    <div className="pl-4">
                        <TagP>placeholderText</TagP>
                        <TagS>=&#34;<TagG>YYYY-MM-DD</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;입력 필드에 표시할 날짜 형식 플레이스홀더</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>value</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>함수명</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;현재 선택된 날짜 값을 설정하는 함수명 또는 값</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>setDate</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>함수명</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;날짜 선택 시 호출되는 함수 (선택된 날짜를 처리)</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>maxYearAdd</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>10</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;현재 연도에서 최대 10년 후까지 선택 가능하게 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>disabled</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>false</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;Datepicker 활성화 여부 (false일 때 활성화됨)</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                        <TagS>&#60;<TagY>Dateinput</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;INPUT Datepicker -시작날짜</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>value</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>함수명</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;현재 선택된 날짜 값을 설정하는 함수명 또는 값</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>onChange</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>함수명</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;날짜 선택 시 호출되는 함수 (선택된 날짜를 처리)</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>min</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>today</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;선택 가능한 최소 날짜 (오늘 날짜로 설정)</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>

                    <div>
                        <TagS>&#60;<TagY>Dateinput</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;종료날짜</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>value</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>함수명</TagG> <TagY>&#125;</TagY></TagS>
                    </div>
                    <div className="pl-4">
                        <TagP>onChange</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>함수명</TagG> <TagY>&#125;</TagY></TagS>
                    </div>
                    <div className="pl-4">
                        <TagP>min</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>startDate || today</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;오늘날짜 또는 시작날짜기준으로 이전날짜 선택불가</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>disabled</TagP>
                        <TagS>=<TagY>&#123;</TagY> <TagG>!startDate</TagG> <TagY>&#125;</TagY></TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;startDate가 없을 때 입력 필드를 비활성화</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>


                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <h5 className='flex-none font-bold'>속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                    <div className='grid grid-cols-[70px_minmax(0,_1fr)] items-start gap-4'>
                        <div>Datepicker</div>
                        <div className="leading-6">
                            <div><TagP>placeholderText</TagP> : 날짜 입력 필드에 플레이스홀더를 표시하여 사용자가 입력 형식을 알 수 있도록 함.</div>
                            <div><TagP>value</TagP> : 현재 선택된 날짜 값을 설정하는 함수명 또는 값 들어감.</div>
                            <div><TagP>setDate</TagP> : 사용자가 날짜를 선택했을 때 호출되는 콜백 함수로, 선택된 날짜를 처리하는 로직을 담고 있음.</div>
                            <div><TagP>maxYearAdd</TagP> : 오늘을 기준으로 최대 날짜를 선택할 수 있도록 제한하는 옵션.</div>
                            <div><TagP>disabled</TagP> : Datepicker가 활성화 또는 비활성화되는지 여부를 제어.</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-[70px_minmax(0,_1fr)] items-start gap-4'>
                        <div>Dateinput</div>
                        <div className="leading-6">
                            <div><TagP>value</TagP> : 현재 선택된 날짜 값을 설정하는 함수명 또는 값 들어감.</div>
                            <div><TagP>onChange</TagP> : 사용자가 시작 날짜 또는 날짜를 선택했을 때 호출되는 함수로, 선택된 값을 처리하는 로직이 실행됨.</div>
                            <div>
                                <div><TagP>min</TagP> : 최소 날짜를 오늘 날짜로 설정하여 사용자가 오늘보다 이전 날짜는 선택할 수 없도록 제한.</div>
                                <div className="pl-9 w-2/3 break-keep">종료 날짜인 경우(startDate || today), 최소 날짜를 startDate (시작 날짜)로 설정하여 시작 날짜 이전의 날짜는 선택할 수 없도록 제한, 만약 시작 날짜가 없다면 오늘 날짜를 최소 날짜로 설정</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DocPage root={root} />
        </div>
    );
}