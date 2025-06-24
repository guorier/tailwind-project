import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/toast";

export default function ToastDoc() {
    const TagCss = "flex items-center gap-1 font-nanumGothic"

    return (
        <div className='mx-auto max-w-7xl pt-6'>
            <h3 className='mb-4 font-bold'>Toast</h3>
            <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
                <div className="flex items-center gap-1">
                    <TagS>&#60;<TagY>ToastModal</TagY>&#47;&#62;</TagS>
                    <TagSi>&nbsp;&nbsp;&#47;&#47;토스트 모달.</TagSi>
                </div>
                <div className="flex flex-col gap-1">
                    <div className={TagCss}>
                        <TagP>const</TagP>
                        <TagB>dispatch</TagB>
                        <TagS>=</TagS>
                        <TagB>useDispatch<TagY>&#40;&#41;</TagY></TagB>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;useDispatch 훅을 사용하여 Redux의 dispatch 함수를 가져옵니다.</TagSi>
                    </div>
                    <div className={TagCss}>
                        <TagP>const</TagP>
                        <TagB>handleOpenToast</TagB>
                        <TagS>=</TagS>
                        <TagY>&#40;</TagY>
                        type :
                        <TagY>string &#41;</TagY>
                        <TagP>=&#62;</TagP>
                        <TagY>&#123;</TagY>
                    </div>
                    <div className={`${TagCss} pl-4`}>
                        <TagP>const</TagP>
                        <TagB>content</TagB>
                        <TagS>=</TagS>
                        <TagY>&#40;</TagY>
                    </div>
                    <div className={`${TagCss} pl-8`}>
                        <TagS>&#60;&#62;</TagS>
                        표시 내용
                        <TagS>&#60;&#47;&#62;</TagS>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;토스트 메시지에 표시될 내용을 설정합니다.</TagSi>
                    </div>
                    <div className={`${TagCss} pl-4`}>
                        <TagY>&#41;</TagY>
                    </div>
                    <div className={`${TagCss} pl-4`}>
                        <TagB>dispatch</TagB>
                        <TagY>&#40;</TagY>
                        <TagB>openToast</TagB>
                        <TagR>&#40;</TagR>
                        <TagY>&#123;</TagY>
                        content, toastType : type
                        <TagY>&#125;</TagY>
                        <TagR>&#41;</TagR>
                        <TagY>&#41;</TagY>
                        <TagSi>&nbsp;&nbsp;&#47;&#47;openToast 액션을 디스패치하여 토스트 메시지를 엽니다.</TagSi>
                    </div>
                    <TagY>&#125;</TagY>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <h5 className='flex-none font-bold'>속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                    <div className='grid grid-cols-[100px_minmax(0,_1fr)] items-start gap-4'>
                        <TagP>toastType</TagP>
                        <div>
                            <div>handleOpenToast=&#40; &#34;success&#34; | &#34;error&#34; | &#34;warning&#34; &#41;</div>
                            <div>토스트타입의 값에 따라 아이콘 및 색상이 바뀝니다</div>
                        </div>
                    </div>
                </div>
            </div>


            <DocPage root={root} />
        </div>
    );
}