'use client';
import React,{useState} from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'


const MeetingTypeList = () => {
    const router = useRouter();
    const [meeting, setMeeting] = useState<'isInstantMeeting' | 'isScheduleMeeting'| 'isJoiningMeeting' | undefined>()
    const {user} = useUser();
    const client = useStreamVideoClient();
    const [values,setValues] = useState({
        dateTime: new Date(),
        description : '',
        link : ''
    })
    const [callDetails, setCallDetails] = useState<Call>()

    const createMeeting= async ()=>{
        if(!client || !user) return;
        try{
            const id = crypto.randomUUID();
            const call = client.call('default',id);
            if(!call) throw new Error('Call cannot be created');
            const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()
            const description = values.description || 'Instant Meeting';
            console.log("22")
            
            await call.getOrCreate({
                data:{
                    starts_at: startsAt,
                    custom : {
                        description
                    }
                }
            })
            setCallDetails(call);
            if(!values.description){
                router.push(`/meeting/${call.id}`)
            }
        }catch(err){
            console.log(err)
        }
    }
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-col-2 xl:grid-cols-4'>
        <HomeCard
            img="/icons/add-meeting.svg"
            title="New Meeting"
            desc="Start a meeting now!"
            handleClick={()=>{setMeeting('isInstantMeeting'); }}
            className="bg-orange-1"
        />
        <HomeCard
            img="/icons/schedule.svg"
            title="Schedule Meeting"
            desc="Plan a meeting in advance"
            handleClick={()=>setMeeting('isScheduleMeeting')}
            className="bg-blue-1"
        />
        <HomeCard
            img="/icons/recordings.svg"
            title="View recordings"
            desc="Check out your recordings"
            handleClick={()=>setMeeting('isJoiningMeeting')}
            className="bg-purple-1"
            />
        <HomeCard
            img="/icons/join-meeting.svg"
            title="Join Meeting"
            desc="Via Invitation link"
            handleClick={()=>router.push('/recordings')}
            className="bg-yellow-1"
            />
        <MeetingModal
            isOpen={meeting==='isInstantMeeting'}
            onClose={()=>setMeeting(undefined)}
            title="Start an Instant Meeting"
            className="text-center"
            buttonText="Start Meeting"
            handleClick={createMeeting}
        />
    </section>
  )
}

export default MeetingTypeList