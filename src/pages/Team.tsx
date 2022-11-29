import React from 'react'
import PageHeader from '../components/CommonPages/PageHeader'
import TeamComponent from '../components/home/Team'

const Team = () => {
  return (
    <>
    <PageHeader title='Team Members'/>
    <TeamComponent/>
    <TeamComponent hideTitle={true}/>
    </>
  )
}

export default Team