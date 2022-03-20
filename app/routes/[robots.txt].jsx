export const loader = () => {
  const robotText = `Sitemap: https://itbegins.no/sitemap.xml`

  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
