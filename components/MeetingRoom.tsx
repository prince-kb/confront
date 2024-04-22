import { cn } from '@/lib/utils'
import { CallControls, CallParticipantsList, CallStatsButton, CallingState, PaginatedGridLayout, SpeakerLayout, useCallStateHooks } from '@stream-io/video-react-sdk'
import React, {useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutList, Users } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import EndCallButton from './EndCallButton'
import Loader from './Loader'

  
type CallLayoutType = 'speaker-left' | 'speaker-right' | 'grid'

const MeetingRoom = () => {
  const searchParams = useSearchParams();

  // To check is it is personal room
  const isPersonalRoom = !!searchParams.get('personal')
  const [layout, setlayout] = useState('speaker-left')
  const [showParticipants, setShowParticipants] = useState(false)

  const {useCallCallingState} = useCallStateHooks();
  const callingState = useCallCallingState();
  if(callingState!==CallingState.JOINED) return <Loader/>
  const CallLayout = ()=>{
    switch(layout){
      case 'grid' :
        return <PaginatedGridLayout/>

      case 'speaker-right' :
         return <SpeakerLayout participantsBarPosition='right'/>

      default :
        return <SpeakerLayout participantsBarPosition='left'/>
    }
  }
  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout/>
        </div>
        <div className={cn(' h-[calc(100vh - 86px)] hidden ml-2',{'show-block' : showParticipants})}>
          <CallParticipantsList onClose={()=>setShowParticipants(false)}/>
        </div>
      </div>

      <div className="fixed bottom-0 flex-center w-full gap-5 flex-wrap">
        <CallControls/>

        <DropdownMenu>
          <div className="flex items-center">
          <DropdownMenuTrigger className='cursor-pointer rounded-2xl bg-[#19232D] px-4 py-4 hover:bg-[#4c535b]'>
            <LayoutList size={20} className='text-white'/>
          </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className='border-dark-1 bg-dark-1 text-white'>
            {['Grid','Speaker-Left','Speaker-Right'].map((item,index)=>(
              <div key = {index}>
                <DropdownMenuItem key={index} className="cursor-pointer" onClick={()=>setlayout(item.toLowerCase() as CallLayoutType)}>
                {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className='border-dark-1'/>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton/>
        <button onClick={()=>setShowParticipants((prev)=>!prev)} >
            <div className='cursor-pointer rounded-2xl bg-[#19232D] px-4 py-4 hover:bg-[#4c535b]'>
              <Users size={20} className='text-white'/>
            </div>
        </button>
        {
          !isPersonalRoom && <EndCallButton/>
        }

      </div>
    </section>
  )
}

export default MeetingRoom