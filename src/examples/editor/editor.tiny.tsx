'use client'

import React, { useRef } from 'react';
import { CodeData } from "@/components/helpers/examples/code-demo";
import dynamic from "next/dynamic";
import Editor from "@/components/Editor/Ckeditor5";
import  SunEditor  from  'suneditor-react' ; 
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const code = ``;

function Component() {

  const editor = useRef<SunEditorCore>();
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
};
  return (
    <div>
      <SunEditor
        lang="ko"
        getSunEditorInstance={getSunEditorInstance} 
        setOptions={{
          className: "edit",
          minHeight: "300px",
          buttonList: [
            ['undo', 'redo'],
            ['bold', 'underline', 'italic'],
            ['font', 'fontSize', 'formatBlock'],
            ['align', 'horizontalRule', 'list', 'lineHeight'],
            ['table', 'link', 'image'],
            ['fullScreen', 'showBlocks', 'codeView'],
          ],
          
          
        }}
      />
    </div>
  );
}

export const Suneditor: CodeData = {
  title: 'SunEditor',
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    // {
    //     fileName: 'server',
    //     language: 'tsx',
    //     code: codeRSC,
    // },
  ],
  githubSlug: 'button/button.root.tsx',
  component: <Component />,
};