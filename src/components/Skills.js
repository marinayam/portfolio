import {Container, Row, Col} from 'react-bootstrap';
import { CodeSlash } from "react-bootstrap-icons"
import { LayoutTextWindow } from "react-bootstrap-icons"

export const Skills = () => {
  
  return (
  <section className="skill" id="skills">
    <Container>
      <Row>
        <Col lg>
          <div className="skill-bx">
            <div className='skills-icon'>
              <p><CodeSlash size={35} /></p>
            </div>
            <h2>Web Engineer</h2>
            <h4>Language</h4>
            <p>HTML, CSS, Javascript,PHP, SQL</p>
            <h4>Flamework,Tools</h4>
            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>Next.js</li>
              <li>Laravel</li>
              <li>Git</li>
            </ul>
          </div>
        </Col>
        <Col lg>
          <div className="skill-bx gap">
            <div className='skills-icon'>
              <p><LayoutTextWindow size={35} /></p>
            </div>
            <h2>Web Designer</h2>
            <h4>Experience</h4>
            <p>UX, UI, Web,Thumbnail</p>
            <h4>Tools</h4>
            <ul>
              <li>Figma</li>
              <li>Wordpress</li>
              <li>Webflow</li>
              <li>Wix</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}