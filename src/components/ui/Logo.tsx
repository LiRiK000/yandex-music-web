import Link from 'next/link'
import { motion } from 'framer-motion'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="h-5 w-6 text-white dark:text-black bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 items-center justify-center flex font-semibold">
        M
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        <h1>Music</h1>
      </motion.span>
    </Link>
  )
}
