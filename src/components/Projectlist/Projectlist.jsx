import React from 'react'
import '../../pages/style.css'
import ProjectCard from './ProjectCard'
import { Container,Row, Col } from 'react-bootstrap'
import logo1 from '../../Assets/blogPostImage.png'
import logo2 from '../../Assets/shopCartImage.png'
import logo3 from '../../Assets/cryptoUpdateImage.png'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={logo2}
                isBlog={false}
                title="SHOP CART 🛍️"
                description="Shop Cart is an online shopping app that provides users in India with a hassle-free way to shop for products from the US and have them delivered to their doorstep."
                vdLink="https://shop-cart-fawn.vercel.app/"
                ghLink="https://github.com/hemantmm/ShopCart"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={logo3}
                isBlog={false}
                title="CRYPTO UPDATE 🪙"
                description="CRYPTO UPDATE IS A CRYPTO APP THAT ALLOWS USERS TO SEARCH FOR INFORMATION ABOUT VARIOUS CRYPTOCURRENCIES IN REAL-TIME."
                vdLink="https://crypto-market-rp67.vercel.app/"
                ghLink="https://github.com/hemantmm/CryptoMarket"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={logo1}
                isBlog={true}
                title="SORTING VISUALIZER"
                description="This project sorting visualizer is a very simple UI and it allows the users to select the algorithm and the speed of the visualization."
                vdLink="https://sorting-visualizer-hemantmms-projects.vercel.app/"
                ghLink="https://github.com/hemantmm/sorting-visualizer"
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Grid Line Builders"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                vdLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Charlestown Pizza"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                vdLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                vdLink="https://todolist-rahul81.netlify.app/"

              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Projectlist