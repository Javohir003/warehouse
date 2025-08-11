"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { RiInstagramFill } from "react-icons/ri"
import { Check, Globe, Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { ImTelegram } from "react-icons/im"
import uz from "../../../public/icons/uz.svg"
import ru from "../../../public/icons/rus.svg"
import en from "../../../public/icons/eng.svg"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"

export default function NavbarLayout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const currentLocale = useLocale()
    const t = useTranslations("Navbar")

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isMobileMenuOpen])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const navigationLinks = [
        { href: "/about", label: t("about") },
        { href: "/services", label: t("services") },
        { href: "/news", label: t("news") },
        { href: "/project", label: t("project") },
        { href: "/contact", label: t("contact") },
    ]

    const changeLocale = (locale: string) => {
        if (locale === currentLocale) return
        const segments = pathname.split("/")
        segments[1] = locale
        const newPath = segments.join("/")
        router.push(newPath)
    }

    const languages = [
        { code: "uz", label: "UZ", icon: uz },
        { code: "en", label: "EN", icon: en },
        { code: "ru", label: "RU", icon: ru },
    ]

    const currentLanguage = languages.find((l) => l.code === currentLocale)

    return (
        <div className="fixed top-0 left-0 w-full bg-[#ffffffdd] backdrop-blur-sm shadow z-50">
            <div className="container mx-auto px-4">
                {/* Top Header - Hidden on mobile */}
                <header className="hidden sm:flex items-center justify-between py-2 border-b">
                    <article className="flex items-center gap-2">
                        <RiInstagramFill className="text-[25px] text-gray-600 hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
                        <ImTelegram className="text-[23px] text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300" />
                    </article>
                    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-[120px] flex items-center gap-2 justify-center cursor-pointer bg-gradient-to-r from-white-500 to-white-600 text-gray font-medium rounded-xl border-none shadow-md"
                            >
                                {currentLanguage && (
                                    <Image
                                        src={currentLanguage.icon || "/placeholder.svg"}
                                        alt={currentLanguage.label}
                                        width={20}
                                        height={15}
                                        className="rounded-sm"
                                    />
                                )}
                                <span>{currentLanguage?.label || "Select"}</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[140px] p-0 shadow-lg border rounded-xl bg-white overflow-hidden">
                            <div className="flex flex-col">
                                {languages.map((locale) => (
                                    <button
                                        key={locale.code}
                                        onClick={() => changeLocale(locale.code)}
                                        className={`flex items-center cursor-pointer justify-between px-3 py-2 text-sm transition-colors ${currentLocale === locale.code ? "bg-blue-200" : "hover:bg-blue-200"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={locale.icon || "/placeholder.svg"}
                                                alt={locale.label}
                                                width={20}
                                                height={15}
                                                className="rounded-sm"
                                            />
                                            <span>{locale.label}</span>
                                        </div>
                                        {currentLocale === locale.code && <Check className="h-4 w-4 stroke-blue-500" />}
                                    </button>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                </header>

                {/* Main Navigation */}
                <nav className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <Link href={`/${currentLocale}`} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div>
                            <h3 className="text-[18px] font-bold leading-4">Warehouse Systems</h3>
                            <p className="text-[12px] text-gray-400">Consulting</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-10">
                        {navigationLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={`/${currentLocale}${link.href}`}
                                    className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium ${pathname === `/${currentLocale}${link.href}` ? "font-bold" : ""}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "h-screen opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <div className="pt-4 flex flex-col justify-between h-[90vh]">
                        {/* Mobile Navigation Links */}
                        <ul className="space-y-3 mb-4">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={`/${currentLocale}${link.href}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Language Selector */}
                        <div>
                            <div className="sm:hidden block pt-4">
                                <p className="text-sm text-gray-500 mb-3 px-4">{t("chooseLanguage")}</p>
                                <div className="px-4">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <button
                                                className="w-full px-4 py-2 border !bg-white flex items-center gap-2 justify-between bg-gradient-to-r from-white-500 to-white-600 text-gray font-medium rounded-xl shadow-md cursor-pointer"
                                            >
                                                <div className="flex items-center gap-2">
                                                    {currentLanguage && (
                                                        <Image
                                                            src={currentLanguage.icon || "/placeholder.svg"}
                                                            alt={currentLanguage.label}
                                                            width={20}
                                                            height={15}
                                                            className="rounded-sm"
                                                        />
                                                    )}
                                                    <span>{currentLanguage?.label || "Select"}</span>
                                                </div>
                                                <Globe className="w-4 h-4 text-gray-600" />
                                            </button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[350px] max-xxxl:w-[260px] p-0 shadow-lg border rounded-xl bg-white overflow-hidden">
                                            <div className="flex flex-col">
                                                {languages.map((locale) => (
                                                    <button
                                                        key={locale.code}
                                                        onClick={() => {
                                                            changeLocale(locale.code)
                                                            setIsMobileMenuOpen(false)
                                                        }}
                                                        className={`flex items-center cursor-pointer justify-between px-3 py-2 text-sm transition-colors ${currentLocale === locale.code ? "bg-blue-200" : "hover:bg-blue-200"
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <Image
                                                                src={locale.icon || "/placeholder.svg"}
                                                                alt={locale.label}
                                                                width={20}
                                                                height={15}
                                                                className="rounded-sm"
                                                            />
                                                            <span>{locale.label}</span>
                                                        </div>
                                                        {currentLocale === locale.code && <Check className="h-4 w-4 stroke-blue-500" />}
                                                    </button>
                                                ))}
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            {/* Mobile Social Media */}
                            <div className="sm:hidden block border-t border-gray-200 pt-4 mt-4">
                                <div className="flex items-center justify-center gap-4">
                                    <RiInstagramFill className="text-[25px] text-pink-500 transition-colors duration-300 cursor-pointer" />
                                    <ImTelegram className="text-[23px] text-blue-600 cursor-pointer transition-colors duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
        </div>)
}
