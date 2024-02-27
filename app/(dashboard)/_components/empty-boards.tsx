import { AlertOctagon } from "lucide-react"

export const EmptyBoards = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <AlertOctagon className="h-10 w-10" />
            <h2 className="text-2xl font-semibold mt-6">
                No favorie boards!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Try favoriting board
            </p>
        </div>
    )
}