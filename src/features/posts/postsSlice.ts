import { PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
import { createAppSlice } from "../../app/createAppSlice"
/*



*/
export type PostStatuses = "draft" | "published" | "saving" | "deleting"
export type PostsProps = {
  tags: Tags | {}
  metadata: MetadataProps | {}
  shortContent: ShortContentProps | {}
}
export type Tags = { [key: string]: string }
export type MetadataProps = {
  [key: string]: PostProps
}
export type PostProps = {
  title: string
  tags: Tags
  created: string
  updated?: string
}
export type ShortContentProps = {
  [key: string]: string
}
export type SetPostMetadataProps = {
  postId: string
  metadata: PostProps
}
export type SetPostShortContentProps = {
  postId: string
  shortContent: string
}
export type SetPostTitleProps = {
  postId: string
  title: string
}
export type SetPostTagProps = {
  postId: string
  tag: string
}
export type deleteTagFromPostsProps = {
  postIds: string[]
  tag: string
}
export type SetPostCreatedProps = {
  postId: string
  date: string
}
export type SetPostUpdatedProps = SetPostCreatedProps
/*



*/
export interface PostsSliceState {
  postStatus: PostStatuses
  posts: PostsProps
}

const initialState: PostsSliceState = {
  postStatus: "draft",
  posts: {
    tags: {},
    metadata: {},
    shortContent: {},
  },
}

export const postsSlice = createAppSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostStatus: (state, action: PayloadAction<PostStatuses>) => {
      state.postStatus = action.payload
    },
    setTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload
      _.set(state.posts.tags, tagName, tagName)
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      const tagName = action.payload
      _.unset(state.posts.tags, tagName)
    },
    setTags: (state, action: PayloadAction<Tags>) => {
      state.posts.tags = action.payload
    },
    setMetadata: (state, action: PayloadAction<MetadataProps>) => {
      state.posts.metadata = action.payload
    },
    setShortContent: (state, action: PayloadAction<ShortContentProps>) => {
      state.posts.shortContent = action.payload
    },
    setPostMetadata: (state, action: PayloadAction<SetPostMetadataProps>) => {
      const { postId, metadata } = action.payload
      _.set(state.posts.metadata, postId, metadata)
    },
    setPostShortContent: (
      state,
      action: PayloadAction<SetPostShortContentProps>,
    ) => {
      const { postId, shortContent } = action.payload
      _.set(state.posts.shortContent, postId, shortContent)
    },
    deleteTagFromPosts: (
      state,
      action: PayloadAction<deleteTagFromPostsProps>,
    ) => {
      const { postIds, tag } = action.payload
      postIds.forEach(postId => {
        _.unset(state.posts.metadata, `${postId}.tags.${tag}`)
      })
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      _.unset(state.posts.metadata, postId)
      _.unset(state.posts.shortContent, postId)
    },
  },
  selectors: {},
})

export const {
  setPostStatus,
  setTag,
  deleteTag,
  setTags,
  setMetadata,
  setShortContent,
  setPostMetadata,
  setPostShortContent,
  deleteTagFromPosts,
  deletePost,
} = postsSlice.actions

export const {} = postsSlice.selectors

export default postsSlice.reducer
