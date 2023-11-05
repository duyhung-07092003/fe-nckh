import { Button } from '@/components/atoms/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Button className=' bg-slate-500 w-9 h-9' type={"button"} icon={{width: 30, height:30, className: "" }} loading={false} title='test' />
    </>
  )
}
