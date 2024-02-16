import { ComponentType } from 'react'

type MdxComponentsType = {
	h2: ComponentType<{ className?: string }>
}

export const mdxComponents: MdxComponentsType = {
	h2: ({ className, ...props }) => (
		<h2 className={['text-3xl', className].join(' ')} {...props} />
	),
}
