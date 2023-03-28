import { useContext, useEffect } from 'react'
import Box from '@mui/material/Box'
import MuiMarkdown from 'mui-markdown'

import { ShellContext } from 'contexts/ShellContext'

import './index.sass'

export const Disclaimer = () => {
  const { setTitle } = useContext(ShellContext)

  useEffect(() => {
    setTitle('Disclaimer')
  }, [setTitle])

  return (
    <Box className="Disclaimer max-w-3xl mx-auto p-4">
      <MuiMarkdown>
        {`
KUPTM Chit Chat is for general information purposes only. We are not responsible for any errors or omissions in the content on the website. We do not guarantee the accuracy, completeness, or timeliness of the information provided. All information is provided "as is" without warranty of any kind. Use the service at your own risk.
`}
      </MuiMarkdown>
    </Box>
  )
}
