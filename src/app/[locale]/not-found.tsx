"use client"

import Link from "next/link"
import { Package, Home, Search, ArrowLeft, Warehouse, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo/Brand Section */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="bg-blue-600 p-3 rounded-lg">
            <Warehouse className="h-8 w-8 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-slate-800">Inventory.uz</h1>
            <p className="text-sm text-slate-600">Sklad boshqaruv tizimi</p>
          </div>
        </div>

        {/* 404 Error Display */}
        <div className="space-y-4">
          <div className="relative">
            <div className="text-9xl font-bold text-slate-200 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Package className="h-24 w-24 text-slate-400" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-2">Sahifa topilmadi</h2>
          <p className="text-lg text-slate-600 mb-2">Page Not Found</p>
          <p className="text-slate-500 max-w-md mx-auto">
            Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko&apos;chirilgan bo&apos;lishi mumkin.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Qidiruv / Search</h3>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Mahsulot, sklad yoki hujjat qidiring..." className="pl-10" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Qidirish</Button>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/" className="group">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 hover:border-blue-300 transition-colors">
              <Home className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Bosh sahifa</h3>
              <p className="text-sm text-slate-600">Asosiy dashboard ga qaytish</p>
            </div>
          </Link>

          <Link href="/inventory" className="group">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 hover:border-blue-300 transition-colors">
              <Package className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Inventar</h3>
              <p className="text-sm text-slate-600">Mahsulotlar ro&apos;yxati</p>
            </div>
          </Link>

          <Link href="/warehouses" className="group">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200 hover:border-blue-300 transition-colors">
              <Warehouse className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Skladlar</h3>
              <p className="text-sm text-slate-600">Sklad boshqaruvi</p>
            </div>
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Tezkor harakatlar</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <ClipboardList className="h-4 w-4" />
              <span>Yangi inventarizatsiya</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <Package className="h-4 w-4" />
              <span>Mahsulot qo&apos;shish</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <Warehouse className="h-4 w-4" />
              <span>Sklad yaratish</span>
            </Button>
          </div>
        </div>

        {/* Back Button */}
        <div className="pt-4">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Orqaga qaytish</span>
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-8 text-sm text-slate-500">
          <p>© 2024 Inventory.uz - Sklad boshqaruv tizimi</p>
          <p className="mt-1">
            Yordam kerakmi?{" "}
            <Link href="/support" className="text-blue-600 hover:underline">
              Qo&apos;llab-quvvatlash xizmati
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}