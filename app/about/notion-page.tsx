'use client'

import { ExtendedRecordMap } from 'notion-types'
import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'

import 'katex/dist/katex.min.css'
import { useTheme } from 'next-themes'
import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'

const NotionPage = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
	const { theme } = useTheme()
	console.log(theme)

	if (!recordMap) {
		return null
	}

	return (
		<NotionRenderer
			recordMap={recordMap}
			fullPage={true}
			darkMode={theme === 'light' ? false : true}
		/>
	)
}

export default NotionPage
