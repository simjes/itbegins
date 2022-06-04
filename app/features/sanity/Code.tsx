import React from 'react'
import Refractor from 'react-refractor'
import tsx from 'refractor/lang/tsx'
import swift from 'refractor/lang/swift'

Refractor.registerLanguage(tsx)
Refractor.registerLanguage(swift)

const Code = (props: any) => {
  if (!props.value?.code) {
    return null
  }
  const { language, code } = props.value

  return (
    <div className='mb-8'>
      <Refractor language={language} value={code} />
    </div>
  )
}

export default Code

export const MdCode: React.FC = ({ children }) => (
  <span className='rounded-md bg-slate-700 py-0.5 px-1 text-white'>
    {children}
  </span>
)
