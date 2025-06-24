import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB }from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/pagination";

export default function PaginationDoc() {

	return (
		<div className='mx-auto max-w-7xl pt-6'>
			<h3 className='mb-4 font-bold'>Pagination</h3>

			<div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
				<div className="flex flex-col gap-1">
					<TagS>&#60;<TagY>Pagination</TagY></TagS>
					<div className="pl-4">
						<TagP>currentPage</TagP>
						<TagS>=&#123;&nbsp;<TagG>함수명</TagG>&nbsp;&#125;</TagS>
						<TagSi>&nbsp;&nbsp;&#47;&#47;현재 선택된 페이지 번호</TagSi>
					</div>
					<div className="pl-4">
						<TagP>totalPages</TagP>
						<TagS>=&#123;&nbsp;<TagG>함수명</TagG>&nbsp;&#125;</TagS>
						<TagSi>&nbsp;&nbsp;&#47;&#47;총 페이지 수</TagSi>
					</div>
					<div className="pl-4">
						<TagP>onPageChange</TagP>
						<TagS>=&#123;&nbsp;<TagG>함수명</TagG>&nbsp;&#125;</TagS>
						<TagSi>&nbsp;&nbsp;&#47;&#47;페이지가 변경될 때 호출되는 핸들러 함수</TagSi>
					</div>
					<TagS>&#47;&#62;</TagS>
				</div>
				<div className="flex flex-col gap-1">
					<div>
						<TagS>&#60;<TagY>ModernPagination</TagY></TagS>
						<TagSi>&nbsp;&nbsp;&#47;&#47;다른Pagination</TagSi>
					</div>
					<div className="pl-4">
						<TagP>currentPage</TagP>
						<TagS>=&#123;&nbsp;<TagG>함수명</TagG>&nbsp;&#125;</TagS>
						<TagSi>&nbsp;&nbsp;&#47;&#47;현재 선택된 페이지 번호</TagSi>
					</div>
					<div className="pl-4">
						<TagP>totalPages</TagP>
						<TagS>=&#123;&nbsp;<TagG>함수명</TagG>&nbsp;&#125;</TagS>
						<TagSi>&nbsp;&nbsp;&#47;&#47;총 페이지 수</TagSi>
					</div>
					<div className="pl-4">
						<TagP>onPageChange</TagP>
						<TagS>=&#123;&nbsp;<TagG>함수명</TagG>&nbsp;&#125;</TagS>
						<TagSi>&nbsp;&nbsp;&#47;&#47;페이지가 변경될 때 호출되는 핸들러 함수</TagSi>
					</div>
					<TagS>&#47;&#62;</TagS>
				</div>

				<div className="flex flex-col gap-3">
					<div className='flex items-center gap-4'>
						<h5 className='flex-none font-bold'>속성</h5>
						<div className="w-full h-px bg-natural-300" />
					</div>
					<div className="font-medium">Pagination 예제입니다.</div>
					<div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4">
						<div>Pagination</div>
						<div className="leading-5">
							<div>기본적인 페이지네이션을 구현합니다.</div>
							<div><TagP>currentPage</TagP> : 현재 사용자가 보고 있는 페이지 번호를 나타냅니다.</div>
							<div><TagP>totalPages</TagP> : 전체 페이지 수를 나타내며, 사용자가 이 값을 기준으로 페이지를 탐색합니다.</div>
							<div className="flex items-start">
								<TagP>onPageChange</TagP>&nbsp;:&nbsp;
								<div className="w-1/2 break-keep">
									페이지가 변경될 때 호출되는 함수로,
									사용자가 다른 페이지를 클릭할 때 이 함수를 통해 상태를 업데이트하고
									해당 페이지의 데이터를 불러오는 등의 작업을 수행합니다.
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4">
						<div>ModernPagination</div>
						<div className="leading-5">
							<div>&bull; 사용자에게 페이지 탐색을 보다 효율적으로 할 수 있도록 도와주는 컴포넌트입니다.</div>
							<div>&bull; 사용자가 현재 보고 있는 페이지를 기준으로 페이지 5씩 표시됩니다.</div>
							<div>&bull; 페이지 수 넘어 갈때, 사용자가 처음(1페이지)과 마지막 페이지(총 20페이지일 경우)로 표기되어 쉽게 이동할 수 있도록 해줍니다.</div>
							<div>&bull; 페이지 번호가 많을 때, 중간에 ... 기호를 삽입하여 페이지 번호의 연속성을 표시합니다.</div>
						</div>
					</div>

				</div>
			</div>

			<DocPage root={root} />
		</div>
	);
}