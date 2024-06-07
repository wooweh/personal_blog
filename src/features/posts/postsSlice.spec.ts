import { describe, expect, it } from "vitest"
import postsReducer, {
  MetadataProps,
  PostProps,
  PostStatuses,
  PostsSliceState,
  ShortContentProps,
  deletePost,
  deleteTag,
  deleteTagFromPosts,
  setMetadata,
  setPostMetadata,
  setPostShortContent,
  setPostStatus,
  setShortContent,
  setTag,
  setTags,
} from "./postsSlice"
/*



*/
describe("post slice", () => {
  const initialState: PostsSliceState = {
    posts: {
      tags: {},
      metadata: {},
      shortContent: {},
    },
    postStatus: "draft",
  }

  const mockState: PostsSliceState = {
    postStatus: "draft",
    posts: {
      tags: {
        mockTag1: "mockTag1",
        mockTag2: "mockTag2",
      },
      metadata: {
        mockPost1: {
          title: "mockTitle",
          created: "mockCreated",
          updated: "mockUpdated",
          tags: {
            mockTag1: "mockTag1",
            mockTag2: "mockTag2",
          },
        },
      },
      shortContent: {
        mockPost1: "mock post 1 short content",
      },
    },
  }

  it("should handle initial state", () => {
    expect(postsReducer(undefined, { type: "unknown" })).toStrictEqual(
      initialState,
    )
  })

  it("should handle setPostStatus", () => {
    const status: PostStatuses = "published"
    const actual = postsReducer(initialState, setPostStatus(status))
    expect(actual.postStatus).toBe(status)
  })

  it("should handle setTag", () => {
    const tagName = "mockTag1"
    const actual = postsReducer(initialState, setTag(tagName))
    const tags = actual.posts.tags
    const tag = tags[tagName as keyof typeof tags]
    expect(tag).toEqual(tagName)
  })

  it("should handle deleteTag", () => {
    const tagName = "mockTag1"
    const actual = postsReducer(mockState, deleteTag(tagName))
    const tags = actual.posts.tags
    const tag = tags[tagName as keyof typeof tags]
    expect(tag).toEqual(undefined)
  })

  it("should handle setTags", () => {
    const tags = {
      mockTag1: "mockTag1",
      mockTag2: "mockTag2",
    }
    const actual = postsReducer(initialState, setTags(tags))
    expect(actual.posts.tags).toEqual(tags)
  })

  it("should handle setMetadata", () => {
    const metadata: MetadataProps = {
      mockPost1: {
        title: "mockTitle",
        created: "mockCreated",
        updated: "mockUpdated",
        tags: {
          mockTag1: "mockTag1",
          mockTag2: "mockTag2",
        },
      },
    }
    const actual = postsReducer(initialState, setMetadata(metadata))
    expect(actual.posts.metadata).toEqual(metadata)
  })

  it("should handle setShortContent", () => {
    const shortContent: ShortContentProps = {
      mockPost1: "mock post 1 short content",
    }
    const actual = postsReducer(initialState, setShortContent(shortContent))
    expect(actual.posts.shortContent).toEqual(shortContent)
  })

  it("should handle setPostMetadata", () => {
    const postMetadata: PostProps = {
      title: "mockTitle",
      created: "mockCreated",
      updated: "mockUpdated",
      tags: {
        mockTag1: "mockTag1",
        mockTag2: "mockTag2",
      },
    }
    const actual = postsReducer(
      initialState,
      setPostMetadata({ postId: "mockPost1", metadata: postMetadata }),
    )
    const metadata = actual.posts.metadata
    const post: PostProps = metadata["mockPost1" as keyof typeof metadata]
    expect(post).toEqual(postMetadata)
  })

  it("should handle setPostShortContent", () => {
    const shortContent = "mock post 1 short content"
    const actual = postsReducer(
      initialState,
      setPostShortContent({ postId: "mockPost1", shortContent }),
    )
    const shortContents = actual.posts.shortContent
    const postShortContent =
      shortContents["mockPost1" as keyof typeof shortContents]
    expect(postShortContent).toEqual(shortContent)
  })

  it("should handle deleteTagFromPosts", () => {
    const tag = "mockTag1"
    const actual = postsReducer(
      mockState,
      deleteTagFromPosts({ postIds: ["mockPost1"], tag }),
    )
    const metadata = actual.posts.metadata
    const post: PostProps = metadata["mockPost1" as keyof typeof metadata]
    expect(post.tags[tag]).toEqual(undefined)
  })

  it("should handle deletePost", () => {
    const actual = postsReducer(mockState, deletePost("mockPost1"))
    const metadata = actual.posts.metadata
    const shortContent = actual.posts.shortContent
    const postMetadata = metadata["mockPost1" as keyof typeof metadata]
    const postShortContent =
      shortContent["mockPost1" as keyof typeof shortContent]
    expect(postMetadata).toEqual(undefined)
    expect(postShortContent).toEqual(undefined)
  })
})
