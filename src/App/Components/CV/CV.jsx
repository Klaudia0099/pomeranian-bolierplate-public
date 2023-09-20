import './styles.css';
import KS_CV from '../../Images/KS_CV.jpg'

export const CV = () => {
  return (
    <>
      <div className='headerCvConteiner'>
        <h1>Klaudia Stefaniak</h1>
        <h4>Junior Frontend Developer <br /> Graphic Designer</h4>
      </div>
      <div className='mainCv'>


        <div className='mainCvConteiner'>

          <div className='mainCvConteiner__section'>
            <div className='mainCvConteiner__section__block'>
              <h2>Tech stack</h2>
              <div>
                <p><strong>Dev:</strong> HTML5, CSS3, XML, JavaScript, Jest, React.js, React Native, React Redux, Node.js, TypeScript, REST API, JSON, WSL, Prettier, ESLint, Husky, Visual Studio Code, Git/GitHub</p>
                <p><strong>DB:</strong> Firebase, SQL queries</p>
                <p><strong>Graphics:</strong> Photopia, GIMP, Figma, Adobe: Photoshop, Illustrator, Stock, InDesign, Premiere Pro</p>
                <p><strong>OS:</strong> MS Windows, Linux</p>
                <p><strong>Other:</strong> MS Office, M365, JIRA, Confluence, Redmine, AutoCAD, SketchUp</p>
                <p><strong>Work methodologies:</strong> SCRUM/Agile</p>
              </div>
            </div>

            <div className='mainCvConteiner__section__block'>
              <h2>Languages</h2>
              <div>
                <p><strong>English:</strong> B2</p>
                <p><strong>Spanish:</strong> B1</p>
                <p><strong>German:</strong> A1</p>
              </div>
            </div>

            <div className='mainCvConteiner__section__block'>
              <h2>Summary</h2>
              <div>
                <p>
                  Highly <strong>motivated</strong> and skilled <strong>professional</strong> with a strong background in <strong>graphics design</strong>, currently transitioning into the IT industry as a <strong>Junior Frontend Developer</strong>. Successfully completed the specialized <strong>Pomeranian START.IT</strong> course, which has provided comprehensive training and prepared me for this exciting career shift.
                  As I embrace this new journey as a Junior Frontend Developer, I am excited to leverage my <strong>diverse skill set</strong> 
                  to create exceptional user experiences and contribute to the success of your organization. My artistic flair and <strong>dedication</strong> to continuous improvement make me an <strong>ideal candidate</strong> to thrive in a programming role, ensuring the delivery of <strong>high-quality code</strong> and engaging web applications. I am eager to join a dynamic team where I can apply my talents in <strong>design</strong> and development, working collaboratively to achieve <strong>outstanding results</strong> and further enhance my capabilities as a frontend developer.
                </p>
                <br />
                <p><strong>Key skills</strong></p>
                <ul>
                  <li>good understanding of  <strong>frontend programming</strong> fundamentals</li>
                  <li>strong sense of  <strong>artistic flair</strong> and talent in graphics design</li>
                  <li>proven track record of  <strong>effective work with clients</strong>, understanding their requirements and delivering tailored solutions that meet their needs</li>
                  <li>the ability to <strong>think outside the box</strong> and apply  <strong>creative solutions</strong></li>
                  <li>excellent <strong>collaboration and communication</strong> skills</li>
                </ul>
              </div>
            </div>

            <div className='mainCvConteiner__section__block'>
              <h2>Personal experience</h2>
              <div>
                <p><strong>05/2023 – 08/2023 | Junior Frontend Developer | Pomeranian START.IT </strong></p>
                <p><strong>Course website: <a href="https://pomeranianstartit.pl/">Pomeranian Start It</a></strong></p>
                <p>Certificate of Completion issued by Rockin’iT </p>
                <p>An intensive three-month programming course, led by experienced trainers, encompassed numerous hours
                  of live coding and hands-on work on diverse practical projects.
                </p>
                <p>This course provided participants with a solid and comprehensive foundation necessary for launching a career
                  in the IT industry as a Frontend Developer.
                </p>
                <p>The main technologies covered were HTML5, CSS3, JavaScript, React, Redux and TypeScript.</p>
                <p>Students also utilized tools such as Git, GitHub, Redmine, JIRA, and Confluence.</p>
                <br />
                <p><strong>12/2021 – 08/2023  | Graphic Designer | WeNet</strong></p>
                <ul>
                  <li>created interactive and engaging image slideshows</li>
                  <li>edited and enhanced images to ensure they met quality and branding standards for web content</li>
                  <li>assembled and edited video footage to create engaging multimedia content for websites and marketing campaigns</li>
                  <li>crafted logos that represented the identity and values of clients' brands</li>
                  <li>conducted marketing activities for small and medium-sized businesses (marketing strategies implementation, content creation, social media and advertising campaigns management, etc.)</li>
                  <li>monitored and analyzed the performance of design elements and marketing campaigns to recommendations for potential improvements</li>
                  <li>engaged in client interactions, including meetings, to gather project requirements, discuss design concepts and provide updates on project progress</li>
                </ul>
                <br />
                <p><strong>07/2020 – 09/2020  | Graphic Designer (internship)  | Danhoss</strong></p>
                <ul>
                  <li>designed visually appealing product advertisements</li>
                  <li>crafted layouts and illustrations in accordance with established template and project standards</li>
                  <li>designed and prepared materials for print, including advertisements, brochures and logos</li>
                  <li>created graphic materials for the company's website</li>
                  <li>assisted in photography and image editing to enhance product presentation</li>
                </ul>
              </div>

            </div>

            <div className='mainCvConteiner__section__block'>
              <h2>Education</h2>
              <div>
                <p><strong>10/2023 – present | WSB Merito University in Bydgoszcz</strong></p>
                <p><strong>Computer Science</strong>, Engineer’s degree</p>
                <p><strong>09/2019 – 06/2020 | Escuela de Arte y Superior de Diseño de Orihuela (Spain)</strong></p>
                <p><strong>Computer Graphics</strong>, Erasmus+ Programme</p>
                <p><strong>10/2018 – 06/2019 | Bydgoszcz University of Science and Technology</strong></p>
                <p><strong>Computer Science</strong>, Web and graphics design specialization, Engineer’s degree</p>
              </div>
            </div>

            <div className='mainCvConteiner__section__block'>
              <h2>Awards</h2>
              <div>
                <p>
                  <strong>09/2020</strong>: Winner of the annual poster design contest (Fiesta de la Reconquista) <br />
                </p>
              </div>
            </div>
            <div className='mainCvConteiner__section__block'>
              <h2>Passions</h2>
              <div>
                <ul>
                  <li>programming</li>
                  <li>graphic design</li>
                  <li>animation creation</li>
                  <li>culture</li>
                  <li>art</li>
                  <li>travel</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='mainCvConteiner__personalSection'>
            <img src={KS_CV} alt="Klaudia img" />
            <div>
              <h2>E-mail:</h2>
              <p><a href="mailto: klaudiaastefaniak@gmail.com" target="_blank" rel="noopener noreferrer">klaudiaastefaniak@gmail.com</a></p>
              <h2>Mobile:</h2>
              <p><a href="tel:+48 726 439 993" target="_blank" rel="noopener noreferrer">+48 726 439 993</a></p>
              <h2>Linkedin:</h2>
              <p><a href="https://www.linkedin.com/in/klaudiastefaniak/" target="_blank" rel="noopener noreferrer">Klaudia Stefaniak</a></p>
              <h2>GitHub:</h2>
              <p><a href="https://github.com/Klaudia0099" target="_blank" rel="noopener noreferrer">Klaudia Stefaniak</a></p>
            </div>
          </div>


        </div>
        <p className='agreementsCv'>I agree to the processing of personal data provided in this document for realizing the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).</p>
      </div>
    </>
  );
};