import React from 'react'
import { Card, Divider, Header } from 'semantic-ui-react'
import {Image} from 'semantic-ui-react'
export default function Appointment() {

    const imageurl = "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww";



  return (
    <div>
    <Card>
    <Card.Content> 

       
    <Header as='h2' textAlign='center' style={{ marginBottom: '1.5rem' }}>
          Current Patient
    </Header>
   
      <Image size={'small'} className='ImagePatien' src={imageurl} />
      <Header> Ahmed Ibrahim hamed</Header>
    </Card.Content>
    </Card>



    <Card>
    <Card.Content> 
     <div className='info'>
      <span className='type'>Gender </span>
      <span>Male</span>
     </div>
     <div className='info'>
      <span className='type'>BirthDay </span>
      <span>Oct 25 ,1990</span>
     </div>
     <div className='info'>
      <span className='type'>Age </span>
      <span>50 year</span>
     </div>
     <div className='info'>
      <span className='type'>Height </span>
      <span>180cm</span>
     </div>
     <div className='info'>
      <span className='type'>Weight </span>
      <span>80kg</span>
     </div>
     <div className='info'>
      <span className='type'>Married Status </span>
      <span>Male</span>
     </div>
     <div className='info'>
      <span className='type'>Habbit </span>
      <span>Smoking</span>
     </div>
     <div className='info'>
      <span className='type'>Address </span>
      <span>Alexandria</span>
     </div>
    <Divider/>
    <h4>Past History</h4>
    <div className='info'>
      <span className='type'>Diseases </span>
      <span>HTN,Diabetes</span>
     </div>
     <div className='info'>
      <span className='type'>Opearatopns </span>
      <span>Tellsecontmy</span>
     </div>
     <div className='info'>
      <span className='type'>Blood Transfusion </span>
      <span>No</span>
     </div>
     <Divider/>
     <h4>Familly History</h4>
     <div className='info'>
      <span className='type'>Blood Simillar Condition </span>
      <span>No</span>
     </div>
     <div className='info'>
      <span className='type'>Common Diseases </span>
      <span>DM,HTN</span>
     </div>
     <div className='info'>
      <span className='type'>+ve Congtisnty </span>
      <span>No</span>
      
     </div>

 
      </Card.Content>
      </Card>


        </div>
  )
}
