export interface Tag {
  label: string
  value: string
}

export interface Experience {
  title: string
  sortDate: string
  startDate?: string
  endDate?: string
  jobTag: Tag
  roleTag: Tag
  techTags: Tag[]
  body: any // blockContent
}
