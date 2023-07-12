import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {AiFillGithub } from 'react-icons/ai'

function ProjectCard(props) {
  return (
    <Card className='project-card-view'>
      <Card.Img variant='top' src={props.imgPath} alt='card-img' />
      <Card.Body>
        <Card.Title style={{textAlign:"center", fontSize:"25px"}}>{props.title}</Card.Title>
        <Card.Text style={{textAlign:"justify"}}>
          {props.description}
        </Card.Text>
        <Button className='viewbtn' variant='primary' href={props.vdLink} target='_blank'>
          Demo
          <BsBoxArrowUpRight style={{marginLeft:"5px"}} />
        </Button>
        <Button className='viewbtn btn2' variant='primary' href={props.ghLink} target='_blank1'>
          Code
          <AiFillGithub style={{marginLeft:"5px"}} />
        </Button>
        {/* {"/n"}
        {"/n"} */}


        {/* {!props.isBlog && props.demoLink  &&(
          <Button
          variant='primary'
          href={props.demoLink}
          target='_blank'
          style={{marginLeft:"10px"}}
          >
            {"Demo"}
          </Button>
        )} */}
        
      </Card.Body>
    </Card>
  )
}

export default ProjectCard