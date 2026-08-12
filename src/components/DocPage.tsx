import { CodeData, CodeDemo } from "@/components/helpers/examples/code-demo";
import ObjectParameter, { Parameter } from "../app/docs/(ui)/ObjectParameter";
import { Container } from "@/components/Container";

/**
 * root 는 예제 모듈 전체(`import * as root`) 또는 순서를 지정한 배열을 받는다.
 * 네임스페이스 객체의 키 순서는 번들러가 알파벳순으로 정렬하므로,
 * 표시 순서를 고정해야 할 때는 배열로 넘긴다.
 */
export default function DocPage({ parameters, root }: { parameters?: Parameter[], root: { [key: string]: CodeData } | CodeData[] }) {
  const items = Array.isArray(root) ? root : Object.values(root);

  return (
    <Container>
      {parameters && <ObjectParameter parameters={parameters} />}
      <div className="mx-auto flex min-w-0 flex-col pt-6">
        {items.map((code, i) =>
          // 예제가 순차적으로 떠오르도록 인덱스만큼 지연을 준다.
          // 목록이 길어져도 대기가 길어지지 않게 상한을 둔다.
          <div
            key={i}
            className="animate-rise-in motion-reduce:animate-none"
            style={{ animationDelay: `${Math.min(i, 6) * 80}ms` }}
          >
            <CodeDemo data={code} />
          </div>
        )}
      </div>
    </Container>
  );
}