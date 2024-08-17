
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "../components/ui/textarea"

export default function Profile() {
    return (
        <div className="flex justify-center p-4">
            <div className="px-4 space-y-6 sm:px-6  w-[600px]">
                <header className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <img
                            src="/podcast.jpg"
                            alt="Avatar"
                            width="96"
                            height="96"
                            className="rounded-full"
                            style={{ aspectRatio: "96/96", objectFit: "cover" }}
                        />
                        <div className="space-y-1">
                            <h1 className="text-2xl font-bold">Meadow Richardson</h1>
                            <Button size="sm">Change photo</Button>
                        </div>
                    </div>
                </header>
                <Card className="p-2">
                    <CardContent className="flex items-center space-x-4">
                        <CalendarIcon className="w-6 h-6" />
                        <div className="grid items-center grid-rows-2">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Scheduled a meeting</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                    </CardContent>
                </Card>
                <div className="space-y-8 ">
                    <Card className="p-2">
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="E.g. Jane Doe" defaultValue="Meadow Richardson" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="name">Username</Label>
                                <Input id="name" placeholder="E.g. Jane Doe" defaultValue="Meadow@234" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="E.g. jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label>Biography</Label>
                                <Textarea id="bio" placeholder="Enter your bio" className="mt-1" style={{ minHeight: "100px" }} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="pt-6 text-center">
                    <Button className="w-full">Save</Button>
                </div>
            </div>

        </div>
    )
}

function CalendarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}