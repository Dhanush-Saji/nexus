'use client'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { usePathname } from 'next/navigation';
import { LanguageSupportedMap, useLanguageStore } from '@/store/store';

const LanguageSelect = () => {
    const pathName = usePathname();
    const isChatPage = pathName.includes("/chats");
    const [language, setLanguage, getLanguage, getNotSupportedLanguage] =
    useLanguageStore((state) => [
      state.language,
      state.setLanguage,
      state.getLanguage,
      state.getNotSupportedLanguage,
    ]);
    return (
        isChatPage &&
        <div className='ml-4'>
            <Select onValueChange={(value) => setLanguage(value)}>
                <SelectTrigger className="w-[150px] bg-gradient-to-b from-[#1c1c46] to-[#0D0D25]">
                    <SelectValue placeholder={LanguageSupportedMap[language]} />
                </SelectTrigger>
                <SelectContent>
                    {getLanguage().map((language, index) => (
                        <SelectItem className="cursor-pointer" key={index} value={language}>{LanguageSupportedMap[language]}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default LanguageSelect