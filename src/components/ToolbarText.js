import React from 'react'
import ReactQuill from 'react-quill'
import '../../node_modules/react-quill/dist/quill.snow.css'

const ToolbarText = () => {
  const [body, setBody] = React.useState('')

  const handleBody = (e) => {
    console.log(e)
    setBody(e)
  }

  return (
    <>
      <h2>Text editor</h2>
      <ReactQuill
        placeholder=" write some"
        modules={modules}
        formats={formats}
        onChange={handleBody}
        value={body}
      ></ReactQuill>
    </>
  )
}

const modules = {
  toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']],
}

const formats = [
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
]
export default ToolbarText
