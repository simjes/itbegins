export interface Tag {
  label: string
  value: string
}

export interface ExperienceSanity {
  _id: string
  title: string
  sortDate: string
  startDate?: string
  endDate?: string
  jobTag: Tag
  roleTag: Tag
  techTags: Tag[]
  body: any // blockContent
}

export interface Experience extends ExperienceSanity {
  startDate: string
}

export interface Project {
  _id: string
  title: string
  body: any // blockContent@
  techTags: Tag[]
}
