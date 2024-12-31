"use server";

import { Post } from "@/app/page";

const posts: Post[] = [
  {
    id: 1,
    title: "Post One",
    description:
      "<p>This is the <strong>description</strong> for post one.</p>",
    content: `<p>Here is the detailed <strong>content</strong> for post one. It includes more details and examples.</p>
                <ul>
                  <li>First point with <em>emphasis</em></li>
                  <li>Second point with <strong>importance</strong></li>
                </ul>`,
  },
  {
    id: 2,
    title: "Post Two",
    description: "<p>This is the <i>description</i> for post two.</p>",
    content: `<p>Here is the detailed content for post two. It has a <a href="https://example.com" target="_blank" class="text-blue-500 underline">link</a> to an external resource.</p>`,
  },
  {
    id: 3,
    title: "Post Three",
    description: `<p>This is the description for post three with a <a href="https://example.com" target="_blank" class="text-blue-500 underline">link</a>.</p>`,
    content: `<p>This is the <strong>content</strong> for post three. It is meant to give in-depth insights into the topic.</p>
                <blockquote class="border-l-4 pl-4 italic text-gray-600">"This is a quoted text for emphasis."</blockquote>`,
  },
];

export const getPosts = async () => {
  return posts;
};
