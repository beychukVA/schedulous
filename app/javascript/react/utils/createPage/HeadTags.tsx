import * as React from "react";

const TITLE_PREFIX = " | Schedulous";
const DEFAULT_DESCRIPTION = "Lorem Ipsum Dolor";

export interface ITagsData {
  title?: string;
  description?: string | null;
  image?: string | null;
  type?: string;
  cannonicalUrl?: string;
  robots?: string | null;
  author?: string | null;
  authorUrl?: string | null;
}

interface IProps {
  tags?: ITagsData;
  title?: string;
  titleNoPrefix?: boolean;
}

export default function HeadTags({ tags, title, titleNoPrefix }: IProps) {
  if (!title && !tags) {
    throw new Error("Either title or tags should be implemented");
  }

  if (!tags) {
    tags = {};
  }

  if (!title && tags.title) {
    title = tags.title;
  }

  if (!titleNoPrefix) {
    title += TITLE_PREFIX;
  }

  return (
    <head>
      <title>{title}</title>
      {tags.robots && <meta name="robots" content={tags.robots} />}
      <meta
        name="description"
        content={tags.description || DEFAULT_DESCRIPTION}
      />
    </head>
  );
}
