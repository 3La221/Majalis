"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Navbar = () => {
  const navBarElements = [
    {title: 'من نحن', link: '/about'},
    {title: 'الرئيسية', link: '/'},
    {title: 'المجالس', link: '/majalis'},
  ]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-md relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className='rounded-xl bg-primary hover:bg-secondary transition-colors ease-in-out duration-300'>اضافة درس</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className='text-center'>اضافة درس جديد</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  
                  <Input id="title" className="col-span-3" />
                  <Label htmlFor="title" className="text-right">عنوان</Label>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  
                  <Input id="sheikh" className="col-span-3" />
                  <Label htmlFor="sheikh" className="text-right">الشيخ</Label>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input id="mosque" className="col-span-3" />
                  <Label htmlFor="mosque" className="text-right">المسجد</Label>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                <Input id="date" type="date" className="col-span-3" />
                  <Label htmlFor="date" className="text-right">التاريخ</Label>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
               
                  <Select >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="اختر التوقيت" />
                    </SelectTrigger>
                    <SelectContent className='text-right'>
                      <SelectItem value="after-asr" >بعد صلاة العصر</SelectItem>
                      <SelectItem value="before-maghrib">قبل صلاة المغرب</SelectItem>
                      <SelectItem value="after-maghrib">بعد صلاة المغرب</SelectItem>
                    </SelectContent>
                  </Select>
                  <Label htmlFor="time" className="text-right">التوقيت</Label>
                </div>
                <div className="flex  justify-end items-center gap-4">
                  <RadioGroup defaultValue="yes" className="col-span-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="women-allowed-yes" />
                      <Label htmlFor="women-allowed-yes">نعم</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="women-allowed-no" />
                      <Label htmlFor="women-allowed-no">لا</Label>
                    </div>
                  </RadioGroup>
                  <Label className="text-right">هل النساء مسموح بالحضور</Label>
                </div>
              </div>
              <Button type="submit">إضافة الدرس</Button>
            </DialogContent>
          </Dialog>
          <div className="hidden md:flex space-x-8">
            {navBarElements.map((element, index) => (
              <Link href={element.link} key={index} className={
                clsx(
                  "hover:text-secondary transition-colors",
                  pathname === element.link ? 'text-secondary' : 'text-black'
                )
              }>{element.title}</Link> 
            ))}
          </div>
          
          <h1 className="text-2xl font-bold text-primary">مجالس</h1>
          
          <div className="md:hidden">
            <button 
              className="text-teal-900 hover:text-teal-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 flex flex-col justify-start items-center space-y-1 sm:px-3">
          {navBarElements.map((element, index) => (
            <Link href={element.link} key={index}
              className="hover:text-teal-600 transition-colors text-right">
              {element.title}
            </Link> 
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar