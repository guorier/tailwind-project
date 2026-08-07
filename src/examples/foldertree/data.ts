export interface Folder {
  id: string;
  name: string;
  children?: Folder[];
}

/** 예제용 폴더 구조. 5단계까지 중첩된다. */
export const sampleFolders: Folder[] = [
  {
    id: "1",
    name: "Depth 1",
    children: [
      {
        id: "1-1",
        name: "Depth 2-1",
        children: [
          {
            id: "1-1-1",
            name: "Depth 3",
            children: [
              {
                id: "1-1-1-1",
                name: "Depth 4",
                children: [{ id: "1-1-1-1-1", name: "Depth 5" }],
              },
            ],
          },
        ],
      },
      {
        id: "1-2",
        name: "Depth 2-2",
        children: [
          {
            id: "1-2-1",
            name: "Depth 3-1",
            children: [
              { id: "1-2-1-1", name: "Depth 4-1" },
              { id: "1-2-1-2", name: "Depth 4-2" },
            ],
          },
          {
            id: "1-2-2",
            name: "Depth 3-2",
            children: [{ id: "1-2-2-1", name: "Depth 4-1" }],
          },
        ],
      },
      { id: "1-3", name: "Depth 2-3", children: [] },
      { id: "1-4", name: "Depth 2-4" },
    ],
  },
];
