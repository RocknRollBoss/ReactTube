import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LucideIcon, Youtube } from "lucide-react"

interface ISubsriber {
  id: string
  avatarUrl: string
  channelName: string
}

interface ISubscriptions {
  title: string
  url: string
  icon: LucideIcon
  subscribers: ISubsriber[]
}
interface ISubscriptionsState {
  subscriptions: ISubscriptions
}

const initialState: ISubscriptionsState = {
  subscriptions: {
    title: "Subscriptions",
    url: "#",
    icon: Youtube,
    subscribers: JSON.parse(localStorage.getItem("subscribers") || "[]"),
  },
}

export const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {
    addSubscription: (state, action: PayloadAction<ISubsriber>) => {
      const findSubs = state.subscriptions.subscribers.find(
        sub => sub.id === action.payload.id,
      )

      if (!findSubs) {
        const updatedSubscribers = [
          ...state.subscriptions.subscribers,
          action.payload,
        ]
        localStorage.setItem("subscribers", JSON.stringify(updatedSubscribers))
        localStorage.setItem("isSubscribe", "true")
        state.subscriptions.subscribers = updatedSubscribers
      }
    },
    removeSubscription: (state, action: PayloadAction<string>) => {
      state.subscriptions.subscribers = state.subscriptions.subscribers.filter(
        sub => sub.id !== action.payload,
      )
      localStorage.setItem(
        "subscribers",
        JSON.stringify(state.subscriptions.subscribers),
      )
    },
  },
})

export const subscriptionsReducer = subscriptionsSlice.reducer
export const { addSubscription, removeSubscription } =
  subscriptionsSlice.actions
