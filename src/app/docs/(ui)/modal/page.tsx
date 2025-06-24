import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB } from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/modal";

export default function ModalDoc() {
	const TagCss = "flex items-center gap-1  font-nanumGothic"
	return (
		<div className="mx-auto max-w-7xl pt-6">
			<h3 className='mb-4 font-bold'>Modal</h3>

			<div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1E293B] rounded-lg">
			<div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <h5 className='flex-none font-bold'>속성</h5>
                        <div className="w-full h-px bg-natural-300" />
                    </div>
                    <div className="font-medium leading-5">기본 타입 Modal 예제입니다. 구성 요소를 간단하게 소개합니다. 실제 동작은 아래 섹션에서 확인 가능합니다</div>
                </div>
			</div>

			<DocPage root={root} />
		</div>
	);
}