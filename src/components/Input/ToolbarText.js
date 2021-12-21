import React from 'react'
import ReactQuill from 'react-quill'
import styled from 'styled-components/macro'

import '../../../node_modules/react-quill/dist/quill.snow.css'

const StReactQuill = styled(ReactQuill)`
  border: 1px solid transparent;
  border-radius: 7px;

  :focus-within {
    border: 1px solid var(--color-primary-700);
  }

  .ql-stroke {
    stroke: var(--color-primary-600) !important;
    opacity: 0.8;
  }

  .ql-snow.ql-toolbar button:hover {
    background: var(--color-primary-50) !important;
  }

  .ql-active {
    background: var(--color-primary-50) !important;
  }

  .ql-toolbar.ql-snow {
    border: none;
    padding: 4px 8px 3px 45% !important;
  }

  .ql-container.ql-snow {
    border: none;
    font-family: 'Montserrat';
    font-size: 1.3rem;
    letter-spacing: var(--spacing-small);
    color: var(--color-primary-900);
  }

  .ql-editor.ql-blank::before {
    left: 23px;
    opacity: 0.2;
    color: var(--color-primary-900);
  }

  .ql-editor {
    padding: 4px 8px 25px 22px !important;
  }

  .ql-toolbar.ql-snow:focus,
  .ql-container.ql-snow:focus {
    border: 1px solid var(--color-primary-700);
  }
`

const ToolbarText = (props) => {
  const [body, setBody] = React.useState('')

  const handleBody = (e) => {
    console.log(e)
    setBody(e)
  }

  return (
    <>
      <StReactQuill
        modules={modules}
        formats={formats}
        onChange={handleBody}
        spellCheck={'false'}
        value={body}
        placeholder={props.placeholder}
      />
    </>
  )
}

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
  ],
}

const formats = ['bold', 'italic', 'underline', 'list', 'bullet']
export default ToolbarText
