//video
export interface IVideos {
  kind: string
  nextPageToken: string
  pageInfo: IPageInfo
  items: IVideoItem[]
}

export interface IPageInfo {
  totalResults: string
  resultsPerPage: number
}

export interface IVideoItem {
  kind: string
  id: IId
  snippet: ISnippet
  statistics?: IVideoStatistics
}
export interface IVideoStatistics {
  commentCount: string
  favoriteCount: string
  likeCount: string
  viewCount: string
}
export interface IId {
  kind: string
  videoId: string
}

export interface ISnippet {
  publishedAt?: string
  channelId: string
  title: string
  description: string
  thumbnails: IThumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime?: string
}

export interface IThumbnails {
  default: IDefault
  medium: IMedium
  high: IHigh
  standard: IStandard
  maxres: IMaxres
}

export interface IDefault {
  url: string
  width: number
  height: number
}

export interface IMedium {
  url: string
  width: number
  height: number
}

export interface IHigh {
  url: string
  width: number
  height: number
}

export interface IStandard {
  url: string
  width: number
  height: number
}

export interface IMaxres {
  url: string
  width: number
  height: number
}

//channel

export interface IChannel {
  kind: string
  pageInfo: IChannelPageInfo
  items: IChannelItems
}

export interface IChannelPageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface IChannelItems {
  kind: string
  id: string
  snippet: IChannelSnippet
  contentDetails: IChannelContentDetails
  statistics: IChannelstatistics
}

export interface IChannelSnippet {
  title: string
  description: string
  customUrl?: string
  publishedAt: string
  thumbnails: IChannelThumbnails
  country: string
}

export interface IChannelThumbnails {
  default: IChannelDefault
  medium: IChannelMedium
  high: IChannelHigh
}

export interface IChannelDefault {
  url: string
  width: number
  height: number
}

export interface IChannelMedium {
  url: string
  width: number
  height: number
}

export interface IChannelHigh {
  url: string
  width: number
  height: number
}

export interface IChannelContentDetails {
  relatedPlaylists: IChannelRelatedPlaylists
}

export interface IChannelRelatedPlaylists {
  likes: string
  uploads: string
}

export interface IChannelstatistics {
  viewCount: string
  subscriberCount: number
  hiddenSubscriberCount: boolean
  videoCount: string
}

//comments

export interface IComments {
  kind: string
  etag: string
  nextPageToken: string
  pageInfo: IPageInfo
  items: ICommentsitem[]
}

export interface IPageInfo {
  totalResults: string
  resultsPerPage: number
}

export interface ICommentsitem {
  kind: string
  etag: string
  id: string
  snippet: ICommentSnippet
}

export interface ICommentSnippet {
  channelId: string
  videoId: string
  topLevelComment: ITopLevelComment
  canReply: boolean
  totalReplyCount: number
  isPublic: boolean
}

export interface ITopLevelComment {
  kind: string
  etag: string
  id: string
  snippet: ICommentSnippetTwo
}

export interface ICommentSnippetTwo {
  channelId: string
  videoId: string
  textDisplay: string
  textOriginal: string
  authorDisplayName: string
  authorProfileImageUrl: string
  authorChannelUrl: string
  authorChannelId: IAuthorChannelId
  canRate: boolean
  viewerRating: string
  likeCount: number
  publishedAt: string
  updatedAt: string
}

export interface IAuthorChannelId {
  value: string
}

export interface ITokens {
  access_token: string
  refresh_token: string
}
