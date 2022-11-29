import React from 'react'
import PageHeader from '../components/CommonPages/PageHeader'
import AppointmenComponent from '../components/home/Appointment'

const Appointment = () => {
  return (
    <>
    <PageHeader title='Appointment'/>
    <AppointmenComponent defaultTheme={true}/>
    </>
  )
}

export default Appointment