import { Loader2 } from "lucide-react"

export const Loading = () => {
    return (
        <div className="h-full w-full flex flex-col gap-y-4 justify-center items-center">
            <Loader2 className="h-4 w-4 animate-spin" />
        </div>
    )
}