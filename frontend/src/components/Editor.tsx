import ReactQuill from "react-quill";


interface EditorProps {
  value: string; // Misalnya, saya mengasumsikan bahwa 'value' adalah string
  onChange: (newValue: string) => void; // Mengasumsikan bahwa 'onChange' adalah fungsi yang menerima string
}

export default function Editor({value,onChange}: EditorProps) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  return (
    <div className="content">
    <ReactQuill
      value={value}
      theme={'snow'}
      onChange={onChange}
      modules={modules} />
    </div>
  );
}