'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const Footer = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="container max-w-5xl">
      <div className="flex justify-between items-end font-sm py-6">
        <Link href="https://github.com/dw3624" target="_blank">
          <span className="inline-flex items-center justify-center text-sm text-muted-foreground hover:underline">
            © dw3624
          </span>
        </Link>
        {mounted && (
          <div className="border">
            <Button
              variant={theme === 'light' ? 'secondary' : 'ghost'}
              size="iconSm"
              onClick={() => setTheme('light')}
              className={theme === 'light' ? 'text-primary' : ''}
            >
              <Sun size={16} />
            </Button>
            <Button
              variant={theme === 'system' ? 'secondary' : 'ghost'}
              size="iconSm"
              onClick={() => setTheme('system')}
              className={theme === 'system' ? 'text-primary' : ''}
            >
              <Monitor size={16} />
            </Button>
            <Button
              variant={theme === 'dark' ? 'secondary' : 'ghost'}
              size="iconSm"
              onClick={() => setTheme('dark')}
              className={theme === 'dark' ? 'text-primary' : ''}
            >
              <Moon size={16} />
            </Button>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer
