import React, { useState, useContext, useEffect } from "react";
import { convertToRaw, EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import { DetailsContext } from '../context/Details';
import { patchDetails } from "../api";
import {stateFromHTML} from 'draft-js-import-html';


export const MyEditor = () => {
  const { details, setDetails } = useContext(DetailsContext);

  let contentState = stateFromHTML(details.text_about);

  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithText(details.text_about)
  );


  const saveContent = () => {
    const obj = {
      text_about: details.text_about,
      active_sections: details.active_sections,
      image_about: details.image_about
    };
    obj.text_about = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    patchDetails(obj).then(() => {
      alert('Text has been updated.')
    });
    setDetails(obj);
  }

  return (
    <div>
      
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />

      <button onClick={() => saveContent()}>Save</button>

    </div>
  );
};
