export interface EmployeeOverview {
  image: string
  name: string
  role: string
  cvUrl: string
}

export const mapToEmployeeOverview = (
  notionUserResult: Record<string, any>,
) => {
  const userData = notionUserResult.properties

  return {
    image: userData['ImageUrl']['url'],
    name: userData['Name']['rich_text'][0]['plain_text'],
    role: userData['Role']['rich_text'][0]['plain_text'],
    cvUrl: userData['CvUrl']['url'],
  }
}
