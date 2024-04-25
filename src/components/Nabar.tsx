/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aVLU9HgHUJh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import Link from 'next/link'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet'

export default function Navbar() {
    return (
        <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 ">
            <Link className="flex items-center text-gray-900 dark:text-white" to="#">
                <span className="ml-2 text-lg font-semibold">CMCK</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
                <Link className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" to="/home">
                    Home
                </Link>
                <Link className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" to="#">
                    About
                </Link>
                <Link className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" to="#">
                    Services
                </Link>
                <Link className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" to="#">
                    Portfolio
                </Link>
                <Link className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300" to="#">
                    Contact
                </Link>
            </div>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="grid gap-2 py-6">
                            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="#">
                                Home
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="#">
                                About
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="#">
                                Services
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="#">
                                Portfolio
                            </Link>
                            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="#">
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}
