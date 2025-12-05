import { useEffect, useState, useRef } from "react";

const TextEditor: React.FC = () => {
    const [selectedText, setSelectedText] = useState<string>("");
    const editorRef = useRef<HTMLDivElement | null>(null);

    const textSelection = () => {
        const text = window.getSelection();
        if (text && text.toString().length > 0) {
            setSelectedText(text.toString());
        } else {
            setSelectedText("");
        }
    };

    const handleBold = () => {
        if (selectedText) {
            document.execCommand("bold");
        } else {
            alert("Select text first");
        }
    };

    const handleItalic = () => {
        if (selectedText) {
            document.execCommand("italic");
        } else {
            alert("Select text first");
        }
    };

    const handleHighlight = () => {
        if (selectedText) {
            document.execCommand("hiliteColor", false, "yellow");
        } else {
            alert("Select text first");
        }
    };

    useEffect(() => {
        document.addEventListener("selectionchange", textSelection);
        return () => {
            document.removeEventListener("selectionchange", textSelection);
        };
    }, []);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-[1200px] h-[650px] rounded-lg">
                <h1 className="text-center text-2xl text-blue-500 italic mb-5">Text Editor</h1>
                <h1 className="text-center text-sm text-red-500">Select text to apply effects</h1>

                {selectedText && <p className="text-center p-2">Selected: {selectedText}</p>}

                <div className="flex justify-around border-2 border-blue-500 m-3 p-4 rounded-lg">
                    <button
                        className="border-2 border-blue-500 p-3 m-3 cursor-pointer bg-white text-black rounded-lg 
                        hover:bg-blue-900/50 hover:text-white duration-150"
                        onClick={handleBold}
                    >
                        Bold
                    </button>
                    <button
                        className="border-2 border-blue-500 p-3 m-3 cursor-pointer bg-white text-black rounded-lg 
                        hover:bg-blue-900/50 hover:text-white duration-150"
                        onClick={handleItalic}
                    >
                        Italic
                    </button>
                    <button
                        className="border-2 border-blue-500 p-3 m-3 cursor-pointer bg-white text-black rounded-lg 
                        hover:bg-blue-900/50 hover:text-white duration-150"
                        onClick={handleHighlight}
                    >
                        Highlight
                    </button>
                </div>

                <div
                    ref={editorRef}
                    contentEditable
                    className="w-[1177px] h-[400px] border-2 border-blue-500 text-xl p-3 m-3 bg-white/50 text-black rounded-lg"
                    suppressContentEditableWarning
                >
                    Write your thoughts...
                </div>
            </div>
        </div>
    );
};

export default TextEditor;
