export interface Author {
  name: string
  role: string
  slug: string
  image: any // TODO
  bio: any // blockContent
  cvSummary: any // blockContent
  links: {
    href: string
    linkContent: string
    linkAriaLabel?: string
    blank?: boolean
  }
}
