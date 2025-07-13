"use client";

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { toast } from "sonner";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Youtube from "@tiptap/extension-youtube";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Input from "@/conponents/input";
import Textarea from "@/conponents/textArea";
import TitleDatepicker from "@/conponents/admin/datePicker";
import { v4 as uuidv4 } from "uuid";

import { Toaster } from "@/components/ui/sonner";
// import { insertBlog, updateBlogByID } from "lib";
import { blogUser } from "@/const/blogConst";
import { SelectBlogCategories } from "./SelectCategories";
import { SelectUser } from "./SelectUser";
import { BannerImage } from "@/components/bannerImage";
import InputTagList from "./inputTagList";
import RichTextEditor from "./RichTextEditor";

const TiptapEditor = ({ data }) => {
  const [title, setTitle] = useState(data?.title || "");
  const [metaDescription, setMetaDescription] = useState(
    data?.metaDescription || ""
  );
  const [blogCategory, setBlogCategory] = useState(data?.blogCategory || "");
  const [user, setUser] = useState(
    data ? blogUser.find((item) => item.name === data.userName) : ""
  );
  const [imageLink, setImageLink] = useState("");
  const [tagList, setTagList] = useState(data?.tags || []);
  const [blogDate, setBlogDate] = useState(
    data?.date ? JSON.parse(data.date) : new Date()
  );
  const [blogImage, setBlogImage] = useState(data?.image || "");
  const [loading, setLoading] = useState(false);

  const [textEditorData, setTextEditorData] = useState(data?.data || "");

  const uuid = uuidv4();

  const handleSave = async () => {
    setLoading(true);
    if (textEditorData) {
      if (data?.slug) {
        const response = await updateBlogByID({
          title,
          metaDescription,
          blogCategory,
          image: blogImage,
          tags: tagList,
          date: blogDate,
          data: html,
          userImage: user.image,
          userName: user.name,
          slug: data?.slug,
        });
        if (response) {
          toast("blog Sved.");
        } else {
          toast("ERROR");
        }
      } else {
        // const response = await insertBlog({
        //   title,
        //   metaDescription,
        //   blogCategory,
        //   image: blogImage,
        //   tags: tagList,
        //   date: blogDate,
        //   data: html,
        //   userImage: user.image,
        //   userName: user.name,
        // });
        showNoti(response);
      }
    }
    setLoading(false);
  };

  function showNoti(response) {
    if (response) {
      toast("blog Sved.");

      setTitle("");
      setMetaDescription("");
      setBlogCategory("");
      setBlogImage("");
      setTagList([]);
      setBlogDate(new Date());
      setUser("");
      editor.commands.clearContent();
    } else {
      toast("ERROR");
    }
  }

  useEffect(() => {
    console.log(tagList);
  }, [tagList]);

  return (
    <div className="mx-auto w-full max-w-7xl">
      <Toaster />
      <Input
        title={"Blog Title"}
        placeholder="Enter Blog Title"
        className="mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="mb-3 grid grid-cols-2 gap-4">
        <BannerImage
          maxWidthOrHeight={3600}
          maxSizeMB={0.3}
          name={`blogImage-${uuid}`}
          id={uuid}
          label="Blog Image"
          bannerImage={blogImage}
          setBannerImage={(value) => {
            setBlogImage(value);
          }}
        />
        <InputTagList value={tagList} setList={setTagList} />
      </div>
      <Textarea
        title={"Blog meta description"}
        placeholder="Enter Blog Meta Description"
        className="mb-4"
        value={metaDescription}
        onChange={(e) => setMetaDescription(e.target.value)}
      />

      <div className="flex w-full flex-col gap-6 sm:flex-row">
        <SelectBlogCategories value={blogCategory} onChange={setBlogCategory} />
        <SelectUser value={user} onChange={setUser} />
        <TitleDatepicker
          value={blogDate}
          onChange={setBlogDate}
          title={"Published Date"}
          className={"mb-4"}
        />
      </div>
      {/* date and category */}

      <RichTextEditor data={textEditorData} setData={setTextEditorData} />

      <Button disabled={loading} onClick={handleSave}>
        Save
      </Button>

      {textEditorData && (
        <div className="prose tiptap mt-4 pt-4">
          <h3 className="mb-2 font-semibold">Preview (Saved HTML):</h3>
          <div
            className="space-y-2 break-all"
            dangerouslySetInnerHTML={{ __html: textEditorData }}
          />
        </div>
      )}
    </div>
  );
};

export default TiptapEditor;
