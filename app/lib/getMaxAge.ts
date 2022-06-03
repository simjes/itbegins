export const getMaxAge = (publishedAt: string) => {
  const oneDayInMs = 86400000
  const msSincePublished = Date.now() - Date.parse(publishedAt)
  return msSincePublished < oneDayInMs
    ? '1800' // 30 mins
    : '2630000' // one month
}
