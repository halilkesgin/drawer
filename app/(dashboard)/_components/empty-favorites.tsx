import { AlertOctagon } from "lucide-react"

import { Button } from "@/components/ui/button"

export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <AlertOctagon className="h-10 w-10" />
            <h2 className="text-2xl font-semibold mt-6">
                Create your first boards
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Start by creating a board for your organization
            </p>
            <div className="mt-6">
                <Button size="lg">
                    Create board
                </Button>
            </div>
        </div>
    )
}