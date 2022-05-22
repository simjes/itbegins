import React from 'react'
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import jsx from 'refractor/lang/jsx'
import ts from 'refractor/lang/typescript'
import tsx from 'refractor/lang/tsx'
import swift from 'refractor/lang/swift'

Refractor.registerLanguage(js)
Refractor.registerLanguage(jsx)
Refractor.registerLanguage(ts)
Refractor.registerLanguage(tsx)
Refractor.registerLanguage(swift)

const Code = (props: any) => {
  if (!props.value?.code) {
    return null
  }
  const { language, code } = props.value

  return <Refractor language={language} value={code} />
}

export default Code
