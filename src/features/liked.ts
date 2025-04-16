import { IId, IVideoItem } from "@/app/services/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface LikedState {
  likedVideos: IVideoItem[]
}

const initialState: LikedState = {
  likedVideos: JSON.parse(localStorage.getItem("liked") || "[]"),
}

export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<IVideoItem>) => {
      const findVideo = state.likedVideos.find(
        video => video.id === action.payload.id,
      )
      if (!findVideo) {
        const updatedVideo = [...state.likedVideos, action.payload]
        localStorage.setItem("liked", JSON.stringify(updatedVideo))
        state.likedVideos = updatedVideo
      }
    },
    removeVideo: (state, action: PayloadAction<IId>) => {
      state.likedVideos = state.likedVideos.filter(
        video => video.id !== action.payload,
      )
      localStorage.setItem("liked", JSON.stringify(state.likedVideos))
    },
  },
})

export const likedReducer = likedSlice.reducer
export const { addVideo, removeVideo } = likedSlice.actions
