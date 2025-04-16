import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RegisterType } from "@/pages/register"
type Props = {
  user: RegisterType
}
const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("auth")
  window.location.reload()
}
export const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <img
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="user-avatar"
        />
      </PopoverTrigger>
      <PopoverContent className="w-[150px] text-sm">
        <ul>
          <li className="font-semibold">{user.name}</li>
          <li className="font-semibold border-b-1 pb-2">{user.email}</li>
          <button className="pt-2" onClick={() => logout()}>
            <li className="hover:text-gray-400">Logout</li>
          </button>
        </ul>
      </PopoverContent>
    </Popover>
  )
}
