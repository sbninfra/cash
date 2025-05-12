"use client";

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Heading,
  List,
  ListOrdered,
  LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      // StarterKit.configure({
      //   heading: {
      //     levels: [1, 2],
      //   },
      //   bulletList: true,
      //   orderedList: true,
      //   listItem: true,
      // }),
      StarterKit.configure({
        heading: true,
        bulletList: true,
        orderedList: true,
        listItem: true,
      }),

      Underline,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
  });

  const [savedHtml, setSavedHtml] = useState("");

  const handleSave = () => {
    if (editor) {
      const html = editor.getHTML();
      setSavedHtml(html);
      console.log("Saving to DB:", html);
    }
  };

  if (!editor) return null;

  return (
    <div className="space-y-4 max-w-7xl mx-auto w-full">
      <div className="flex flex-wrap gap-2 rounded-lg p-2 bg-muted">
        <Toggle
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Toggle>

        <Toggle
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Toggle>

        <Toggle
          pressed={editor.isActive("underline")}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon className="h-4 w-4" />
        </Toggle>

        <Toggle
          pressed={editor.isActive("heading", { level: 1 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          {/* <Heading className="h-4 w-4" /> */}
          <span className="text-xs ml-1">H1</span>
        </Toggle>

        <Toggle
          pressed={editor.isActive("heading", { level: 2 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          {/* <Heading className="h-4 w-4" /> */}
          <span className="text-xs ml-1">H2</span>
        </Toggle>

        <Toggle
          pressed={editor.isActive("bulletList")}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          <List className="h-4 w-4" />
        </Toggle>

        <Toggle
          pressed={editor.isActive("orderedList")}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>

        <Toggle
          pressed={editor.isActive("link")}
          onPressedChange={() => {
            const url = window.prompt("Enter URL");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
        >
          <LinkIcon className="h-4 w-4" />
        </Toggle>

        <Toggle
          pressed={editor.isActive({ textAlign: "left" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
        >
          <AlignLeft className="h-4 w-4" />
        </Toggle>

        <Toggle
          pressed={editor.isActive({ textAlign: "center" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
        >
          <AlignCenter className="h-4 w-4" />
        </Toggle>

        <Toggle
          pressed={editor.isActive({ textAlign: "right" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
        >
          <AlignRight className="h-4 w-4" />
        </Toggle>
      </div>

      <div className="p-4 border-2 rounded-md bg-white">
        <EditorContent className=" [&>*]:focus:outline-none" editor={editor} />
      </div>

      <Button onClick={handleSave}>Save</Button>

      {savedHtml && (
        <div className="mt-4 prose tiptap pt-4 ">
          <h3 className="font-semibold mb-2">Preview (Saved HTML):</h3>
          <div
            className="space-y-2 break-all"
            dangerouslySetInnerHTML={{ __html: savedHtml }}
          />
        </div>
      )}
    </div>
  );
};

export default TiptapEditor;
