"use client"

import { Package, ArrowLeft, Warehouse } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        <div className="pt-4 flex justify-center">
          <Button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-white bg-[#145dfc] cursor-pointer hover:bg-[#145dfc]/60"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Orqaga qaytish</span>
          </Button>
        </div>
        </div>
      </div>
    </div>
  )
}