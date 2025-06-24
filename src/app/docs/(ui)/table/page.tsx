import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB } from "@/components/Tag";
import dynamic from "next/dynamic";
import * as root from "@/examples/table";

export default function TableDoc() {
   const DocPage = dynamic(
      () => import('@/components/DocPage'),
      { ssr: false }
   )

   return (
      <div className='mx-auto max-w-7xl pt-6'>
         <div className='flex items-center gap-4 mb-4'>
            <h3 className='font-bold'>Table</h3>
         </div>

         <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
            <div className="flex flex-col gap-1">
               <div>
                  <TagS>
                     &#60;
                     <TagY>Table</TagY>&nbsp;
                     <TagP>hgt</TagP><TagS>=&#34; 500px &#34;</TagS>
                     &#62;
                  </TagS>
                  <TagSi>&nbsp;&#47;&#47; hgt-Table 전체 높이 설정</TagSi>
               </div>
               <div className="flex flex-col gap-1 pl-4">
                  <div>
                     <TagS>&#60;<TagY>ColGroup</TagY></TagS>
                     <TagSi>&nbsp;&#47;&#47;colgroup 태그</TagSi>
                  </div>
                  <div className="pl-4">
                     <TagP>columnCount</TagP>
                     <TagS>=&#123; 5 &#125;</TagS>
                     <TagSi>&nbsp;&#47;&#47;테이블의 열 개수 설정. 여기서는 총 5열로 설정</TagSi>
                  </div>
                  <div className="pl-4">
                     <TagP>defaultWidth</TagP>
                     <TagS>=&#34;</TagS>
                     <TagG>auto</TagG>
                     <TagS>&#34;</TagS>
                     <TagSi>&nbsp;&#47;&#47;열의 기본 너비를 'auto'로 설정. 명시적으로 너비가 지정되지 않은 열은 자동으로 크기를 조정</TagSi>
                  </div>
                  <div className="pl-4">
                     <TagP>widths</TagP>
                     <TagS>=&#123;&#123;</TagS>
                     <TagSi>&nbsp;&#47;&#47;2열(인덱스 1)은 widths 객체에 명시되어 있지 않으므로, defaultWidth 값인 'auto'가 적용됨.</TagSi>
                  </div>
                  <div className="pl-8"><TagG><TagR>0</TagR>: &#34; 4% &#34;,</TagG><TagSi>&nbsp;&#47;&#47;1열(인덱스 0)의 너비를 4%로 설정.</TagSi></div>
                  <div className="pl-8"><TagG><TagR>2</TagR>: &#34; 14% &#34;,</TagG><TagSi>&nbsp;&#47;&#47;3열(인덱스 2)의 너비를 14%로 설정.</TagSi></div>
                  <div className="pl-8"><TagG><TagR>3</TagR>: &#34; 14% &#34;,</TagG><TagSi>&nbsp;&#47;&#47;4열(인덱스 3)의 너비를 14%로 설정.</TagSi></div>
                  <div className="pl-8"><TagG><TagR>4</TagR>: &#34; 14% &#34;,</TagG><TagSi>&nbsp;&#47;&#47;5열(인덱스 4)의 너비를 14%로 설정.</TagSi></div>
                  <div className="pl-4"><TagS>&#125;&#125;</TagS></div>
                  <TagS>&#47;&#62;</TagS>
               </div>



               <div className="flex flex-col gap-1 pl-4">
                  <div>
                     <TagS>&#60;</TagS>
                     <TagY>TableHead</TagY>
                     <TagS>&#62;</TagS>
                     <TagSi>&nbsp;&#47;&#47; thead태그</TagSi>
                  </div>
                  <div className="pl-4">
                     <TagS>&#60;</TagS>
                     <TagY>TableRow</TagY>
                     <TagS>&#62;</TagS>
                     <TagSi>&nbsp;&#47;&#47;&nbsp;tr 태그</TagSi>
                  </div>
                  <div className="pl-8">
                     <TagS>&#60;</TagS>
                     <TagY>TableHeadCell</TagY>
                     <TagSi>&nbsp;&#47;&#47;&nbsp;th 태그</TagSi>
                     <div className="pl-4">
                        <TagP>unsorted</TagP>
                        <TagSi>&nbsp;&#47;&#47; 화살표 유무설정</TagSi>
                     </div>
                     <div className="pl-4">
                        <TagP>iName</TagP>
                        <TagS>=&#34;</TagS>
                        <TagG>아이콘 이름</TagG>
                        <TagS>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47; 화살표 아이콘 설정</TagSi>
                     </div>
                     <div className="pl-4">
                        <TagP>width</TagP>
                        <TagS>=&#34;</TagS>
                        <TagG>너비값</TagG>
                        <TagS>&#34;</TagS>
                        <TagSi>&nbsp;&#47;&#47;너비 설정</TagSi>
                     </div>
                     <TagS>&#62;</TagS>
                     <div className="pl-4">Table Head</div>
                     <TagS>&#60;&#47;</TagS>
                     <TagY>TableHeadCell</TagY>
                     <TagS>&#62;</TagS>
                  </div>
                  <div className="pl-4">
                     <TagS>&#60;&#47;</TagS>
                     <TagY>TableRow</TagY>
                     <TagS>&#62;</TagS>
                  </div>
                  <div>
                     <TagS>&#60;&#47;</TagS>
                     <TagY>TableHead</TagY>
                     <TagS>&#62;</TagS>
                  </div>
               </div>
               <div className="py-4 pl-4">&#60;&nbsp;---- 구분선 ----&nbsp;&#62;</div>

               <div className="flex flex-col gap-1 pl-4">
                  <div>
                     <TagS>&#60;</TagS>
                     <TagY>TableBody</TagY>
                     <TagS>&#62;</TagS>
                     <TagSi>&nbsp;&#47;&#47; tbody태그</TagSi>
                  </div>
                  <div className="pl-4">
                     <TagS>&#60;</TagS>
                     <TagY>TableRow</TagY>
                     <TagP>&nbsp;striped 또는 hoverable</TagP>
                     <TagS>&#62;</TagS>
                     <TagSi>&nbsp;&#47;&#47; 줄무늬와 hover 효과설정</TagSi>
                  </div>
                  <div className="pl-8">
                     <TagS>&#60;</TagS>
                     <TagY>TableCell</TagY>
                     <TagS>&#62;</TagS>
                     Table Data
                     <TagS>&#60;&#47;</TagS>
                     <TagY>TableCell</TagY>
                     <TagS>&#62;</TagS>
                     <TagSi>&nbsp;&#47;&#47;&nbsp;td태그</TagSi>
                  </div>
                  <div className="pl-4">
                     <TagS>&#60;&#47;</TagS>
                     <TagY>TableRow</TagY>
                     <TagS>&#62;</TagS>
                  </div>
                  {/* <div className="pl-4">&#60;&nbsp;&#183;&#183;&#183;&nbsp;&#62;</div> */}
                  <div>
                     <TagS>&#60;&#47;</TagS>
                     <TagY>TableBody</TagY>
                     <TagS>&#62;</TagS>
                  </div>
               </div>
               <div>
                  <TagS>&#60;&#47;</TagS>
                  <TagY>Table</TagY>
                  <TagS>&#62;</TagS>
               </div>
            </div>

            {/* ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */}

            <div className='flex flex-col gap-3'>
               <div className='flex items-center gap-4'>
                  <h5 className='flex-none font-bold'>속성</h5>
                  <div className="w-full h-px bg-natural-300" />
               </div>
               <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-x-1 gap-y-2">
                  <div>hgt</div>
                  <div className="leading-5">
                     <div><TagP>hgt</TagP> : 테이블의 전체 높이를 지정.</div>
                  </div>

                  <div>ColGroup</div>
                  <div className="leading-5">
                     <div><TagS>&#60;<TagR>colgroup</TagR>&#62;</TagS> 태그 테이블의 열 그룹을 정의하는 데 사용됩니다.</div>
                     <div><TagP>columnCount</TagP> : 테이블의 총 열 수를 지정.</div>
                     <div><TagP>defaultWidth</TagP> : 각 열의 기본 너비를 설정.</div>
                     <div><TagP>widths</TagP> : 각 열의 너비를 설정. 객체에 포함되어 있지 않는 열은 defaultWidth 값인 auto가 적용.</div>
                  </div>
                  <div>TableHead</div>
                  <div className="leading-5">
                     <TagS>&#60;<TagR>thead</TagR>&#62;</TagS> 태그와 동일한 역할로 테이블의 헤더를 감쌉니다. 헤더는 일반적으로 열의 제목이나 설명을 포함합니다.
                  </div>
                  <div>TableRow</div>
                  <div className="leading-5">
                     <div><TagS>&#60;<TagR>tr</TagR>&#62;</TagS> 태그를 캡슐화한 컴포넌트로, 테이블의 각 행을 나타냅니다.</div>
                     <div><TagP>striped</TagP> : 줄무늬(대체로 짝수 줄마다 배경색 변경) 스타일을 적용할지 여부를 결정하는 속성.</div>
                     <div><TagP>hoverable</TagP> : 마우스 오버 시 테이블 행에 하이라이트를 적용할지 여부를 결정하는 속성.</div>
                  </div>
                  <div>TableHeadCell</div>
                  <div className="leading-5">
                     <div><TagS>&#60;<TagR>th</TagR>&#62;</TagS> 태그를 캡슐화한 컴포넌트로, 테이블 헤더 셀을 나타냅니다. 이 컴포넌트는 추가적으로 다음과 같은 속성을 받을 수 있습니다.</div>
                     <div><TagP>unsorted</TagP>  : 정렬을 하지 않음을 나타내는 속성. 정렬 화살표를 표시할지 여부를 결정할 수 있습니다.</div>
                     <div><TagP>iName</TagP>="<TagG>아이콘 이름</TagG>"  : 정렬 상태를 나타내는 아이콘을 설정하여 정렬 방향을 나타낼 수 있습니다.</div>
                  </div>
                  <div>TableBody</div>
                  <div className="leading-5">
                     <TagS>&#60;<TagR>tbody</TagR>&#62;</TagS> 태그를 캡슐화한 컴포넌트로, 테이블의 본문 데이터를 감쌉니다. 테이블의 실제 데이터를 포함하는 부분입니다.
                  </div>
                  <div>TableCell</div>
                  <div className="leading-5"><TagS>&#60;<TagR>td</TagR>&#62;</TagS> 태그를 캡슐화한 컴포넌트로, 테이블의 본문 데이터를 나타내는 셀입니다.</div>
               </div>
            </div>
            <div className="font-medium">이외 기본 속성(Attributes)들은 html에서 제공하는 것과 동일합니다</div>
         </div>

         <DocPage root={root} />
      </div>
   );
}