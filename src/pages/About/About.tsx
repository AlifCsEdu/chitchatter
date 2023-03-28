import { useContext, useEffect } from 'react'
import MuiMarkdown from 'mui-markdown'
import Box from '@mui/material/Box'

import { ShellContext } from 'contexts/ShellContext'
import {
  messageTranscriptSizeLimit,
  messageCharacterSizeLimit,
} from 'config/messaging'

import './index.sass'

const messageTranscriptSizeLimitFormatted = Intl.NumberFormat().format(
  messageTranscriptSizeLimit
)

const messageCharacterSizeLimitFormatted = Intl.NumberFormat().format(
  messageCharacterSizeLimit
)

export const About = () => {
  const { setTitle } = useContext(ShellContext)

  useEffect(() => {
    setTitle('About')
  }, [setTitle])

  return (
    <Box className="About max-w-3xl mx-auto p-4">
      <MuiMarkdown>
        {`
### User Guide

KUPTM Chit Chat is a messaging website that allows students and friends to connect with each other using both video chat and text chat. Simply enter your name and start chatting!

#### Chat rooms

On KUPTM Chit Chat, you can create public or private rooms.

Public rooms can be joined by anyone with the room URL. Private rooms need a password that you agree on with the people you invite.

To connect with others, share the room URL. You'll be notified when people join the room.

##### Community rooms

There is [a public list of community rooms](https://github.com/jeremyckahn/chitchatter/wiki/Chitchatter-Community-Rooms) that you can join to discuss various topics.

Once you leave a chat room on KUPTM Chit Chat, all conversations are erased and not saved anywhere.

If you join a public room that already has people in it, you'll automatically see the conversation that's already happened. If nobody is in the room, there won't be any conversation history.

You can only see up to ${messageTranscriptSizeLimitFormatted} messages of chat history for all rooms.

#### Message Authoring

Chat messages support [GitHub-flavored Markdown](https://github.github.com/gfm/) with code syntax highlighting.

Press \`Enter\` to send a message. Press \`Shift + Enter\` to insert a line break. Message size is limited to ${messageCharacterSizeLimitFormatted} characters.
        `}
      </MuiMarkdown>
    </Box>
  )
}
