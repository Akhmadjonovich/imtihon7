import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
})

//xullas api dan malumot olib va reduxdan foydalanib onlin dokonga oxshgan sayt qlish kerak  maxsulot cardida add to cart degan button boladi va bosilganda button ustida + va - boladi soonini hosoblaydi va u savatga qoshiladi savatda esa soni va umumiy nrxini hosoblaydi shuni qisqacha logikasini ayt kod yozib berishing shart emas