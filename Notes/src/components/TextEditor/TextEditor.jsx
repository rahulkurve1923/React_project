import styled from "styled-components";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const formats = [
  "bold",
  "italic",
  "underline",

  "color",
  "background",
];

const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [],
    [{ color: [] }, { background: [] }],
  ],
};

const TextEditor = ({ value, setValue, color }) => {
  return (
    <Container noteColor={color}>
      <ReactQuill
        formats={formats}
        modules={modules}
        value={value}
        onChange={setValue}
        placeholder="Write your note here ..."
      />
    </Container>
  );
};

export default TextEditor;

const Container = styled.div`
  .ql-editor {
    height: 250px;
    background-color: ${({ noteColor }) => noteColor};
  }
`;
