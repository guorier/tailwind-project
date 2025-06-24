import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/textarea";

export default function TextareaDoc() {
    return (
        <div className='mx-auto max-w-7xl pt-6'>
            <h3 className='mb-4 font-bold'>Textarea</h3>
            <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
                <div className="flex flex-col gap-1">
                    <TagS>&#60;<TagY>Textarea</TagY></TagS>
                    <div className="pl-4">
                        <TagP>width</TagP>
                        <TagS>=&#34;<TagG>너비값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;너비값 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>height</TagP>
                        <TagS>=&#34;<TagG>높이값</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;높이값 설정</TagSi>
                    </div>
                    <div className="pl-4">
                        <TagP>resize</TagP>
                        <TagS>=&#34;<TagG>none, resize, x-axis, y-axis</TagG>&#34;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;임의크기값 조절 변수</TagSi>
                    </div>
                    <TagS>&#47;&#62;</TagS>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <h5 className='flex-none font-bold'>속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                    <div className="font-medium leading-5">
                        Textarea의 예제입니다.<br />
                        <TagP>disabled, focus, valid, warning, error</TagP> 등 타입과 상태마다 스타일이 달라집니다.
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
                        <div>height</div>
                        <div className="leading-5">
                            <div>입력 필드의 <TagP>height</TagP>를 설정합니다.</div>
                            <div>테일윈드 제공값(예: <TagG>"h-12"</TagG>, <TagG>"h-20"</TagG>)로 설정할수 있습니다</div>
                            <div>또는 일회성 <TagP>width</TagP> 특정값을 사용해야 하는 경우 <TagG>h-[숫자]</TagG></div>
                            <div>대괄호안에 CSS 단위(예: <TagG>"[200px]"</TagG>, <TagG>"[100%]"</TagG>)로 설정할 수 있습니다</div>
                            <div><TagP>height</TagP>값이 없을 때는 <TagG>&#34;auto&#34;</TagG>로 기본값 설정됩니다</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <div>resize</div>
                        <div className="leading-5">
                            <div>입력 텍스트 영역의 크기 조절 가능 여부를 설정하는 속성입니다.</div>
                            <div>- <TagG>none</TagG> : 사용자가 크기를 조절할 수 없도록 설정.</div>
                            <div>- <TagG>resize</TagG> : 사용자가 자유롭게 가로, 세로 크기를 조절할 수 있도록 설정.</div>
                            <div>- <TagG>x-axis</TagG> : 사용자가 가로 크기만 조절할 수 있도록 설정.</div>
                            <div>- <TagG>y-axis</TagG> : 사용자가 세로 크기만 조절할 수 있도록 설정.</div>
                        </div>
                    </div>
                </div>
                <div className="font-medium">이외 기본 속성(Attributes)들은 html에서 제공하는 것과 동일합니다</div>
            </div>

            <DocPage root={root} />
        </div>
    );
}