"use client";
import React from "react";
import Link from 'next/link';
import { getRandomUser } from "@/utils/randomuser";
import publicUrl from '@/utils/publicUrl';
import axios from "axios";
import { HiDotsVertical } from "react-icons/hi";
import { useTheme } from "next-themes";
import { BlockNoteView, useBlockNote, Theme, darkDefaultTheme } from "@blocknote/react";
import "@blocknote/core/style.css";
import YPartyKitProvider from "y-partykit/provider";
import * as Y from "yjs";
import Sidebar from "./Sidebar";
import { markdownToPlainText } from "../utils/markdown_to_text";

export default function Editor({ data, id }) {
    const { theme } = useTheme();

    const content = data.content;
    const initData = content.map((block) => ({
        id: block.id,
        type: block.type,
        props: block.props,
        content: block.content[0]?.text || "",
        children: [],
    }));

    const doc = new Y.Doc();
    const provider = new YPartyKitProvider("https://frontend-party.techymt.partykit.dev", `room-${id}`, doc);

    const editor = useBlockNote({
        initialContent: initData,
        collaboration: {
            provider,
            fragment: doc.getXmlFragment("document-store"),
            user: getRandomUser(),
        },
    });

    const darkRedTheme = {
        ...darkDefaultTheme,
        colors: {
            ...darkDefaultTheme.colors,
            editor: {
                ...darkDefaultTheme.colors.editor,
                background: "#1a202c", // Tailwind dark bg
            },
            sideMenu: "#ffffff",
        },
    };

    const handleSave = async () => {
        const md = await editor.blocksToMarkdownLossy(editor.topLevelBlocks);
        const preview = markdownToPlainText(md);
        await axios.put(`${publicUrl()}/note/${id}`, {
            title: editor.topLevelBlocks.find((b) => b.type === "heading")?.content[0]?.text || "Untitled",
            content: editor.topLevelBlocks,
            preview,
        });
        console.log("Saved");
    };

    return (
        content && (
            <main className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <Sidebar />

                <section className="flex-1 flex flex-col overflow-hidden">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 truncate max-w-xs">
                            {data.title || "Untitled Note"}
                        </h3>
                        <div className="flex gap-3 items-center">
                            <button
                                onClick={handleSave}
                                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md shadow"
                            >
                                Save
                            </button>
                            <button className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
                                <HiDotsVertical />
                            </button>
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="flex-grow overflow-y-auto py-10 px-8 md:px-20 dark:bg-gray-800">
                        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                            <BlockNoteView
                                editor={editor}
                                theme={theme === "dark" ? darkRedTheme : 'light'}
                            />
                        </div>
                    </div>
                </section>
            </main>
        )
    );
}
