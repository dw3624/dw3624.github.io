import { NotionAPI } from 'notion-client'
import React from 'react'
import NotionPage from './notion-page'

const NOTION_POST_ID = '69a26827954545ee94ba401f49b42ccb?pvs=4'

const AboutPage = async () => {
	const notion = new NotionAPI()
	const recordMap = await notion.getPage(NOTION_POST_ID)

	return (
		<section>
			<NotionPage recordMap={recordMap} />
		</section>
	)
}

export default AboutPage
